// 多语言支持
const translations = {
    zh: {
        'nav.features': '产品特色',
        'nav.benefits': '价值优势',
        'nav.contact': '立即体验',
        'hero.badge': 'AI驱动的下一代SaaS配置解决方案',
        'hero.title1': '让每个SaaS都拥有',
        'hero.title2': '专属AI配置专家',
        'hero.subtitle': '一键接入，5分钟生成专业配置助手<br class="hidden sm:block">复杂配置变成自然语言对话，零技术门槛，用户满意度提升80%',
        'hero.cta.primary': '免费试用',
        'hero.cta.secondary': '观看演示',
        'hero.stats.clients': 'SaaS服务商信赖',
        'hero.stats.time': '5分钟',
        'hero.stats.speed': '快速生成配置专家',
        'hero.stats.satisfaction': '用户满意度提升',
        'features.title': '核心功能特色',
        'features.subtitle': '我们支持快速学习某个SaaS的服务范围+API接口，并且快捷接入我们的多Agent体系',
        'features.ai.title': 'AI快速学习',
        'features.ai.desc': '自动解析任何SaaS的API和文档，5分钟内生成专业配置专家，无需人工训练和调优',
        'features.agent.title': '多Agent协作',
        'features.agent.desc': '跨SaaS服务配置协同，统一的配置管理体验，企业级配置流程编排',
        'features.dialogue.title': '自然语言对话',
        'features.dialogue.desc': '用户只需说出需求，AI自动完成功能配置，复杂操作变成简单对话',
        'features.understanding.title': '深度理解',
        'features.understanding.desc': '不只是API调用，真正理解业务逻辑，提供最佳实践建议，预测潜在配置问题',
        'benefits.title': '核心价值主张',
        'benefits.subtitle': '专有模型驱动，智能专家咨询',
        'benefits.ai.title': '🧠 专有AI模型',
        'benefits.ai.desc': '基于深度学习的专有模型，为每个用户提供个性化的专家级配置咨询服务',
        'benefits.ai.feature1.title': '深度理解',
        'benefits.ai.feature1.desc': '理解复杂业务逻辑，提供最佳实践建议',
        'benefits.ai.feature2.title': '个性化服务',
        'benefits.ai.feature2.desc': '根据用户行为和偏好定制专属配置方案',
        'benefits.ai.feature3.title': '持续学习',
        'benefits.ai.feature3.desc': '模型持续优化，服务质量不断提升',
        'benefits.saas': 'SaaS服务商',
        'benefits.users': '终端用户',
        'benefits.enterprise': '企业集成商',
        'workflow.title': '简单三步，快速上手',
        'workflow.step1.title': '接入SaaS',
        'workflow.step1.desc': '提供您的SaaS文档和API，我们的AI开始自动学习',
        'workflow.step2.title': '生成专家',
        'workflow.step2.desc': '5分钟内自动生成专属的AI配置专家，无需人工干预',
        'workflow.step3.title': '开始服务',
        'workflow.step3.desc': '用户可以通过自然语言与AI专家对话完成配置',

        'contact.title': '准备开始了吗？',
        'contact.description1': '想象一下，你的SaaS用户不再因为复杂配置而流失，不再需要大量客服支持配置问题。',
        'contact.description2': '通过AI自动学习你的产品文档和API，生成专业的配置助手。用户只需用自然语言描述需求，AI就能完成所有配置工作。',
        'footer.description': '让每个SaaS都拥有专属AI配置专家',
        'footer.product.title': '产品',
        'footer.product.features': '功能特色',
        'footer.product.demo': '产品演示',
        'footer.copyright': '© 2025 SaasAgent.Pro. All rights reserved.',
        'workflow.subtitle': '从接入到服务，全程自动化',
        'benefits.integration.title': '⚡ 极速接入',
        'benefits.integration.desc': '一键接入您的SaaS服务，5分钟内自动生成专属AI配置专家，无需复杂的技术对接和人工训练',
        'benefits.integration.feature1': '一键API接入，零代码部署',
        'benefits.integration.feature2': '自动学习产品文档和API',
        'benefits.integration.feature3': '5分钟生成专业配置助手',
        'benefits.integration.process.title': 'Agent生成过程示意',
        'benefits.integration.process.step1': '正在分析SaaS API接口...',
        'benefits.integration.process.step2': 'AI正在学习产品文档...',
        'benefits.integration.process.step3': '生成专属AI配置专家...',
        'benefits.results.title': '📈 立即见效',
        'benefits.results.desc': '通过自然语言对话，AI助手直接完成配置操作',
        'benefits.results.chat.title': '智能专家咨询示例',
        'benefits.results.chat.user': '"我们电商平台在高峰期经常出现API超时，应该怎么优化？"',
        'benefits.results.chat.ai': '"基于您的电商场景，我建议：1)设置智能限流策略：高峰期500次/分钟，平时300次/分钟 2)配置请求队列优先级：订单>库存>用户 3)启用缓存策略减少数据库压力。配置已优化完成！"',
        'benefits.results.feature1': '说话即配置，无需手动操作',
        'benefits.results.feature2': 'AI理解意图，自动执行配置',
        'benefits.results.feature3': '用户满意度提升80%',
        'benefits.comparison.title': '接入前后对比',
        'benefits.comparison.before': '接入前',
        'benefits.comparison.after': '接入后',
        'benefits.comparison.before.item1': '❌ 用户配置困难，经常出错',
        'benefits.comparison.before.item2': '❌ 大量客服时间处理配置问题',
        'benefits.comparison.before.item3': '❌ 用户流失率高，满意度低',
        'benefits.comparison.before.item4': '❌ 配置成功率仅60%',
        'benefits.comparison.after.item1': '✅ AI专家指导，配置轻松简单',
        'benefits.comparison.after.item2': '✅ 客服工作量减少90%',
        'benefits.comparison.after.item3': '✅ 用户满意度大幅提升',
        'benefits.comparison.after.item4': '✅ 配置成功率提升至95%',

        'contact.form.name': '您的姓名',
        'contact.form.email': '邮箱地址',
        'contact.form.company': '公司名称',
        'contact.form.submit': '立即联系我们',
        'contact.form.name.placeholder': '请输入您的真实姓名',
        'contact.form.email.placeholder': 'your-email@company.com',
        'contact.form.company.placeholder': '请输入公司名称'
    },
    en: {
        'nav.features': 'Features',
        'nav.benefits': 'Benefits',
        'nav.contact': 'Get Started',
        'hero.badge': 'AI-powered Next-generation SaaS Configuration Solution',
        'hero.title1': 'Give Every SaaS',
        'hero.title2': 'Dedicated AI Configuration Expert',
        'hero.subtitle': 'One-click integration, 5-minute professional configuration assistant<br class="hidden sm:block">Complex configurations become natural language conversations, zero technical barriers, 80% user satisfaction improvement',
        'hero.cta.primary': 'Start Free Trial',
        'hero.cta.secondary': 'Watch Demo',
        'hero.stats.clients': 'SaaS Providers Trust Us',
        'hero.stats.time': '5min',
        'hero.stats.speed': 'Minutes to Expert',
        'hero.stats.satisfaction': 'User Satisfaction Boost',
        'features.title': 'Core Features',
        'features.subtitle': 'We support rapid learning of any SaaS service scope + API interfaces, and quick integration into our multi-agent system',
        'features.ai.title': 'AI Rapid Learning',
        'features.ai.desc': 'Automatically parse any SaaS API and documentation, generate professional configuration experts in 5 minutes without manual training',
        'features.agent.title': 'Multi-Agent Collaboration',
        'features.agent.desc': 'Cross-SaaS service configuration coordination, unified configuration management experience, enterprise-level configuration workflow orchestration',
        'features.dialogue.title': 'Natural Language Dialogue',
        'features.dialogue.desc': 'Users simply express their needs, AI automatically completes function configuration, complex operations become simple conversations',
        'features.understanding.title': 'Deep Understanding',
        'features.understanding.desc': 'Not just API calls, truly understand business logic, provide best practice recommendations, predict potential configuration issues',
        'benefits.title': 'Core Value Proposition',
        'benefits.subtitle': 'Proprietary Model Driven, Intelligent Expert Consultation',
        'benefits.ai.title': '🧠 Proprietary AI Model',
        'benefits.ai.desc': 'Deep learning-based proprietary model providing personalized expert-level configuration consulting services for every user',
        'benefits.ai.feature1.title': 'Deep Understanding',
        'benefits.ai.feature1.desc': 'Understand complex business logic, provide best practice recommendations',
        'benefits.ai.feature2.title': 'Personalized Service',
        'benefits.ai.feature2.desc': 'Customize exclusive configuration solutions based on user behavior and preferences',
        'benefits.ai.feature3.title': 'Continuous Learning',
        'benefits.ai.feature3.desc': 'Model continuously optimizes, service quality keeps improving',
        'benefits.saas': 'SaaS Providers',
        'benefits.users': 'End Users',
        'benefits.enterprise': 'Enterprise Integrators',
        'workflow.title': 'Simple 3 Steps to Get Started',
        'workflow.step1.title': 'Integrate SaaS',
        'workflow.step1.desc': 'Provide your SaaS documentation and API, our AI begins automatic learning',
        'workflow.step2.title': 'Generate Expert',
        'workflow.step2.desc': 'Automatically generate dedicated AI configuration expert within 5 minutes, no manual intervention required',
        'workflow.step3.title': 'Start Service',
        'workflow.step3.desc': 'Users can complete configuration through natural language dialogue with AI expert',

        'contact.title': 'Ready to Get Started?',
        'contact.description1': 'Imagine your SaaS users no longer leave due to complex configurations, no longer need extensive customer support for configuration issues.',
        'contact.description2': 'Through AI automatically learning your product documentation and API, generate professional configuration assistants. Users simply describe their needs in natural language, and AI completes all configuration work.',
        'footer.description': 'Give every SaaS a dedicated AI configuration expert',
        'footer.product.title': 'Product',
        'footer.product.features': 'Features',
        'footer.product.demo': 'Demo',
        'footer.copyright': '© 2025 SaasAgent.Pro. All rights reserved.',
        'workflow.subtitle': 'From integration to service, fully automated',
        'benefits.integration.title': '⚡ Lightning Fast Integration',
        'benefits.integration.desc': 'One-click integration with your SaaS service, automatically generate dedicated AI configuration expert in 5 minutes, no complex technical integration or manual training required',
        'benefits.integration.feature1': 'One-click API integration, zero-code deployment',
        'benefits.integration.feature2': 'Automatically learn product documentation and APIs',
        'benefits.integration.feature3': 'Generate professional configuration assistant in 5 minutes',
        'benefits.integration.process.title': 'Agent Generation Process Demo',
        'benefits.integration.process.step1': 'Analyzing SaaS API interfaces...',
        'benefits.integration.process.step2': 'AI learning product documentation...',
        'benefits.integration.process.step3': 'Generating dedicated AI configuration expert...',
        'benefits.results.title': '📈 Immediate Results',
        'benefits.results.desc': 'Through natural language conversation, AI assistant directly completes configuration operations',
        'benefits.results.chat.title': 'Intelligent Expert Consultation Example',
        'benefits.results.chat.user': '"Our e-commerce platform often experiences API timeouts during peak hours. How should we optimize this?"',
        'benefits.results.chat.ai': '"Based on your e-commerce scenario, I recommend: 1) Smart rate limiting strategy: 500 requests/min during peak, 300/min normally 2) Request queue priority: Orders > Inventory > Users 3) Enable caching strategy to reduce database pressure. Configuration optimized and completed!"',
        'benefits.results.feature1': 'Talk to configure, no manual operation required',
        'benefits.results.feature2': 'AI understands intent, automatically executes configuration',
        'benefits.results.feature3': 'User satisfaction increased by 80%',
        'benefits.comparison.title': 'Before vs After Integration',
        'benefits.comparison.before': 'Before Integration',
        'benefits.comparison.after': 'After Integration',
        'benefits.comparison.before.item1': '❌ Users struggle with configuration, frequent errors',
        'benefits.comparison.before.item2': '❌ Extensive customer service time on configuration issues',
        'benefits.comparison.before.item3': '❌ High user churn, low satisfaction',
        'benefits.comparison.before.item4': '❌ Configuration success rate only 60%',
        'benefits.comparison.after.item1': '✅ AI expert guidance, easy and simple configuration',
        'benefits.comparison.after.item2': '✅ 90% reduction in customer service workload',
        'benefits.comparison.after.item3': '✅ Dramatically improved user satisfaction',
        'benefits.comparison.after.item4': '✅ Configuration success rate improved to 95%',

        'contact.form.name': 'Your Name',
        'contact.form.email': 'Email Address',
        'contact.form.company': 'Company Name',
        'contact.form.submit': 'Contact Us Now',
        'contact.form.name.placeholder': 'Please enter your full name',
        'contact.form.email.placeholder': 'your-email@company.com',
        'contact.form.company.placeholder': 'Please enter company name'
    }
};

