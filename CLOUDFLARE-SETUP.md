# Cloudflare设置指南 - 解决国内访问问题

## 🌍 问题背景
Vercel在国内访问速度较慢，通过Cloudflare CDN可以显著提升国内用户的访问速度。

## 🚀 设置步骤

### 1. 添加站点到Cloudflare
1. 访问 [Cloudflare控制台](https://dash.cloudflare.com)
2. 点击"添加站点"
3. 输入您的域名
4. 选择免费计划

### 2. 配置DNS记录
在Cloudflare DNS设置中添加以下记录：

```
类型: CNAME
名称: @
目标: your-vercel-project.vercel.app
代理状态: 已代理 (🟠 橙色云朵)
TTL: 自动
```

如果需要www子域名：
```
类型: CNAME  
名称: www
目标: your-vercel-project.vercel.app
代理状态: 已代理 (🟠 橙色云朵)
TTL: 自动
```

### 3. 在Vercel中配置自定义域名
1. 打开Vercel项目控制台
2. 进入"Settings" → "Domains"
3. 添加您的域名（如：saasagent.pro）
4. Vercel会自动验证域名配置

### 4. 优化Cloudflare设置

#### SSL/TLS设置
- **SSL/TLS** → **概述** → 加密模式选择："完全(严格)"
- **SSL/TLS** → **边缘证书** → 启用"自动HTTPS重写"

#### 速度优化
- **速度** → **优化** → 启用以下选项：
  - ✅ Auto Minify (HTML, CSS, JS)
  - ✅ Brotli压缩
  - ✅ 早期提示

#### 缓存设置
- **缓存** → **配置** → 缓存级别："标准"
- **缓存** → **配置** → 浏览器缓存TTL："1个月"

#### 页面规则（Page Rules）
创建页面规则优化静态资源：

```
URL模式: *.saasagent.pro/script.js
设置:
- 缓存级别: 缓存一切
- 边缘缓存TTL: 1个月
- 浏览器缓存TTL: 1个月
```

```
URL模式: *.saasagent.pro/*.css
设置:  
- 缓存级别: 缓存一切
- 边缘缓存TTL: 1个月
- 浏览器缓存TTL: 1个月
```

### 5. 验证配置

测试以下URL确保正常工作：
- https://yourdomain.com
- https://www.yourdomain.com  
- API端点：https://yourdomain.com/api/submit

## 🔧 高级优化

### Workers脚本（可选）
如果需要更高级的优化，可以使用Cloudflare Workers：

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 添加中国大陆访问优化
  const response = await fetch(request)
  
  // 添加缓存头
  const newResponse = new Response(response.body, response)
  newResponse.headers.set('Cache-Control', 'public, max-age=31536000')
  
  return newResponse
}
```

## 📊 性能监控

设置完成后，可以通过以下工具测试性能：

1. **站长工具**: https://tool.chinaz.com/speedtest
2. **17CE**: https://www.17ce.com  
3. **Chrome DevTools**: 检查加载时间

## 🌏 DNS传播时间

- DNS更改通常需要24-48小时全球生效
- 可以使用 https://dnschecker.org 检查传播状态

## ⚠️ 注意事项

1. **确保代理状态开启**：DNS记录必须显示橙色云朵图标
2. **SSL证书**：Cloudflare会自动处理SSL证书
3. **API端点**：确保/api/*路径正常代理到Vercel
4. **缓存清理**：如果更新后没有立即生效，在Cloudflare控制台清理缓存

## 🎯 预期效果

配置完成后，国内用户访问速度应该显著提升：
- 首次加载：3-5秒 → 1-2秒  
- 后续访问：几乎瞬间加载（缓存命中）
- API响应：500ms → 200ms以内

## 🆘 常见问题

**Q: 显示"DNS_PROBE_FINISHED_NXDOMAIN"错误**
A: DNS还未完全传播，等待或使用DNS刷新工具

**Q: HTTPS证书错误**  
A: 检查SSL/TLS设置，确保选择"完全(严格)"模式

**Q: API请求失败**
A: 确保API路径在Cloudflare中正确代理到Vercel

**Q: 页面样式丢失**
A: 检查静态资源的缓存设置和MIME类型

---

## 📞 需要帮助？

如果设置过程中遇到问题，请提供：
1. 域名信息
2. Vercel项目URL  
3. 具体错误信息
4. Cloudflare DNS设置截图 