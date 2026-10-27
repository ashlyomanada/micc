<script setup lang="ts">
withDefaults(defineProps<{ eyebrow?: string; title: string; description?: string; centered?: boolean }>(), { centered: false })
</script>
<template>
  <div :class="['mb-10 max-w-3xl', centered && 'mx-auto text-center']">
    <p v-if="eyebrow" class="mb-3 text-xs font-bold uppercase tracking-[.22em] text-primary">{{ eyebrow }}</p>
    <h2 class="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{{ title }}</h2>
    <p v-if="description" class="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{{ description }}</p>
  </div>
</template>
