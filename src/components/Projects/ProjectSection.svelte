<script lang="ts">
  export let title: string;
  export let briefDescription: string;
  export let startDate: Date;
  export let endDate: Date | null = null;
  export let projectURL: string = '';
  export let repoURL: string = '';
  export let detailedDescription: string | string[] | null = null;
  export let skills: string[] = [];

  const decorateURL = (URL: string) => {
    if (URL.startsWith('https://')) return URL;
    return `https://${URL}`;
  };
</script>

<section class="my-2">
  <h3 class="text-lg font-bold">{title}</h3>
  <div class="font-bold">{briefDescription}</div>
  <div class="text-gray-500">
    {`${startDate.toLocaleString('en-US', {
      month: 'short',
    })} ${startDate.getFullYear()}`} - {endDate
      ? `${endDate.toLocaleString('en-US', {
          month: 'short',
        })} ${endDate.getFullYear()}`
      : 'Present'}
  </div>
  <div class="my-2">
    {#if projectURL}
      <div>
        <span class="text-blue-400 align-middle">
          <i class="fa-solid fa-globe" />
        </span>
        <a class="text-gray-500 underline" href={decorateURL(projectURL)}>
          {projectURL}
        </a>
      </div>
    {/if}
    {#if repoURL}
      <div>
        <span class="text-[#333333] align-middle">
          <i class="fa-brands fa-github" />
        </span>
        <a class="text-gray-500 underline" href={decorateURL(repoURL)}>
          {repoURL}
        </a>
      </div>
    {/if}
  </div>
  {#if detailedDescription}
    <div class="my-1">
      {#if Array.isArray(detailedDescription)}
        <ul class="list-disc list-inside">
          {#each detailedDescription as descriptionItem}
            <li>{descriptionItem}</li>
          {/each}
        </ul>
      {:else if typeof detailedDescription === 'string'}
        <p>{detailedDescription}</p>
      {/if}
    </div>
  {/if}
  {#if skills.length > 0}
    <div class="my-1">
      Skills: {skills.join(', ')}
    </div>
  {/if}
</section>