// 检测用户语言
function detectUserLanguage() {
    // 获取用户的语言偏好
    const userLang = navigator.language || navigator.userLanguage || 'en';
    
    // 中文地区检测
    const chineseRegions = ['zh', 'zh-CN', 'zh-TW', 'zh-HK', 'zh-SG'];
    
    // 检查是否为中文地区
    if (chineseRegions.some(lang => userLang.toLowerCase().startsWith(lang.toLowerCase()))) {
        return 'zh';
    }
    
    // 默认使用英文
    return 'en';
}

// 当前语言 - 根据地区自动检测
let currentLanguage = detectUserLanguage();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    initLanguageToggle();
    initMobileMenu();
    initSmoothScroll();
    initScrollEffects();
    initAnimations();
    initFormHandling();

}

// 语言切换功能
function initLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    const currentLangElement = document.getElementById('currentLang');
    
    // 初始化语言显示
    updateLanguageDisplay();
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
            updateLanguageDisplay();
            updateLanguage();
        });
    }
}

// 更新语言显示
function updateLanguageDisplay() {
    const currentLangElement = document.getElementById('currentLang');
    
    if (currentLangElement) {
        currentLangElement.textContent = currentLanguage === 'zh' ? '中文' : 'English';
    }
    
    // 更新页面语言属性
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
    
    // 更新页面标题
    document.title = currentLanguage === 'zh' ? 
        'SaasAgent.Pro - 让每个SaaS都拥有专属AI配置专家' : 
        'SaasAgent.Pro - Give Every SaaS a Dedicated AI Configuration Expert';
}

