<script lang="ts">
  import CategoryBlock from '$components/common/CategoryBlock.svelte';
  import CategoryTitle from '$components/common/CategoryTitle.svelte';
  import type { Experience, ResumeData } from '$types/resumeData';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import ExperienceSection from './ExperienceSection.svelte';

  const resumeData = getContext<Writable<ResumeData>>('resumeData');
  let workExperience: Experience[];
  let otherExperience: Experience[];
  resumeData.subscribe((value) => {
    workExperience = value.workExperience;
    otherExperience = value.otherExperience;
  });
</script>

<CategoryBlock>
  <CategoryTitle title={'Work Experience'} />
  <div class="space-y-3">
    {#each workExperience as { title, company: { name: companyName, url: companyUrl }, startDate, endDate, location, description, skills }}
      <ExperienceSection
        {title}
        {companyName}
        {companyUrl}
        {startDate}
        {endDate}
        {location}
        {description}
        {skills}
      />
    {/each}
  </div>
</CategoryBlock>
<CategoryBlock>
  <CategoryTitle title={'Other Experience'} />
  <div class="space-y-3">
    {#each otherExperience as { title, company: { name: companyName, url: companyUrl }, startDate, endDate, location, description, skills }}
      <ExperienceSection
        {title}
        {companyName}
        {companyUrl}
        {startDate}
        {endDate}
        {location}
        {description}
        {skills}
      />
    {/each}
  </div>
</CategoryBlock>
