<script setup lang="ts">
import { site } from '~/data/site'
</script>
<template>
  <section class="bg-slate-950 py-16 text-white sm:py-20">
    <UContainer>
      <div class="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
        <div><p class="mb-4 text-xs font-bold uppercase tracking-[.2em] text-brand-300">Get Involved</p><h2 class="font-display text-3xl font-bold sm:text-4xl">{{ site.name }}</h2><p class="mt-5 max-w-md leading-7 text-slate-300">{{ site.contact.mission }}</p><div class="mt-6 flex gap-2"><UButton v-for="social in site.socials" :key="social.label" :to="social.url" target="_blank" :icon="social.icon" :aria-label="social.label" color="neutral" variant="ghost" class="text-white" /></div></div>
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4"><div v-for="region in site.regions" :key="region.id"><h3 class="mb-4 text-xs font-bold uppercase tracking-[.16em] text-brand-300">{{ region.name }}</h3><ul class="space-y-3 text-sm text-slate-300"><li v-for="group in region.groups" :key="group"><NuxtLink :to="`/locations#${region.id}`" class="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2">{{ group }}</NuxtLink></li></ul></div></div>
      </div>
    </UContainer>
  </section>
</template>
