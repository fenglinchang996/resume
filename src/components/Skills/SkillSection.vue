<script setup lang="ts">
defineProps<{ title: string; skillList: string[] }>();
</script>

<template>
  <section>
    <h3 class="font-bold">{{ title }}</h3>
    <ul class="list-disc list-inside">
      <li v-for="skill of skillList" :key="skill">
        {{ skill }}
      </li>
    </ul>
  </section>
</template>
