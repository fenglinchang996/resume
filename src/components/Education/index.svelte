<script>
  import CategoryBlock from '$components/CategoryBlock.svelte';
  import CategoryTitle from '$components/CategoryTitle.svelte';
  import EducationSection from './EducationSection.svelte';
</script>

<CategoryBlock>
  <CategoryTitle title={'Education'} />
  <div class="space-y-3">
    <EducationSection
      school={'National Taiwan University'}
      degree={'Master of Science - MS'}
      fieldOfStydy={'Chemical Engineering'}
      startDate={new Date(2014, 8)}
      endDate={new Date(2016, 7)}
    />
    <EducationSection
      school={'National Taiwan University'}
      degree={'Bachelor of Science - BS'}
      fieldOfStydy={'Chemical Engineering'}
      startDate={new Date(2008, 8)}
      endDate={new Date(2013, 7)}
    />
  </div>
</CategoryBlock>
