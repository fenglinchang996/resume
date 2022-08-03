<script lang="ts">
  import CategoryBlock from '$components/common/CategoryBlock.svelte';
  import CategoryTitle from '$components/common/CategoryTitle.svelte';
  import type { Project, ResumeData } from '$types/resumeData';
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  import ProjectSection from './ProjectSection.svelte';

  let projects: Project[];
  const resumeData = getContext<Writable<ResumeData>>('resumeData');
  resumeData.subscribe((value) => (projects = value.projects));
</script>

<CategoryBlock>
  <CategoryTitle title={'Projects'} />
  <div class="space-y-3">
    {#each projects as project}
      <ProjectSection {...project} />
    {/each}
  </div>
</CategoryBlock>