// 更新页面语言
function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
    
    // 更新placeholder
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// 移动端菜单
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // 点击菜单项后关闭菜单
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// 平滑滚动
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 滚动效果
function initScrollEffects() {
    const navbar = document.querySelector('nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 导航栏背景效果
        if (scrollTop > 50) {
            navbar.classList.add('bg-white/95');
            navbar.classList.remove('bg-white/80');
        } else {
            navbar.classList.add('bg-white/80');
            navbar.classList.remove('bg-white/95');
        }
        
        lastScrollTop = scrollTop;
    });
}

// 动画效果
function initAnimations() {
    // 使用 Intersection Observer 实现滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// 表单处理 - 集成飞书多维表格
function initFormHandling() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

// 处理表单提交
async function handleFormSubmit(e) {
    e.preventDefault();
    
    // 获取表单元素
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const errorMessages = document.getElementById('errorMessages');
    const errorList = document.getElementById('errorList');
    const successMessage = document.getElementById('successMessage');
    
    // 清除之前的错误和成功消息
    hideMessage(errorMessages);
    hideMessage(successMessage);
    
    // 收集表单数据
    const formData = {
        name: document.getElementById('userName').value.trim(),
        email: document.getElementById('userEmail').value.trim(),
        company: document.getElementById('userCompany').value.trim(),
        language: currentLanguage  // 添加当前语言信息
    };
    
    // 简单验证
    const errors = [];
    const validationMessages = {
        zh: {
            invalidName: '请输入有效的姓名（至少2个字符）',
            invalidEmail: '请输入有效的邮箱地址',
            invalidCompany: '请输入有效的公司名称'
        },
        en: {
            invalidName: 'Please enter a valid name (at least 2 characters)',
            invalidEmail: 'Please enter a valid email address',
            invalidCompany: 'Please enter a valid company name'
        }
    };
    
    if (!formData.name || formData.name.length < 2) {
        errors.push(validationMessages[currentLanguage].invalidName);
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push(validationMessages[currentLanguage].invalidEmail);
    }
    if (!formData.company || formData.company.length < 2) {
        errors.push(validationMessages[currentLanguage].invalidCompany);
    }
    
    if (errors.length > 0) {
        showErrorMessages(errors, errorMessages, errorList);
        return;
    }
    
    // 显示加载状态
    setSubmitLoading(true, submitBtn, submitText, loadingSpinner);
    
    try {
        console.log('开始提交表单数据:', formData);
        
        // 调用Vercel Serverless函数
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        console.log('收到响应:', response.status, response.statusText);
        
        // 检查HTTP状态码
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }
        
        const result = await response.json();
        console.log('解析结果:', result);
        
        if (result.code === 0) {
            // 提交成功
            showSuccessMessage(result.msg, successMessage);
            document.getElementById('contactForm').reset();
            const successNotification = currentLanguage === 'zh' ? 
                '提交成功！我们会尽快与您联系。' : 
                'Submission successful! We will contact you soon.';
            showNotification(successNotification, 'success');
        } else {
            // 提交失败
            const defaultError = currentLanguage === 'zh' ? 
                '提交失败，请稍后重试' : 
                'Submission failed, please try again later';
            showErrorMessages([result.msg || defaultError], errorMessages, errorList);
            const failNotification = currentLanguage === 'zh' ? 
                '提交失败，请稍后重试。' : 
                'Submission failed, please try again.';
            showNotification(failNotification, 'error');
        }
    } catch (error) {
        console.error('表单提交错误:', error);
        
        // 根据错误类型给出更具体的提示
        const errorMessages_i18n = {
            zh: {
                network: '网络错误，请检查网络连接后重试。',
                connection: '无法连接到服务器，请检查网络连接。',
                server: '服务器错误：',
                notification: '网络错误，请重试。'
            },
            en: {
                network: 'Network error, please check your connection and try again.',
                connection: 'Unable to connect to server, please check your network connection.',
                server: 'Server error: ',
                notification: 'Network error, please try again.'
            }
        };
        
        let errorMessage = errorMessages_i18n[currentLanguage].network;
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorMessage = errorMessages_i18n[currentLanguage].connection;
        } else if (error.message.includes('HTTP Error')) {
            errorMessage = `${errorMessages_i18n[currentLanguage].server}${error.message}`;
        }
        
        showErrorMessages([errorMessage], errorMessages, errorList);
        showNotification(errorMessages_i18n[currentLanguage].notification, 'error');
    } finally {
        // 恢复按钮状态
        setSubmitLoading(false, submitBtn, submitText, loadingSpinner);
    }
}

