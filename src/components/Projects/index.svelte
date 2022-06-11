<script>
  import CategoryBlock from '$components/CategoryBlock.svelte';
  import CategoryTitle from '$components/CategoryTitle.svelte';
  import ProjectSection from './ProjectSection.svelte';
</script>

<CategoryBlock>
  <CategoryTitle title={'Projects'} />
  <ProjectSection
    title={'MetaBus'}
    briefDescription={"A web service providing information about Taiwan bus, including live bus timetables, bus route maps,  nearby stops' details and bus routes / stops searching"}
    startDate={new Date(2020, 10)}
    endDate={new Date(2020, 10)}
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
    briefDescription={'A web tool for organizing the ideas with mind mapping and note taking'}
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
</CategoryBlock>
