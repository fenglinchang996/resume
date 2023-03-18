<script setup lang="ts">
import LanguageSelect from './LanguageSelect.vue';
import PagePrint from './PagePrint.vue';
import ThemeAppearanceSwitch from '@/components/common/ThemeAppearanceSwitch.vue';
</script>

<template>
  <div class="flex items-center gap-4">
    <LanguageSelect />
    <PagePrint />
    <ThemeAppearanceSwitch />
  </div>
</template>
