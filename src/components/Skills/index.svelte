<script>
  import CategoryBlock from '$components/CategoryBlock.svelte';
  import CategoryTitle from '$components/CategoryTitle.svelte';
  import SkillSection from './SkillSection.svelte';
</script>

<CategoryBlock>
  <CategoryTitle title={'Skills'} />
  <SkillSection
    title={'Programming Language'}
    skillList={['JavaScript(ES6+) / TypeScript', 'HTML', 'CSS']}
  />
  <SkillSection
    title={'Front-End Framework / Library'}
    skillList={[
      'React(Hooks)',
      'React Router',
      'Redux',
      'styled-components',
      'Tailwind CSS',
    ]}
  />
  <SkillSection
    title={'Front-End Tooling'}
    skillList={['NPM', 'Webpack', 'ESLint']}
  />
</CategoryBlock>
