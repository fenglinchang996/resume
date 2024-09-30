import type { ResumeContent } from '@/types/resumeContent';

export const resumeContentEN: ResumeContent = {
  about: {
    name: 'Feng-Lin Chang',
    headline: 'Front-End Engineer',
    contact: {
      email: 'paulespling@gmail.com',
      linkedin: 'linkedin.com/in/fenglinchang',
      github: 'github.com/fenglinchang996',
    },
    summary:
      'Front-end engineer with 4 years experience developing and maintaining responsive websites. Familiar with web development basics. Also experienced in modern front-end frameworks and libraries, such as React, Vue and TypeScript. Seeking a role as a front-end engineer with a passion for creating immersive user experiences and developing high performance websites.',
  },
  skills: [
    {
      title: 'Language',
      skillList: ['JavaScript / TypeScript', 'HTML', 'CSS', 'Python'],
    },
    {
      title: 'Front-End Framework / Library',
      skillList: [
        'React',
        'Vue',
        'Redux',
        'Pinia',
        'Jest',
        'styled-components',
        'Tailwind CSS',
        'UnoCSS',
        'npm / pnpm',
        'ESLint',
      ],
    },
    {
      title: 'Backend Framework / Library',
      skillList: ['Flask'],
    },
    {
      title: 'DevOps',
      skillList: [
        'Docker',
        'Azure Application Insights',
        'Azure Log Analytics',
      ],
    },
    {
      title: 'Other',
      skillList: ['Vim / Neovim', 'Git / GitHub', 'Scrum', 'Jira'],
    },
  ],
  workExperience: [
    {
      title: 'Front-End Engineer',
      company: { name: 'AICS', url: 'https://aics.asus.com' },
      startDate: new Date(2022, 9),
      description: [
        {
          title:
            'Develop ASUS xHIS, the next-gen healthcare information platform',
          children: [
            {
              title:
                'Established core features for (Outpatient Department) OPD and ER services, These include developing Hospital Rules, Exam / Pathology Reports, and Patient Information Settings',
            },
            {
              title:
                'Implemented various add-on features of the xHIS using the concepts of "Add-on Widgets" and "Micro-frontend", including functions such as ICD CPOE, Hospitalization Certificates, and Same-Treatment Settings',
            },
          ],
        },
        {
          title: 'Built xHIS front-end log system',
          children: [
            {
              title:
                'Implemented xHIS front-end logs via Azure Application Insights service',
            },
            {
              title:
                'Monitored and analyzed xHIS front-end logs to ensure compliance with Service Level Agreement (SLA) and to observe various Key Metrics',
            },
          ],
        },
        {
          title: 'Optimized the xHIS front-end development experience',
          children: [
            {
              title:
                'Introduced Atomic CSS design concept with implementation of UnoCSS to reduce the usage of complex styles and improve the efficiency of front-end development',
            },
            {
              title:
                'Refactored the in-house UI component library to provide more flexible, user-friendly, and powerful UI components',
            },
          ],
        },
      ],
      skills: ['Vue', 'Vue Router', 'Pinia', 'TypeScript', 'UnoCSS', 'Jest'],
    },
    {
      title: 'Front-End Engineer',
      company: { name: '91APP, Inc', url: 'https://www.91app.com' },
      startDate: new Date(2020, 8),
      endDate: new Date(2022, 4),
      description: [
        {
          title:
            'Developed front-end part of e-commerce service, including HiLife logistics management, Google reCaptcha Enterprise integration, and shipping coupon feature',
        },
        {
          title:
            'Customized PXGo! online shopping site for PX Mart, e.g., re-designing category page, adding new features in store CMS(Content Management System) and refactoring product card',
        },
        {
          title:
            'Collaborated and communicated with team members (PO, UI/UX, QA, and other SWE) in SCRUM development process to deliver tasks on time',
        },
      ],
      skills: [
        'React',
        'Redux',
        'TypeScript',
        'AngularJS',
        'styled-components',
      ],
    },
    {
      title: 'R&D Engineer',
      company: { name: 'CTCI Corporation', url: 'https://www.ctci.com' },
      startDate: new Date(2018, 3),
      endDate: new Date(2020, 3),
      description: [
        {
          title:
            'Collaborated with other departments to build process design tool and engineering data exchange plateform',
        },
      ],
    },
    {
      title: 'Process Engineer',
      company: { name: 'CTCI Corporation', url: 'https://www.ctci.com' },
      startDate: new Date(2016, 8),
      endDate: new Date(2018, 3),
      description: [
        {
          title:
            'Assisted in process engineering design of international EPC projects',
        },
      ],
    },
  ],
  otherExperience: [
    {
      title: 'Front-End Teaching Assistant',
      company: { name: 'WeHelp', url: 'https://training.pada-x.com/wehelp' },
      startDate: new Date(2021, 11),
      endDate: new Date(2023, 11),
      description: [
        { title: 'Mentored 75+ trainees to become junior front-end engineers' },
      ],
    },
    {
      title: 'Front-End Trainee',
      company: { name: 'AppWorks School', url: 'https://school.appworks.tw' },
      startDate: new Date(2020, 3),
      endDate: new Date(2020, 8),
      description: [
        {
          title:
            'Learned programming knowledge for front-end development, e.g. HTML, CSS, JavaScript, Webpack, and React',
        },
        {
          title:
            'Completed the assigned project STYLiSH in 3 weeks to practice programming skills and problem-solving thoughts',
        },
        {
          title:
            'Built the personal project MindNote in 5 weeks: Designing the UI, constructing the code structure, and implementing the features independently',
        },
      ],
    },
  ],
  projects: [],
  education: [
    {
      school: 'National Taiwan University',
      degree: 'Master of Science - MS',
      fieldOfStudy: 'Chemical Engineering',
      startDate: new Date(2014, 8),
      endDate: new Date(2016, 7),
    },
    {
      school: 'National Taiwan University',
      degree: 'Bachelor of Science - BS',
      fieldOfStudy: 'Chemical Engineering',
      startDate: new Date(2008, 8),
      endDate: new Date(2013, 7),
    },
  ],
};

