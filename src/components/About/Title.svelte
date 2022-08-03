<script lang="ts">
  export let name: string;
  export let headline: string;
</script>

<div class="md:flex md:space-x-4 md:items-center">
  <h1>
    <span class="text-2xl font-bold">{name}</span>
  </h1>
  <h2>
    <span class="text-xl">{headline}</span>
  </h2>
</div>
