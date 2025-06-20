# 飞书多维表格集成配置指南

## 功能说明

本项目集成了飞书多维表格功能，用户在网站表单中提交的邮箱等信息将自动保存到指定的飞书多维表格中。

## 准备工作

### 1. 创建飞书开发者应用

1. 访问 [飞书开发者控制台](https://open.feishu.cn/app)
2. 点击"创建应用" -> "自建应用"
3. 填写应用名称（如：SaasAgent邮箱收集器）
4. 完成创建后，获取 `App ID` 和 `App Secret`

### 2. 配置应用权限

在应用管理页面，需要开通以下权限：

**必需权限：**
- `bitable:app` - 获取多维表格信息
- `bitable:app:readonly` - 查看多维表格
- `bitable:app:readwrite` - 编辑多维表格

**权限配置步骤：**
1. 进入应用详情页
2. 点击"权限管理"
3. 搜索并添加上述权限
4. 保存配置

### 3. 创建多维表格

1. 在飞书中创建一个新的多维表格
2. 设置表格列字段，建议包含以下列：
   - `姓名` (文本类型)
   - `邮箱` (文本类型)
   - `公司` (文本类型)
   - `角色` (单选类型，选项：SaaS服务商、系统集成商、企业用户)
   - `需求描述` (多行文本类型)
   - `提交时间` (日期时间类型)
   - `状态` (单选类型，选项：待处理、已联系、已成交)

### 4. 获取表格信息

从多维表格的 URL 中提取必要信息：

```
https://xxx.feishu.cn/base/PtRdbPjCFa5Og5sry0lcD1yPnKg?table=tblKPtVpk0xLDmAD&view=vew4gNVM5T
```

- `APP_TOKEN`: `PtRdbPjCFa5Og5sry0lcD1yPnKg`
- `TABLE_ID`: `tblKPtVpk0xLDmAD`

### 5. 授权应用访问表格

1. 在多维表格中，点击右上角"更多" -> "高级权限"
2. 点击"添加协作者"
3. 搜索并添加你的飞书应用
4. 设置权限为"可编辑"

## 配置方法

### 方法一：环境变量配置（推荐）

1. 复制 `env-config-example.txt` 为 `.env`
2. 填入真实的配置值：

```bash
FEISHU_APP_ID=cli_your_real_app_id
FEISHU_APP_SECRET=your_real_app_secret
FEISHU_APP_TOKEN=your_real_app_token
FEISHU_TABLE_ID=your_real_table_id
PORT=3000
```

### 方法二：直接修改配置文件

编辑 `config.js` 文件，替换占位符：

```javascript
const FEISHU_CONFIG = {
    APP_ID: 'cli_your_real_app_id',
    APP_SECRET: 'your_real_app_secret',
    APP_TOKEN: 'your_real_app_token',
    TABLE_ID: 'your_real_table_id',
    // ... 其他配置
};
```

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动服务器

**开发模式：**
```bash
npm run dev
```

**生产模式：**
```bash
npm start
```

### 3. 访问网站

打开浏览器访问：http://localhost:3000

### 4. 健康检查

访问健康检查接口：http://localhost:3000/api/health

该接口会显示配置状态，确保所有配置项都显示"✅ 已配置"。

## 测试流程

1. 确保服务器正常启动
2. 打开网站页面
3. 滚动到页面底部的联系表单
4. 填写所有必填字段
5. 点击"申请免费试用"
6. 观察页面提示和浏览器控制台
7. 检查飞书多维表格是否收到新记录

## 常见问题

### 1. 获取访问令牌失败

**可能原因：**
- App ID 或 App Secret 配置错误
- 网络连接问题

**解决方法：**
- 检查配置是否正确
- 确认网络可以访问飞书API

### 2. 向多维表格添加记录失败

**可能原因：**
- App Token 或 Table ID 错误
- 应用未获得表格访问权限
- 字段名称不匹配

**解决方法：**
- 检查表格URL提取的信息
- 确认应用已被添加为表格协作者
- 检查表格列名是否与代码中一致

### 3. 跨域问题

本项目使用服务器端代理解决跨域问题，确保：
- 使用 `npm start` 启动Node.js服务器
- 而不是直接打开HTML文件
- 不要使用 `python -m http.server` 等静态服务器

### 4. 权限不足

确保在飞书开发者控制台中：
- 已添加必要的API权限
- 权限申请已通过审核
- 应用已发布版本

## 数据格式

提交到多维表格的数据格式：

```json
{
  "fields": {
    "姓名": "张三",
    "邮箱": "zhangsan@company.com",
    "公司": "某某科技有限公司",
    "角色": "SaaS服务商",
    "需求描述": "希望了解AI配置专家的详细方案",
    "提交时间": "2024-01-15T10:30:00.000Z",
    "状态": "待处理"
  }
}
```

## 安全建议

1. **不要在前端代码中暴露敏感信息**
   - App Secret 只能在服务器端使用
   - 使用环境变量存储敏感配置

2. **定期更新Access Token**
   - 系统会自动处理token刷新
   - Token有效期为2小时

3. **API调用频率限制**
   - 飞书API有频率限制，避免频繁调用
   - 系统已实现基本的错误处理

4. **表格权限控制**
   - 只授予应用必要的最小权限
   - 定期检查协作者列表

## 生产部署

### 使用PM2部署

```bash
# 安装PM2
npm install -g pm2

# 启动应用
pm2 start server.js --name "saasagent-website"

# 设置开机自启
pm2 startup
pm2 save
```

### 使用Docker部署

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 技术支持

如遇问题，请检查：
1. 服务器启动日志
2. 浏览器控制台错误信息
3. 飞书开发者控制台的应用状态
4. 多维表格的权限设置

更多技术支持，请联系：hello@saasagent.pro 