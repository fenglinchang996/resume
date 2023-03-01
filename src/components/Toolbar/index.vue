<script setup lang="ts">
import LanguageSelect from './LanguageSelect.vue';
import PagePrint from './PagePrint.vue';
import DarkModeSwitch from './DarkModeSwitch.vue';
</script>

<template>
  <div class="flex items-center gap-4">
    <LanguageSelect />
    <PagePrint />
    <DarkModeSwitch />
  </div>
</template>
