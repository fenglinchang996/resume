<script lang="ts">
  import { decorateURL } from '$utils';
  export let title: string;
  export let companyName: string;
  export let companyUrl: string = '';
  export let location: string;
  export let startDate: Date;
  export let endDate: Date | null = null;
  export let description: string | string[] = '';
  export let skills: string[] = [];
</script>

<section>
  <div
    class="my-1 space-y-1 md:flex md:justify-between md:space-y-0 print:flex print:justify-between print:space-y-0"
  >
    <div>
      <h3 class="text-lg font-bold">
        <span class="inline-block w-5 text-left text-blue-400">
          <i class="fa-solid fa-clipboard-user" />
        </span>
        {title}
      </h3>
      <div class="font-bold">
        <span class="inline-block w-5 text-left text-slate-700">
          <i class="fa-solid fa-building" />
        </span>
        <span>
          {#if companyUrl}
            <a href={decorateURL(companyUrl)} class="underline">{companyName}</a
            >
          {:else}
            {companyName}
          {/if}
        </span>
      </div>
    </div>
    <div class="text-gray-600 md:text-right">
      <div>
        {`${startDate.toLocaleString('en-US', {
          month: 'short',
        })} ${startDate.getFullYear()}`} - {endDate
          ? `${endDate.toLocaleString('en-US', {
              month: 'short',
            })} ${endDate.getFullYear()}`
          : 'Present'}
      </div>
      <div>{location}</div>
    </div>
  </div>
  <div class="my-2">
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
  {#if skills?.length > 0}
    <div class="my-1">
      <span class="inline-block w-4 text-gray-600">
        <i class="fa-solid fa-screwdriver-wrench" />
      </span>
      <span class="font-medium">Skills</span>: {skills.join(', ')}
    </div>
  {/if}
</section>