export const resumeContentZHT: ResumeContent = {
  about: {
    name: '張峰林',
    headline: '前端工程師',
    contact: {
      email: 'paulespling@gmail.com',
      linkedin: 'linkedin.com/in/fenglinchang',
      github: 'github.com/fenglinchang996',
    },
    summary:
      '擁有四年前端開發經驗，熟悉網頁開發基本技術，以及具備使用前端框架與工具的經驗，例如：React、Vue、TypeScript 等等。對開發產品與新技術充滿熱情，期望成為能夠建立良好使用者體驗與打造高效能網站的前端工程師。',
  },
  skills: [
    {
      title: '語言',
      skillList: ['JavaScript / TypeScript', 'HTML', 'CSS', 'Python'],
    },
    {
      title: '前端框架 / 套件',
      skillList: [
        'React',
        'Vue',
        'Redux',
        'Pinia',
        'Jest',
        'styled-components',
        'Tailwind CSS',
        'UnoCSS',
        'npm / pnpm',
        'ESLint',
      ],
    },
    {
      title: '後端框架 / 套件',
      skillList: ['Flask'],
    },
    {
      title: 'DevOps',
      skillList: [
        'Docker',
        'Azure Application Insights',
        'Azure Log Analytics',
      ],
    },
    {
      title: '其它',
      skillList: ['Vim / Neovim', 'Git / GitHub', 'Scrum', 'Jira'],
    },
  ],
  workExperience: [
    {
      title: '前端工程師',
      company: { name: 'AICS', url: 'https://aics.asus.com' },
      startDate: new Date(2022, 9),
      description: [
        {
          title: '打造華碩次世代智慧醫療資訊平台（ASUS xHIS Platform）',
          children: [
            {
              title:
                '建立門診（OPD）與急診（ER）醫療資訊系統，包括開發醫療稽核規則、醫療報告顯示介面、病人資訊設定等多項核心功能',
            },
            {
              title:
                '以「附加元件」與「微前端架構」的概念實作 xHIS 各項附加功能，包括 ICD CPOE、住院許可證與同療程設定等功能',
            },
          ],
        },
        {
          title: '建立 xHIS 前端日誌（Log）系統',
          children: [
            {
              title: '使用 Application Insights 服務實作 xHIS 前端日誌',
            },
            {
              title:
                '使用 Grafana 與 Log Analytics 對 xHIS 前端日誌進行監控與分析，確認是否滿足服務級別協定（SLA），並用於觀測各項服務關鍵指標（Key Metrics）',
            },
          ],
        },
        {
          title: '最佳化 xHIS 前端開發體驗',
          children: [
            {
              title:
                '引入原子化前端樣式設計概念，搭配 UnoCSS 實作，降低複雜樣式的使用，提高開發效率',
            },
            {
              title: '重構內部 UI 元件庫，提供彈性易用且功能更強大的 UI 元件',
            },
          ],
        },
      ],
      skills: ['Vue', 'Vue Router', 'Pinia', 'TypeScript', 'UnoCSS', 'Jest'],
    },
    {
      title: '前端工程師',
      company: { name: '91APP, Inc', url: 'https://www.91app.com' },
      startDate: new Date(2020, 8),
      endDate: new Date(2022, 4),
      description: [
        {
          title:
            '開發電商 SaaS 相關服務，例如萊爾富配送管理、登入頁串接 Google reCaptcha、運費券使用等等',
        },
        {
          title:
            '開發全聯購物網站 PX!Go 客製化功能，例如：客製化設計商品分類頁面、新增全聯專屬內容管理系統（CMS）功能、重構商品卡樣式等等',
        },
        {
          title:
            '與專案經理、UI/UX 設計師、測試員及其他工程師協作並以敏捷開發（SCRUM）來進行專案',
        },
      ],
      skills: [
        'React',
        'Redux',
        'TypeScript',
        'AngularJS',
        'styled-components',
      ],
    },
    {
      title: '研發工程師',
      company: { name: 'CTCI(中鼎集團)', url: 'https://www.ctci.com' },
      startDate: new Date(2018, 3),
      endDate: new Date(2020, 3),
      description: [
        {
          title: '與其它部門合作打造方法設計工具與工程資料交換平台',
        },
      ],
    },
    {
      title: '方法工程師',
      company: { name: 'CTCI(中鼎集團)', url: 'https://www.ctci.com' },
      startDate: new Date(2016, 8),
      endDate: new Date(2018, 3),
      description: [{ title: '協助執行國際 EPC 統包案的方法設計' }],
    },
  ],
  otherExperience: [
    {
      title: '前端助教',
      company: { name: 'WeHelp', url: 'https://training.pada-x.com/wehelp' },
      startDate: new Date(2021, 11),
      endDate: new Date(2023, 11),
      description: [
        { title: '協助輔導 75 位以上前端學員轉職成為初階前端工程師' },
      ],
    },
    {
      title: '前端學員',
      company: { name: 'AppWorks School', url: 'https://school.appworks.tw' },
      startDate: new Date(2020, 3),
      endDate: new Date(2020, 8),
      description: [
        {
          title:
            '學習前端開發知識與技術，例如：HTML、CSS、JavaScript、Webpack 與 React 等等',
        },
        {
          title:
            '透過三週內完成指定專案 STYLiSH，練習程式開發技巧與解決問題思維',
        },
        {
          title:
            '在五週內獨立發想並完成個人專案 MindNote：包括介面設計、程式架構與功能實作等等',
        },
      ],
    },
  ],
  projects: [],
  education: [
    {
      school: '國立台灣大學',
      degree: '碩士',
      fieldOfStudy: '化學工程',
      startDate: new Date(2014, 8),
      endDate: new Date(2016, 7),
    },
    {
      school: '國立台灣大學',
      degree: '學士',
      fieldOfStudy: '化學工程',
      startDate: new Date(2008, 8),
      endDate: new Date(2013, 7),
    },
  ],
};
