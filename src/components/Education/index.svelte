<script lang="ts">
  import CategoryBlock from '$components/common/CategoryBlock.svelte';
  import CategoryTitle from '$components/common/CategoryTitle.svelte';
  import type { Education, ResumeData } from '$types/resumeData';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import EducationSection from './EducationSection.svelte';

  let educationList: Education[];
  const resumeData = getContext<Writable<ResumeData>>('resumeData');
  resumeData.subscribe((value) => (educationList = value.education));
</script>

<CategoryBlock>
  <CategoryTitle title={'Education'} />
  <dvi class="space-y-3">
    {#each educationList as { school, degree, fieldOfStudy, startDate, endDate }}
      <EducationSection
        {school}
        {degree}
        {fieldOfStudy}
        {startDate}
        {endDate}
      />
    {/each}
  </dvi>
</CategoryBlock>
