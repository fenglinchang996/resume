<script setup lang="ts">
defineProps<{ title: string; skillList: string[] }>();
</script>

<template>
  <section>
    <h3 class="font-bold">{{ title }}</h3>
    <ul class="list-disc list-outside pl-4">
      <li v-for="skill of skillList" :key="skill">
        {{ skill }}
      </li>
    </ul>
  </section>
</template>
