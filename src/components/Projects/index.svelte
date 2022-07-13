<script>
  import CategoryBlock from '$components/CategoryBlock.svelte';
  import CategoryTitle from '$components/CategoryTitle.svelte';
  import ProjectSection from './ProjectSection.svelte';
</script>

<CategoryBlock>
  <CategoryTitle title={'Projects'} />
  <div class="space-y-3">
    <ProjectSection
      title={'MetaBus'}
      briefDescription={'A web service providing information about Taiwan buses, including live bus timetables, bus route maps, and nearby stops / routes'}
      startDate={new Date(2021, 10)}
      endDate={new Date(2021, 10)}
      repoURL={'github.com/super996programmer/meta-bus'}
      skills={[
        'React',
        'styled-components',
        'TypeScript',
        'Webpack',
        'Google Maps API',
      ]}
    />
    <ProjectSection
      title={'MindNote'}
      briefDescription={'A web tool for organizing ideas with mind mapping and note taking'}
      startDate={new Date(2020, 6)}
      endDate={new Date(2020, 7)}
      projectURL={'mindnote-f39e9.web.app'}
      repoURL={'github.com/fenglinchang996/MindNote'}
      skills={['React', 'Webpack', 'SVG', 'Firebase']}
    />
    <ProjectSection
      title={'STYLiSH'}
      briefDescription={'An e-commerce website for fascinating clothes'}
      startDate={new Date(2020, 4)}
      endDate={new Date(2020, 5)}
      projectURL={'fenglinchang996.github.io/Stylish'}
      repoURL={'github.com/fenglinchang996/Stylish'}
      skills={['HTML', 'CSS', 'JavaScript']}
    />
  </div>
</CategoryBlock>
