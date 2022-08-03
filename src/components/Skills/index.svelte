<script lang="ts">
  import CategoryBlock from '$components/common/CategoryBlock.svelte';
  import CategoryTitle from '$components/common/CategoryTitle.svelte';
  import type { ResumeData, Skill } from '$types/resumeData';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import SkillSection from './SkillSection.svelte';

  const resumeData = getContext<Writable<ResumeData>>('resumeData');
  let skills: Skill[];
  resumeData.subscribe((value) => (skills = value.skills));
</script>

<CategoryBlock>
  <CategoryTitle title={'Skills'} />
  <div
    class="space-y-3 md:flex md:justify-between md:space-y-0 lg:flex-col lg:gap-3"
  >
    {#each skills as { title, skillList }}
      <SkillSection {title} {skillList} />
    {/each}
  </div>
</CategoryBlock>
