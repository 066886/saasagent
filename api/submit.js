// 多语言消息
const messages = {
  zh: {
    method_not_allowed: '请求方法不被允许',
    missing_fields: '请填写完整信息',
    invalid_email: '请输入有效的邮箱地址',
    success: '提交成功！我们会尽快与您联系。',
    server_error: '服务器错误，请稍后重试'
  },
  en: {
    method_not_allowed: 'Method not allowed',
    missing_fields: 'Please fill in all required fields',
    invalid_email: 'Please enter a valid email address',
    success: 'Submission successful! We will contact you soon.',
    server_error: 'Server error, please try again later'
  }
};

// 检测语言
function detectLanguage(req) {
  // 从请求头中获取语言信息
  const acceptLanguage = req.headers['accept-language'];
  const userAgent = req.headers['user-agent'];
  
  // 从请求体中获取语言信息（如果前端发送）
  const bodyLang = req.body?.language;
  
  if (bodyLang && (bodyLang === 'zh' || bodyLang === 'en')) {
    return bodyLang;
  }
  
  // 从Accept-Language头部检测
  if (acceptLanguage) {
    if (acceptLanguage.includes('zh')) {
      return 'zh';
    }
  }
  
  // 默认英文
  return 'en';
}

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
    const lang = detectLanguage(req);
    return res.status(405).json({ 
      code: -1, 
      msg: messages[lang].method_not_allowed 
    });
  }

  try {
    const { name, email, company } = req.body;
    const lang = detectLanguage(req);

    // 简单验证
    if (!name || !email || !company) {
      return res.status(400).json({ 
        code: -1, 
        msg: messages[lang].missing_fields
      });
    }

    // 邮箱验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        code: -1, 
        msg: messages[lang].invalid_email
      });
    }

    // 这里可以集成各种服务：
    // 1. 发送邮件通知
    // 2. 保存到数据库
    // 3. 集成飞书/企业微信
    // 4. 集成其他CRM系统

    console.log('收到表单提交:', { name, email, company, language: lang, timestamp: new Date().toISOString() });

    // 模拟处理（您可以在这里添加实际的业务逻辑）
    // 例如：发送邮件、保存到数据库等

    // 返回成功响应
    return res.status(200).json({
      code: 0,
      msg: messages[lang].success
    });

  } catch (error) {
    console.error('表单处理错误:', error);
    const lang = detectLanguage(req);
    return res.status(500).json({
      code: -1,
      msg: messages[lang].server_error
    });
  }
} 