import type { ResumeContent } from '@/types/resumeContent';

export const resumeContentEN: ResumeContent = {
  about: {
    name: 'Feng-Lin Chang',
    headline: 'Software Engineer',
    contact: {
      email: 'paulespling@gmail.com',
      linkedin: 'linkedin.com/in/fenglinchang',
      github: 'github.com/fenglinchang996',
    },
    summary:
      'Software engineer with 5+ years of experience building enterprise web applications with React, Vue, and TypeScript. Experienced in developing features within modular frontend architecture, integrating external services, and solving complex production problems.',
  },
  skills: [
    {
      title: 'Languages',
      skillList: ['JavaScript / TypeScript', 'Python'],
    },
    {
      title: 'Frontend',
      skillList: [
        'Vue (Vue 3, Pinia)',
        'React (Redux)',
        'Micro-Frontends',
        'Jest (Unit Testing)',
        'Tailwind CSS / UnoCSS',
      ],
    },
    {
      title: 'Tools',
      skillList: ['Azure Application Insights', 'Docker'],
    },
  ],
  workExperience: [
    {
      title: 'Software Engineer (Frontend-Focused)',
      company: { name: 'ASUS AICS', url: 'https://aics.asus.com' },
      startDate: new Date(2022, 9),
      endDate: new Date(2026, 7),
      description: [
        {
          title: 'Micro-Frontend Development & Rapid Feature Deployment',
          items: [
            {
              title:
                'Co-developed and maintained the ASUS xHIS healthcare platform, implementing 50+ micro-frontend widgets within the modular architecture and shared state-management framework.',
            },
            {
              title:
                'Independently developed and deployed critical healthcare features, reducing cross-module dependencies and enabling faster, more flexible releases at the widget level.',
            },
          ],
        },
        {
          title: 'Multi-Tenant Customization',
          items: [
            {
              title:
                'Implemented and maintained multi-hospital customizations by extracting client-specific business/UI logic into separate modules, keeping custom code isolated from the core platform.',
            },
          ],
        },
        {
          title: 'Frontend Observability & Production Debugging',
          items: [
            {
              title:
                'Integrated frontend logging with Azure Application Insights for SLA monitoring and feature tracking, reducing production issue diagnosis time from hours to minutes.',
            },
          ],
        },
        {
          title: 'API Integration & Adapter Design',
          items: [
            {
              title:
                'Implemented adapters within the API abstraction layer to integrate services from different sources, such as the NHI and third-party HIS vendors, behind a common interface.',
            },
          ],
        },
      ],
    },
    {
      title: 'Frontend Engineer',
      company: { name: '91APP', url: 'https://www.91app.com' },
      startDate: new Date(2020, 8),
      endDate: new Date(2022, 4),
      description: [
        {
          title:
            'Developed core e-commerce SaaS features, including logistics services, coupon systems, and login security (Google reCAPTCHA).',
        },
        {
          title:
            'Implemented customized CMS components for retail clients, such as advertising layouts and product pages.',
        },
      ],
    },
    {
      title: 'R&D Engineer',
      company: { name: 'CTCI Corporation', url: 'https://www.ctci.com' },
      startDate: new Date(2016, 8),
      endDate: new Date(2020, 3),
      description: [
        {
          title:
            'Assisted in process engineering design for international EPC projects.',
        },
        {
          title:
            'Co-developed internal process design tools and engineering data exchange platforms to automate engineering workflows.',
        },
      ],
    },
  ],
  otherExperience: [
    {
      title: 'Teaching Assistant',
      company: { name: 'WeHelp', url: 'https://wehelp.tw/academy' },
      startDate: new Date(2021, 11),
      endDate: new Date(2023, 11),
      description: [
        {
          title:
            'Mentored 100+ trainees transitioning into junior software engineering roles.',
        },
      ],
    },
    {
      title: 'Trainee',
      company: { name: 'AppWorks School', url: 'https://school.appworks.tw' },
      startDate: new Date(2020, 3),
      endDate: new Date(2020, 8),
      description: [
        {
          title:
            'Completed a 16-week intensive frontend software engineering program with hands-on web development projects.',
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
    headline: '軟體工程師',
    contact: {
      email: 'paulespling@gmail.com',
      linkedin: 'linkedin.com/in/fenglinchang',
      github: 'github.com/fenglinchang996',
    },
    summary:
      '擁有 5 年開發經驗的軟體工程師，使用 React、Vue 與 TypeScript 等前端技術進行網頁應用程式開發。熟悉模組化前端開發，整合外部服務以及解決複雜的工程問題。',
  },
  skills: [
    {
      title: '程式語言',
      skillList: ['JavaScript / TypeScript', 'Python'],
    },
    {
      title: '前端',
      skillList: [
        'Vue (Vue 3, Pinia)',
        'React (Redux)',
        'Micro-Frontends',
        'Jest (單元測試)',
        'Tailwind CSS / UnoCSS',
      ],
    },
    {
      title: '工具',
      skillList: ['Azure Application Insights', 'Docker'],
    },
  ],
  workExperience: [
    {
      title: '軟體工程師（前端）',
      company: { name: 'ASUS AICS', url: 'https://aics.asus.com' },
      startDate: new Date(2022, 9),
      endDate: new Date(2026, 7),
      description: [
        {
          title: '微前端架構（Micro-Frontends）與快速功能發佈',
          items: [
            {
              title:
                '共同開發與維護 ASUS xHIS 智慧醫療平台，使用內部狀態管理框架與模組架構實作 50 個以上微前端元件。',
            },
            {
              title:
                '獨立開發並部署醫療資訊核心功能，降低跨模組相依性，實現更快速、更具彈性的元件層級版本發布。',
            },
          ],
        },
        {
          title: '多租戶（Multi-Tenant）客製化',
          items: [
            {
              title:
                '抽離客製化業務與 UI 邏輯為獨立套件或模組，實現多間醫院客製化需求，將客戶專屬程式碼與核心平台解耦。',
            },
          ],
        },
        {
          title: '前端可觀測性（Observability）與線上環境偵錯',
          items: [
            {
              title:
                '實作前端日誌，運用 Azure Application Insights 進行 SLA 監控與功能使用追蹤，並有效將線上問題除錯時間從數小時縮減至數十分鐘。',
            },
          ],
        },
        {
          title: 'API 整合與轉接器（Adapters）設計',
          items: [
            {
              title:
                '針對不同來源的 API 服務，例如健保署與第三方 HIS 廠商，在既有的 API 抽象層上實作轉接器，將不同 API 封裝為統一介面。',
            },
          ],
        },
      ],
    },
    {
      title: '前端工程師',
      company: { name: '91APP', url: 'https://www.91app.com' },
      startDate: new Date(2020, 8),
      endDate: new Date(2022, 4),
      description: [
        {
          title:
            '開發電商 SaaS 核心功能，例如物流服務、優惠券系統與登入安全機制（Google reCAPTCHA）等。',
        },
        {
          title: '為零售客戶實作客製化 CMS 元件，例如廣告版面與商品頁面等。',
        },
      ],
    },
    {
      title: '研發工程師',
      company: { name: '中鼎工程', url: 'https://www.ctci.com' },
      startDate: new Date(2016, 8),
      endDate: new Date(2020, 3),
      description: [
        {
          title: '協助執行國際 EPC 統包案的方法設計。',
        },
        {
          title:
            '與跨部門合作打造方法設計工具與工程資料交換平台，實現國際 EPC 專案工作流程的自動化。',
        },
      ],
    },
  ],
  otherExperience: [
    {
      title: '助教',
      company: { name: 'WeHelp', url: 'https://wehelp.tw/academy' },
      startDate: new Date(2021, 11),
      endDate: new Date(2023, 11),
      description: [
        { title: '協助輔導 100 位以上學員轉職成為初階軟體工程師。' },
      ],
    },
    {
      title: '學員',
      company: { name: 'AppWorks School', url: 'https://school.appworks.tw' },
      startDate: new Date(2020, 3),
      endDate: new Date(2020, 8),
      description: [
        {
          title:
            '完成為期 16 週的高強度前端軟體培訓計畫，透過專案實作累積開發經驗，成功轉職為軟體工程師。',
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
