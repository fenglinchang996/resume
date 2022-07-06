<script>
  import CategoryBlock from '$components/CategoryBlock.svelte';
  import CategoryTitle from '$components/CategoryTitle.svelte';
  import ExperienceSection from './ExperienceSection.svelte';
</script>

<CategoryBlock>
  <CategoryTitle title={'Work Experience'} />
  <ExperienceSection
    title={'Front-End Engineer'}
    componey={'91APP, Inc'}
    startDate={new Date(2020, 8)}
    endDate={new Date(2022, 4)}
    location={'Taipei City, Taiwan'}
    description={[
      'Developed front-end part of e-commerce service, including HiLife logistics management, Google reCaptcha Enterprise integration, and shipping coupon feature',
      'Customized PXGo! online shopping site for PX Mart, e.g., re-designing category page, adding new features in store CMS(Content Management System) and refactoring product card',
      'Collaborated and communicated with team members (PO, UI/UX, QA, and other SWE) in SCRUM development process to deliver tasks on time',
    ]}
    skills={['React', 'Redux', 'styled-components', 'TypeScript', 'AngularJS']}
  />
  <ExperienceSection
    title={'R&D Engineer'}
    componey={'CTCI Corporation'}
    startDate={new Date(2018, 3)}
    endDate={new Date(2020, 3)}
    location={'Taipei City, Taiwan'}
    description={'Collaborated with other departments to build process design tool and engineering data exchange plateform'}
  />
  <ExperienceSection
    title={'Process Engineer'}
    componey={'CTCI Corporation'}
    startDate={new Date(2016, 8)}
    endDate={new Date(2018, 3)}
    location={'Taipei City, Taiwan'}
    description={'Assisted in process engineering design of international EPC projects'}
  />
</CategoryBlock>
<CategoryBlock>
  <CategoryTitle title={'Other Experience'} />
  <ExperienceSection
    title={'Front-End Teaching Assistant'}
    componey={'WeHelp'}
    startDate={new Date(2021, 11)}
    location={'Taipei City, Taiwan'}
    description={'Mentored 25+ trainees to become junior front-end engineers'}
    skills={['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'AWS EC2']}
  />
  <ExperienceSection
    title={'Front-End Trainee'}
    componey={'AppWorks School'}
    startDate={new Date(2020, 3)}
    endDate={new Date(2020, 8)}
    location={'Taipei City, Taiwan'}
    description={[
      'Learned programming knowledge for front-end development, e.g. HTML, CSS, JavaScript, Webpack, and React',
      'Completed the assigned project STYLiSH in 3 weeks to practice programming skills and problem-solving thoughts',
      'Built the personal project MindNote in 5 weeks: Designing the UI, constructing the code structure, and implementing the features independently',
    ]}
    skills={['HTML', 'CSS', 'JavaScript', 'React', 'Webpack', 'Firebase']}
  />
</CategoryBlock>
