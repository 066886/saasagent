# Cloudflare Pages部署指南

## 🌟 方案优势
- 国内访问速度更快
- 免费SSL证书  
- 自动构建和部署
- 与GitHub完美集成

## 📋 部署步骤

### 1. 连接GitHub仓库
1. 访问 [Cloudflare Pages](https://pages.cloudflare.com)
2. 点击"创建项目"
3. 选择"连接到Git"
4. 授权并选择您的GitHub仓库：`zzh506767805/saasagent`

### 2. 配置构建设置
```yaml
框架预设: 无
构建命令: npm run build
构建输出目录: public
根目录: /
```

### 3. 环境变量（如果需要）
如果您的项目需要环境变量，在"设置"→"环境变量"中添加。

### 4. 部署配置文件
创建 `_redirects` 文件处理API路由：

```
/api/* https://your-vercel-app.vercel.app/api/* 200
/* /index.html 200
```

## 🔄 自动部署
- 每次推送到main分支都会自动部署
- 支持预览部署（Pull Request）
- 部署历史和回滚功能

## 🌍 自定义域名
1. 在Cloudflare Pages项目中点击"自定义域"
2. 添加您的域名
3. 按照提示配置DNS记录

## ⚡ 性能优化
Cloudflare Pages自动提供：
- 全球CDN加速
- 自动HTTPS
- HTTP/2 和 HTTP/3
- 智能压缩
- 图片优化

## 🆚 对比分析

| 特性 | Vercel + Cloudflare CDN | Cloudflare Pages |
|------|-------------------------|------------------|
| 国内访问速度 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 设置复杂度 | 中等 | 简单 |
| API支持 | 完整支持 | 需要代理 |
| 自动部署 | ✅ | ✅ |
| 免费额度 | 充足 | 充足 |
``` 