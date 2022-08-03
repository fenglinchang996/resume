<script>
  import CategoryBlock from '$components/common/CategoryBlock.svelte';
  import CategoryTitle from '$components/common/CategoryTitle.svelte';
  import SkillSection from './SkillSection.svelte';
</script>

<CategoryBlock>
  <CategoryTitle title={'Skills'} />
  <div
    class="space-y-3 md:flex md:justify-between md:space-y-0 lg:flex-col lg:gap-3"
  >
    <SkillSection
      title={'Language'}
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
  </div>
</CategoryBlock>
