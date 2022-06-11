<script lang="ts">
  export let title: string;
  export let componey: string;
  export let location: string;
  export let startDate: Date;
  export let endDate: Date | null = null;
  export let description: string | string[] = '';
  export let skills: string[] = [];
</script>

<section class="my-2">
  <h3 class="text-lg font-bold">{title}</h3>
  <div class="font-bold">
    {componey}
  </div>
  <div class="text-gray-500">
    {`${startDate.toLocaleString('en-US', {
      month: 'short',
    })} ${startDate.getFullYear()}`} - {endDate
      ? `${endDate.toLocaleString('en-US', {
          month: 'short',
        })} ${endDate.getFullYear()}`
      : 'Present'}
  </div>
  <div class="text-gray-500">{location}</div>
  <div class="my-1">
    {#if Array.isArray(description)}
      <ul class="list-disc list-inside [hyphens:auto]">
        {#each description as descriptionItem}
          <li>{descriptionItem}</li>
        {/each}
      </ul>
    {:else if typeof description === 'string'}
      <p>{description}</p>
    {/if}
  </div>
  {#if skills.length > 0}
    <div class="my-1">
      Skills: {skills.join(', ')}
    </div>
  {/if}
</section>
