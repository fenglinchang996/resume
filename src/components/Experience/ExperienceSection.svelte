<script lang="ts">
  import { decorateURL } from '$utils';
  export let title: string;
  export let componey: string;
  export let componeyURL: string = '';
  export let location: string;
  export let startDate: Date;
  export let endDate: Date | null = null;
  export let description: string | string[] = '';
  export let skills: string[] = [];
</script>

<section class="my-2">
  <h3 class="text-lg font-bold">
    <span class="inline-block w-5 text-center text-blue-400">
      <i class="fa-solid fa-clipboard-user" />
    </span>
    {title}
  </h3>
  <div class="font-bold">
    <span class="inline-block w-5 text-center text-slate-700">
      <i class="fa-solid fa-building" />
    </span>
    <span>
      {#if componeyURL}
        <a href={decorateURL(componeyURL)} class="underline">{componey}</a>
      {:else}
        {componey}
      {/if}
    </span>
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
      <span class="text-gray-600">
        <i class="fa-solid fa-screwdriver-wrench" />
      </span>
      <span class="font-medium">Skills</span>: {skills.join(', ')}
    </div>
  {/if}
</section>