// 设置提交按钮加载状态
function setSubmitLoading(loading, submitBtn, submitText, loadingSpinner) {
    if (loading) {
        submitBtn.disabled = true;
        submitText.classList.add('hidden');
        loadingSpinner.classList.remove('hidden');
    } else {
        submitBtn.disabled = false;
        submitText.classList.remove('hidden');
        loadingSpinner.classList.add('hidden');
    }
}

// 显示错误消息
function showErrorMessages(errors, errorContainer, errorList) {
    errorList.innerHTML = '';
    errors.forEach(error => {
        const li = document.createElement('li');
        li.textContent = error;
        errorList.appendChild(li);
    });
    errorContainer.classList.remove('hidden');
    
    // 滚动到错误消息位置
    errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 显示成功消息
function showSuccessMessage(message, successContainer) {
    successContainer.querySelector('p').textContent = message;
    successContainer.classList.remove('hidden');
    
    // 滚动到成功消息位置
    successContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 隐藏消息
function hideMessage(messageContainer) {
    messageContainer.classList.add('hidden');
}

// 通知功能
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-primary-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center">
            <div class="flex-shrink-0">
                ${type === 'success' ? 
                    '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>' :
                    '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>'
                }
            </div>
            <div class="ml-3">
                <p class="text-sm font-medium">${message}</p>
            </div>
            <div class="ml-4 flex-shrink-0">
                <button class="inline-flex text-white hover:text-gray-200 focus:outline-none" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// 性能优化 - 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K 切换语言
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('languageToggle').click();
    }
    
    // ESC 关闭移动菜单
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
});

// 页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // 页面重新获得焦点时重新初始化动画
        initAnimations();
    }
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});



// 加载完成后的性能监控
window.addEventListener('load', function() {
    if ('performance' in window) {
        const perfData = performance.timing;
        const loadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`页面加载时间: ${loadTime}ms`);
    }
}); 