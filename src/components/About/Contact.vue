<script setup lang="ts">
import type { Contact } from '@/types/resumeContent';
import { decorateUrl } from '@/utils/decorateUrl';

defineProps<{ contact: Contact }>();
</script>

<template>
  <div>
    <ul class="md:flex md:space-x-3">
      <li class="space-x-1">
        <span class="inline-block w-4 h-4 text-[#ea4335] text-center">
          <i class="fa-solid fa-envelope" />
        </span>
        <a class="underline" :href="`mailto:${contact.email}`">
          {{ contact.email }}
        </a>
      </li>
      <li class="space-x-1">
        <span class="inline-block w-4 h-4 text-[#0072b1] text-center">
          <i class="fa-brands fa-linkedin" />
        </span>
        <a class="underline" :href="`${decorateUrl(contact.linkedin)}`">
          {{ contact.linkedin }}
        </a>
      </li>
      <li class="space-x-1">
        <span class="inline-block w-4 h-4 text-[#333333] text-center">
          <i class="fa-brands fa-github" />
        </span>
        <a class="underline" :href="`${decorateUrl(contact.github)}`">
          {{ contact.github }}
        </a>
      </li>
    </ul>
  </div>
</template>
