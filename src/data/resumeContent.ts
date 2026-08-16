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
      'Software engineer with 5 years of experience specializing in frontend architecture and enterprise web applications. Experienced in React, Vue, and TypeScript, with a strong focus on modular architecture, production observability, and solving complex technical challenges.',
  },
  skills: [
    {
      title: 'Languages',
      skillList: ['TypeScript', 'JavaScript', 'Python'],
    },
    {
      title: 'Frontend & Architecture',
      skillList: [
        'Vue (Vue 3, Pinia)',
        'React (Redux)',
        'Micro-Frontends',
        'Jest (Unit Testing)',
        'Tailwind CSS / UnoCSS',
      ],
    },
    {
      title: 'Observability & Cloud',
      skillList: ['Azure Application Insights', 'Docker'],
    },
  ],
  workExperience: [
    {
      title: 'Software Engineer (Frontend Focused)',
      company: { name: 'AICS', url: 'https://aics.asus.com' },
      startDate: new Date(2022, 9),
      endDate: new Date(2026, 7),
      description: [
        {
          title:
            'Micro-Frontend Development & High-Throughput Feature Delivery',
          items: [
            {
              title:
                'Co-developed and maintained the next-gen healthcare platform (ASUS xHIS), building 50+ micro-frontend widgets with clean state management and strict modular boundaries.',
            },
            {
              title:
                'Engineered and deployed critical healthcare features independently, accelerating release cycles and minimizing cross-module dependencies.',
            },
          ],
        },
        {
          title: 'Multi-Tenant Customization & Package Decoupling',
          items: [
            {
              title:
                'Managed complex multi-hospital requirements by refactoring and extracting custom business/UI logic into separate packages, decoupling client-specific code from the core platform.',
            },
          ],
        },
        {
          title: 'Frontend Observability & Production Debugging',
          items: [
            {
              title:
                'Instrumented frontend logging and leveraged Azure AppInsights for production debugging, SLA tracking, and feature usage telemetry.',
            },
          ],
        },
        {
          title: 'API Abstraction & Resilient System Integration',
          items: [
            {
              title:
                'Designed unified, reusable API abstractions across heterogeneous external and government services, building resilient wrappers to isolate UI from backend complexity.',
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
            'Developed core e-commerce SaaS features and customizable CMS components for enterprise retail clients, integrating logistics, coupon systems, and Google reCAPTCHA security.',
        },
        {
          title:
            'Migrated legacy features from AngularJS to React and Redux, and refactored core UI components to improve code reusability and maintainability.',
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
            'Assisted in process engineering design of international EPC projects',
        },
        {
          title:
            'Co-developed internal process design tools and engineering data exchange platforms to automate workflows for international EPC projects.',
        },
      ],
    },
  ],
  otherExperience: [
    {
      title: 'Frontend Teaching Assistant',
      company: { name: 'WeHelp', url: 'https://training.pada-x.com/wehelp' },
      startDate: new Date(2021, 11),
      endDate: new Date(2023, 11),
      description: [
        { title: 'Mentored 75+ trainees to become junior frontend engineers' },
      ],
    },
    {
      title: 'Frontend Trainee',
      company: { name: 'AppWorks School', url: 'https://school.appworks.tw' },
      startDate: new Date(2020, 3),
      endDate: new Date(2020, 8),
      description: [
        {
          title:
            'Completed a 16-week intensive frontend software engineering program, building hands-on web projects and transitioning into software engineering.',
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
      '擁有 5 年開發經驗的軟體工程師，專注於前端架構與企業級 Web 平台開發。熟悉 React、Vue 與 TypeScript，特別著重於模組化架構設計、線上可觀測性（Observability）以及解決複雜的工程技術挑戰。',
  },
  skills: [
    {
      title: '程式語言',
      skillList: ['TypeScript', 'JavaScript', 'Python'],
    },
    {
      title: '前端與架構',
      skillList: [
        'Vue (Vue 3, Pinia)',
        'React (Redux)',
        'Micro-Frontends',
        'Jest (單元測試)',
        'Tailwind CSS / UnoCSS',
      ],
    },
    {
      title: '可觀測性與其它工具',
      skillList: ['Azure Application Insights', 'Docker'],
    },
  ],
  workExperience: [
    {
      title: '軟體工程師 (Frontend Focused)',
      company: { name: 'AICS', url: 'https://aics.asus.com' },
      startDate: new Date(2022, 9),
      endDate: new Date(2026, 7),
      description: [
        {
          title: '微前端架構與高效能功能交付',
          items: [
            {
              title:
                '共同開發與維護次世代智慧醫療平台（ASUS xHIS），建立 50 個以上具備統一狀態管理與嚴謹模組邊界的微前端元件。',
            },
            {
              title:
                '獨立開發並交付關鍵醫療核心功能，加速版本發布週期並最小化跨模組相依性。',
            },
          ],
        },
        {
          title: '多租戶（Multi-Tenant）客製化與模組解耦',
          items: [
            {
              title:
                '重構並抽離客製化業務與 UI 邏輯為獨立套件或模組，處理多間醫院複雜需求，有效將客戶專屬程式碼與核心平台解耦。',
            },
          ],
        },
        {
          title: '前端可觀測性與線上環境偵錯',
          items: [
            {
              title:
                '建立前端日誌機制，並運用 Azure AppInsights 進行線上環境錯誤偵錯、SLA 監控與功能使用率追蹤。',
            },
          ],
        },
        {
          title: 'API 抽象層與高韌性系統整合',
          items: [
            {
              title:
                '針對跨政府與外部服務設計統一且可複用的 API 抽象層，建立具備錯誤處理的防禦性封裝，隔離後端與外部複雜度。',
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
            '開發電商 SaaS 核心功能與企業零售客戶的客製化 CMS 元件，整合物流、優惠券系統與 Google reCAPTCHA 安全防護機制。',
        },
        {
          title:
            '參與舊系統現代化，逐步將既有功能從 AngularJS 遷移至 React 與 Redux，並重構核心 UI 元件以提升程式碼複用性與可維護性。',
        },
      ],
    },
    {
      title: '研發工程師',
      company: { name: 'CTCI(中鼎集團)', url: 'https://www.ctci.com' },
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
            '完成為期 16 週的高強度前端軟體培訓計畫，透過實作專案練習並成功轉職軟體工程師。',
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
