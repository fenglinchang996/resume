<script>
  import CategoryBlock from '$components/CategoryBlock.svelte';
  import CategoryTitle from '$components/CategoryTitle.svelte';
  import SkillSection from './SkillSection.svelte';
</script>

<CategoryBlock>
  <CategoryTitle title={'Skills'} />
  <SkillSection
    title={'Programming Language'}
    skillList={['HTML', 'CSS', 'JavaScript(ES6+) / TypeScript', 'Python']}
  />
  <SkillSection
    title={'Front-End Framework / Library'}
    skillList={[
      'React',
      'React Router',
      'Redux',
      'styled-components',
      'Tailwind CSS',
    ]}
  />
  <SkillSection
    title={'Front-end Tooling'}
    skillList={['NPM', 'Webpack', 'ESLint']}
  />
</CategoryBlock>
