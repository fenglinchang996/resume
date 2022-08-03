<script lang="ts">
  export let title: string;
  export let skillList: string[] = [];
</script>

<section>
  <h3 class="font-bold">{title}</h3>
  <ul class="list-disc list-inside">
    {#each skillList as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</section>
