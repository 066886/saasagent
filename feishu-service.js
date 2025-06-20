/**
 * 飞书多维表格 API 服务
 * 处理邮箱数据提交到飞书多维表格
 */

class FeishuService {
    constructor() {
        this.accessToken = null;
        this.tokenExpireTime = null;
    }

    /**
     * 获取访问令牌
     */
    async getAccessToken() {
        // 检查token是否过期
        if (this.accessToken && this.tokenExpireTime && Date.now() < this.tokenExpireTime) {
            return this.accessToken;
        }

        try {
            const response = await fetch('/api/feishu/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    app_id: FEISHU_CONFIG.APP_ID,
                    app_secret: FEISHU_CONFIG.APP_SECRET
                })
            });

            const data = await response.json();
            
            if (data.code === 0) {
                this.accessToken = data.tenant_access_token;
                // 设置过期时间，提前5分钟刷新
                this.tokenExpireTime = Date.now() + (data.expire - 300) * 1000;
                return this.accessToken;
            } else {
                throw new Error('获取访问令牌失败: ' + data.msg);
            }
        } catch (error) {
            console.error('获取飞书访问令牌失败:', error);
            throw error;
        }
    }

    /**
     * 提交邮箱数据到多维表格
     */
    async submitEmailToTable(emailData) {
        try {
            const token = await this.getAccessToken();
            
            // 构造记录数据
            const recordData = {
                fields: {
                    "姓名": emailData.name,
                    "邮箱": emailData.email,
                    "公司": emailData.company,
                    "角色": emailData.role,
                    "需求描述": emailData.requirements,
                    "提交时间": new Date().toISOString(),
                    "状态": "待处理"
                }
            };

            const response = await fetch('/api/feishu/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    app_token: FEISHU_CONFIG.APP_TOKEN,
                    table_id: FEISHU_CONFIG.TABLE_ID,
                    record: recordData
                })
            });

            const result = await response.json();
            
            if (result.code === 0) {
                return {
                    success: true,
                    recordId: result.data.record.record_id,
                    message: '提交成功！我们会尽快与您联系。'
                };
            } else {
                throw new Error('提交失败: ' + result.msg);
            }
        } catch (error) {
            console.error('提交邮箱数据失败:', error);
            return {
                success: false,
                message: '提交失败，请稍后重试或直接联系我们。'
            };
        }
    }

    /**
     * 验证邮箱格式
     */
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * 验证表单数据
     */
    validateFormData(formData) {
        const errors = [];

        if (!formData.name || formData.name.trim().length < 2) {
            errors.push('请输入有效的姓名（至少2个字符）');
        }

        if (!formData.email || !this.validateEmail(formData.email)) {
            errors.push('请输入有效的邮箱地址');
        }

        if (!formData.company || formData.company.trim().length < 2) {
            errors.push('请输入有效的公司名称');
        }

        if (!formData.role) {
            errors.push('请选择您的角色');
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }
}

// 创建全局实例
window.feishuService = new FeishuService(); 