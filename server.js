/**
 * 飞书多维表格代理服务器
 * 用于处理前端与飞书API之间的通信，避免跨域问题并保护API密钥
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// 飞书API配置 - 优先使用环境变量，否则使用配置文件
let FEISHU_CONFIG;
try {
    // 尝试读取config.js文件
    const configFile = require('./config.js');
    FEISHU_CONFIG = {
        APP_ID: process.env.FEISHU_APP_ID || configFile.APP_ID || 'cli_your_app_id_here',
        APP_SECRET: process.env.FEISHU_APP_SECRET || configFile.APP_SECRET || 'your_app_secret_here',
        APP_TOKEN: process.env.FEISHU_APP_TOKEN || configFile.APP_TOKEN || 'your_app_token_here',
        TABLE_ID: process.env.FEISHU_TABLE_ID || configFile.TABLE_ID || 'your_table_id_here',
        API_BASE_URL: 'https://open.feishu.cn/open-apis'
    };
} catch (e) {
    // 如果config.js不存在，使用环境变量
    FEISHU_CONFIG = {
        APP_ID: process.env.FEISHU_APP_ID || 'cli_your_app_id_here',
        APP_SECRET: process.env.FEISHU_APP_SECRET || 'your_app_secret_here',
        APP_TOKEN: process.env.FEISHU_APP_TOKEN || 'your_app_token_here',
        TABLE_ID: process.env.FEISHU_TABLE_ID || 'your_table_id_here',
        API_BASE_URL: 'https://open.feishu.cn/open-apis'
    };
}

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// 内存缓存访问令牌
let tokenCache = {
    token: null,
    expireTime: 0
};

/**
 * 获取飞书访问令牌
 */
async function getAccessToken() {
    // 检查缓存的token是否还有效
    if (tokenCache.token && Date.now() < tokenCache.expireTime) {
        return tokenCache.token;
    }

    try {
        const response = await axios.post(
            `${FEISHU_CONFIG.API_BASE_URL}/auth/v3/tenant_access_token/internal`,
            {
                app_id: FEISHU_CONFIG.APP_ID,
                app_secret: FEISHU_CONFIG.APP_SECRET
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.data.code === 0) {
            const { tenant_access_token, expire } = response.data;
            
            // 缓存token，提前5分钟过期
            tokenCache.token = tenant_access_token;
            tokenCache.expireTime = Date.now() + (expire - 300) * 1000;
            
            return tenant_access_token;
        } else {
            throw new Error(`获取访问令牌失败: ${response.data.msg}`);
        }
    } catch (error) {
        console.error('获取飞书访问令牌失败:', error);
        throw error;
    }
}

/**
 * 代理接口：获取访问令牌
 */
app.post('/api/feishu/token', async (req, res) => {
    try {
        const token = await getAccessToken();
        res.json({
            code: 0,
            tenant_access_token: token,
            expire: 7200,
            msg: 'success'
        });
    } catch (error) {
        res.status(500).json({
            code: -1,
            msg: error.message
        });
    }
});

/**
 * 代理接口：向多维表格添加记录
 */
app.post('/api/feishu/records', async (req, res) => {
    try {
        const { app_token, table_id, record } = req.body;
        const token = await getAccessToken();

        const response = await axios.post(
            `${FEISHU_CONFIG.API_BASE_URL}/bitable/v1/apps/${app_token}/tables/${table_id}/records`,
            record,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error('向多维表格添加记录失败:', error);
        
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({
                code: -1,
                msg: '服务器内部错误'
            });
        }
    }
});

/**
 * 表单提交接口：直接处理前端表单数据
 */
app.post('/api/feishu/submit', async (req, res) => {
    try {
        const { name, email, company } = req.body;
        
        // 验证必填字段
        if (!name || !email || !company) {
            return res.status(400).json({
                code: -1,
                msg: '请填写所有必填字段'
            });
        }

        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                code: -1,
                msg: '邮箱格式不正确'
            });
        }

        const token = await getAccessToken();

        // 构建要插入的记录 - 根据多维表格的实际字段结构
        const record = {
            fields: {
                '邮箱': email,
                '姓名': name,
                '公司': company
            }
        };

        // 调用飞书多维表格API
        const response = await axios.post(
            `${FEISHU_CONFIG.API_BASE_URL}/bitable/v1/apps/${FEISHU_CONFIG.APP_TOKEN}/tables/${FEISHU_CONFIG.TABLE_ID}/records`,
            record,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.data.code === 0) {
            res.json({
                code: 0,
                msg: '提交成功！我们会在24小时内与您联系。',
                record_id: response.data.data.record.record_id
            });
        } else {
            res.status(500).json({
                code: -1,
                msg: '提交失败，请稍后重试'
            });
        }
    } catch (error) {
        console.error('表单提交失败:', error);
        
        if (error.response) {
            console.error('飞书API错误:', error.response.data);
            res.status(500).json({
                code: -1,
                msg: `提交失败: ${error.response.data.msg || '服务器错误'}`
            });
        } else {
            res.status(500).json({
                code: -1,
                msg: '网络错误，请稍后重试'
            });
        }
    }
});

/**
 * 健康检查接口
 */
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        feishu_config: {
            app_id_configured: !!FEISHU_CONFIG.APP_ID && FEISHU_CONFIG.APP_ID !== 'cli_your_app_id_here',
            app_secret_configured: !!FEISHU_CONFIG.APP_SECRET && FEISHU_CONFIG.APP_SECRET !== 'your_app_secret_here',
            app_token_configured: !!FEISHU_CONFIG.APP_TOKEN && FEISHU_CONFIG.APP_TOKEN !== 'your_app_token_here',
            table_id_configured: !!FEISHU_CONFIG.TABLE_ID && FEISHU_CONFIG.TABLE_ID !== 'your_table_id_here'
        }
    });
});

/**
 * 默认路由：返回主页
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * 错误处理中间件
 */
app.use((err, req, res, next) => {
    console.error('服务器错误:', err);
    res.status(500).json({
        code: -1,
        msg: '服务器内部错误'
    });
});

/**
 * 404处理
 */
app.use('*', (req, res) => {
    res.status(404).json({
        code: -1,
        msg: '接口不存在'
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`🚀 服务器启动成功！`);
    console.log(`📍 访问地址: http://localhost:${PORT}`);
    console.log(`🔍 健康检查: http://localhost:${PORT}/api/health`);
    console.log('\n📋 飞书配置状态:');
    console.log(`   APP_ID: ${FEISHU_CONFIG.APP_ID !== 'cli_your_app_id_here' ? '✅ 已配置' : '❌ 未配置'}`);
    console.log(`   APP_SECRET: ${FEISHU_CONFIG.APP_SECRET !== 'your_app_secret_here' ? '✅ 已配置' : '❌ 未配置'}`);
    console.log(`   APP_TOKEN: ${FEISHU_CONFIG.APP_TOKEN !== 'your_app_token_here' ? '✅ 已配置' : '❌ 未配置'}`);
    console.log(`   TABLE_ID: ${FEISHU_CONFIG.TABLE_ID !== 'your_table_id_here' ? '✅ 已配置' : '❌ 未配置'}`);
    
    if (FEISHU_CONFIG.APP_ID === 'cli_your_app_id_here') {
        console.log('\n⚠️  请配置飞书应用参数：');
        console.log('   1. 设置环境变量或修改 config.js 文件');
        console.log('   2. 获取飞书应用的 APP_ID 和 APP_SECRET');
        console.log('   3. 获取多维表格的 APP_TOKEN 和 TABLE_ID');
    }
});

module.exports = app; 