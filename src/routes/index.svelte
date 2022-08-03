<script lang="ts">
  import type { ResumeData } from '$types/resumeData';
  import About from '$components/About/index.svelte';
  import Skills from '$components/Skills/index.svelte';
  import Experience from '$components/Experience/index.svelte';
  import Projects from '$components/Projects/index.svelte';
  import Education from '$components/Education/index.svelte';
  import { PRODUCTION_DOMAIN } from '$constants';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import LanguageSelect from '$components/common/LanguageSelect.svelte';

  const languageSwitchOptions = [
    { key: '1', text: 'English', value: 'en' },
    { key: '2', text: '繁體中文', value: 'cht' },
  ];

  const resumeDataEn: ResumeData = {
    about: {
      name: 'Feng-Lin Chang',
      headline: 'Front-End Engineer',
      contact: {
        email: 'paulespling@gmail.com',
        linkedin: 'www.linkedin.com/in/fenglinchang',
        github: 'github.com/fenglinchang996',
      },
      summary:
        'Front-end engineer with 2 years experience developing and maintaining responsive websites. Familiar with web development basics: HTML, CSS and JavaScript. Also experienced in modern front-end frameworks and libraries, such as React, Redux, TypeScript and styled-components. Seeking a role as a front-end engineer with a passion for creating immersive user experiences and developing high performance websites.',
    },
    skills: [
      {
        title: 'Language',
        skillList: ['JavaScript(ES6+) / TypeScript', 'HTML', 'CSS'],
      },
      {
        title: 'Front-End Framework / Libaray',
        skillList: [
          'React(Hooks)',
          'React Router',
          'Redux',
          'styled-components',
          'Tailwind CSS',
        ],
      },
      {
        title: 'Front-End Tooling',
        skillList: ['NPM', 'Webpack', 'ESLint'],
      },
    ],
    workExperience: [
      {
        title: 'Front-End Engineer',
        company: { name: '91APP, Inc', url: 'https://www.91app.com' },
        startDate: new Date(2020, 8),
        endDate: new Date(2022, 4),
        location: 'Taipei City, Taiwan',
        description: [
          'Developed front-end part of e-commerce service, including HiLife logistics management, Google reCaptcha Enterprise integration, and shipping coupon feature',
          'Customized PXGo! online shopping site for PX Mart, e.g., re-designing category page, adding new features in store CMS(Content Management System) and refactoring product card',
          'Collaborated and communicated with team members (PO, UI/UX, QA, and other SWE) in SCRUM development process to deliver tasks on time',
        ],
        skills: [
          'React',
          'Redux',
          'styled-components',
          'TypeScript',
          'AngularJS',
        ],
      },
      {
        title: 'R&D Engineer',
        company: { name: 'CTCI Corporation', url: 'https://www.ctci.com' },
        startDate: new Date(2018, 3),
        endDate: new Date(2020, 3),
        location: 'Taipei City, Taiwan',
        description:
          'Collaborated with other departments to build process design tool and engineering data exchange plateform',
      },
      {
        title: 'Process Engineer',
        company: { name: 'CTCI Corporation', url: 'https://www.ctci.com' },
        startDate: new Date(2016, 8),
        endDate: new Date(2018, 3),
        location: 'Taipei City, Taiwan',
        description:
          'Assisted in process engineering design of international EPC projects',
      },
    ],
    otherExperience: [
      {
        title: 'Front-End Teaching Assistant',
        company: { name: 'WeHelp', url: 'https://training.pada-x.com/wehelp' },
        startDate: new Date(2021, 11),
        location: 'Taipei City, Taiwan',
        description:
          'Mentored 25+ trainees to become junior front-end engineers',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'AWS EC2'],
      },
      {
        title: 'Front-End Trainee',
        company: { name: 'AppWorks School', url: 'https://school.appworks.tw' },
        startDate: new Date(2020, 3),
        endDate: new Date(2020, 8),
        location: 'Taipei City, Taiwan',
        description: [
          'Learned programming knowledge for front-end development, e.g. HTML, CSS, JavaScript, Webpack, and React',
          'Completed the assigned project STYLiSH in 3 weeks to practice programming skills and problem-solving thoughts',
          'Built the personal project MindNote in 5 weeks: Designing the UI, constructing the code structure, and implementing the features independently',
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Webpack', 'Firebase'],
      },
    ],
    projects: [
      {
        title: 'MetaBus',
        briefDescription:
          'A web service providing information about Taiwan buses, including live bus timetables, bus route maps, and nearby stops / routes',
        startDate: new Date(2021, 10),
        endDate: new Date(2021, 10),
        repoURL: 'github.com/super996programmer/meta-bus',
        skills: [
          'React',
          'styled-components',
          'TypeScript',
          'Webpack',
          'Google Maps API',
        ],
      },
      {
        title: 'MindNote',
        briefDescription:
          'A web tool for organizing ideas with mind mapping and note taking',
        startDate: new Date(2020, 6),
        endDate: new Date(2020, 7),
        projectURL: 'mindnote-f39e9.web.app',
        repoURL: 'github.com/fenglinchang996/MindNote',
        skills: ['React', 'Webpack', 'SVG', 'Firebase'],
      },
      {
        title: 'STYLiSH',
        briefDescription: 'An e-commerce website for fascinating clothes',
        startDate: new Date(2020, 4),
        endDate: new Date(2020, 5),
        projectURL: 'fenglinchang996.github.io/Stylish',
        repoURL: 'github.com/fenglinchang996/Stylish',
        skills: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
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
  const resumeDataCht: ResumeData = {
    about: {
      name: '張峰林',
      headline: '前端工程師',
      contact: {
        email: 'paulespling@gmail.com',
        linkedin: 'www.linkedin.com/in/fenglinchang',
        github: 'github.com/fenglinchang996',
      },
      summary:
        '兩年前端開發經驗，熟悉網頁開發基本技術：HTML、CSS 與 JavaScript，也有使用前端框架與工具的經驗，例如：React、Redux、TypeScript、Webpack 與 Styled Components 等等。對新技術充滿熱情，目前正在研究 Next.js、Svelte 與 TailwindCSS 等前端技術。期望成為能夠建立良好使用者體驗與打造高效能網站的前端工程師。',
    },
    skills: [
      {
        title: '語言',
        skillList: ['JavaScript(ES6+) / TypeScript', 'HTML', 'CSS'],
      },
      {
        title: '前端框架 / 套件',
        skillList: [
          'React(Hooks)',
          'React Router',
          'Redux',
          'styled-components',
          'Tailwind CSS',
        ],
      },
      {
        title: '前端工具',
        skillList: ['NPM', 'Webpack', 'ESLint'],
      },
    ],
    workExperience: [
      {
        title: '前端工程師',
        company: { name: '91APP, Inc', url: 'https://www.91app.com' },
        startDate: new Date(2020, 8),
        endDate: new Date(2022, 4),
        location: '台灣台北市',
        description: [
          '開發電商相關服務，例如萊爾富配送管理、登入頁串接 Google reCaptcha、運費券使用等等',
          '開發全聯購物網站 PX!Go 客製化需求，例如：客製化設計商品分類頁面、新增全聯專屬內容管理系統（CMS）功能、重構商品卡樣式等等',
          '與 PM、UI/UX 設計、測試員及其他工程師協作並以敏捷開發（SCRUM）來進行專案',
        ],
        skills: [
          'React',
          'Redux',
          'styled-components',
          'TypeScript',
          'AngularJS',
        ],
      },
      {
        title: '研發工程師',
        company: { name: 'CTCI(中鼎集團)', url: 'https://www.ctci.com' },
        startDate: new Date(2018, 3),
        endDate: new Date(2020, 3),
        location: '台灣台北市',
        description: '與其它部門合作打造方法設計工具與工程資料交換平台',
      },
      {
        title: '方法工程師',
        company: { name: 'CTCI(中鼎集團)', url: 'https://www.ctci.com' },
        startDate: new Date(2016, 8),
        endDate: new Date(2018, 3),
        location: 'Taipei City, Taiwan',
        description: '協助執行國際 EPC 統包案的方法設計',
      },
    ],
    otherExperience: [
      {
        title: '前端助教',
        company: { name: 'WeHelp', url: 'https://training.pada-x.com/wehelp' },
        startDate: new Date(2021, 11),
        location: '台灣台北市',
        description: '協助輔導 25 位以上前端學員轉職成為初階前端工程師',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'AWS EC2'],
      },
      {
        title: '前端學員',
        company: { name: 'AppWorks School', url: 'https://school.appworks.tw' },
        startDate: new Date(2020, 3),
        endDate: new Date(2020, 8),
        location: '台灣台北市',
        description: [
          '學習前端開發知識與技術，例如：HTML、CSS、JavaScript、Webpack 與 React 等等',
          '透過三週內完成指定專案 STYLiSH，練習程式開發技巧與解決問題思維',
          '在五週內獨立發想並完成個人專案 MindNote：包括介面設計、程式架構與功能實作等等',
        ],
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Webpack', 'Firebase'],
      },
    ],
    projects: [
      {
        title: 'MetaBus',
        briefDescription:
          '提供台灣公車動態資訊，包括公車時刻、公車路線地圖與鄰近站牌 / 路線等等',
        startDate: new Date(2021, 10),
        endDate: new Date(2021, 10),
        repoURL: 'github.com/super996programmer/meta-bus',
        skills: [
          'React',
          'styled-components',
          'TypeScript',
          'Webpack',
          'Google Maps API',
        ],
      },
      {
        title: 'MindNote',
        briefDescription: '繪製心智圖與筆記的線上工具',
        startDate: new Date(2020, 6),
        endDate: new Date(2020, 7),
        projectURL: 'mindnote-f39e9.web.app',
        repoURL: 'github.com/fenglinchang996/MindNote',
        skills: ['React', 'Webpack', 'SVG', 'Firebase'],
      },
      {
        title: 'STYLiSH',
        briefDescription: '線上潮流衣服購物網站',
        startDate: new Date(2020, 4),
        endDate: new Date(2020, 5),
        projectURL: 'fenglinchang996.github.io/Stylish',
        repoURL: 'github.com/fenglinchang996/Stylish',
        skills: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
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
  const resumeDataStore = writable(resumeDataEn);
  let selectedLanguageValue: string = 'en';
  setContext('resumeData', resumeDataStore);
  const switchLanguage = (lang: string) => {
    selectedLanguageValue = lang;
    if (lang === 'en') {
      resumeDataStore.set(resumeDataEn);
    } else if (lang == 'cht') {
      resumeDataStore.set(resumeDataCht);
    }
  };
</script>

<svelte:head>
  <title>FENG-LIN CHANG 張峰林</title>
  <meta property="og:title" content="FENG-LIN CHANG 張峰林" />
  <meta
    property="og:description"
    content="Seeking a role as a front-end engineer with a passion for creating immersive user experiences and developing high performance websites."
  />
  <meta property="og:image" content={`${PRODUCTION_DOMAIN}/preview.png`} />
</svelte:head>
<main class="relative mx-auto px-6 py-4 max-w-screen-lg md:pt-8">
  <div class="absolute top-4 right-6 md:top-8">
    <LanguageSelect
      options={languageSwitchOptions}
      selectedValue={selectedLanguageValue}
      onValueSelect={(value) => {
        if (typeof value === 'string') {
          switchLanguage(value);
        }
      }}
    />
  </div>
  <About />
  <div class="lg:hidden print:hidden">
    <Skills />
    <Experience />
    <Projects />
    <Education />
  </div>
  <div class="hidden lg:grid print:grid grid-cols-2 gap-8">
    <div>
      <Skills />
      <Projects />
    </div>
    <div>
      <Experience />
      <Education />
    </div>
  </div>
</main>
