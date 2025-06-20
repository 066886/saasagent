export default async function handler(req, res) {
  // 设置CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ code: -1, msg: 'Method not allowed' });
  }

  try {
    const { name, email, company } = req.body;

    // 简单验证
    if (!name || !email || !company) {
      return res.status(400).json({ 
        code: -1, 
        msg: '请填写完整信息' 
      });
    }

    // 邮箱验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        code: -1, 
        msg: '请输入有效的邮箱地址' 
      });
    }

    // 这里可以集成各种服务：
    // 1. 发送邮件通知
    // 2. 保存到数据库
    // 3. 集成飞书/企业微信
    // 4. 集成其他CRM系统

    console.log('收到表单提交:', { name, email, company, timestamp: new Date().toISOString() });

    // 模拟处理（您可以在这里添加实际的业务逻辑）
    // 例如：发送邮件、保存到数据库等

    // 返回成功响应
    return res.status(200).json({
      code: 0,
      msg: '提交成功！我们会尽快与您联系。'
    });

  } catch (error) {
    console.error('表单处理错误:', error);
    return res.status(500).json({
      code: -1,
      msg: '服务器错误，请稍后重试'
    });
  }
} 