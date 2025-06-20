// 飞书API配置文件
const FEISHU_CONFIG = {
    // 飞书应用配置 - 需要从飞书开发者后台获取
    APP_ID: 'cli_a8de52e616fad00e', // 替换为你的飞书应用 App ID
    APP_SECRET: 'UZcY015L5NmepC1EW31Jzbi4eyJmIlT5', // 替换为你的飞书应用 App Secret
    
    // 多维表格配置
    APP_TOKEN: 'VUwJbeFm4aw3Xmsov3DckRIFn1b', // 多维表格的 App Token
    TABLE_ID: 'tblLJXccX5FqTKPj', // 数据表的 Table ID
    
    // API 端点
    API_BASE_URL: 'https://open.feishu.cn/open-apis',
    TOKEN_URL: '/auth/v3/tenant_access_token/internal',
    BITABLE_RECORDS_URL: '/bitable/v1/apps/{app_token}/tables/{table_id}/records',
    
    // 本地代理服务器配置（用于避免跨域问题）
    PROXY_URL: '/api/feishu' // 需要在服务器端配置代理接口
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FEISHU_CONFIG;
} 