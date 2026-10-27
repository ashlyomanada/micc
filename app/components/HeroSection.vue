<script setup lang="ts">
import { site } from '~/data/site'
</script>
<template>
  <section id="top" class="relative flex min-h-[94svh] items-center overflow-hidden bg-slate-900 text-white">
    <img :src="site.hero.image" :alt="`Placeholder landscape representing ${site.name}`" width="1200" height="800" fetchpriority="high" class="absolute inset-0 h-full w-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20" />
    <UContainer class="relative z-10 py-32"><div class="max-w-4xl"><p class="mb-5 text-sm font-bold uppercase tracking-[.25em] text-brand-200">{{ site.tagline }}</p><h1 class="font-display text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-7xl lg:text-8xl">{{ site.name }}</h1><p class="mt-7 font-display text-xl font-medium sm:text-2xl">{{ site.hero.subtitle }}</p><UButton to="/leadership" :label="site.hero.cta" trailing-icon="i-lucide-arrow-right" size="lg" class="mt-9" /></div></UContainer>
    <div class="absolute bottom-8 right-8 hidden text-xs font-semibold uppercase tracking-[.25em] text-white/70 md:block">Gather · Grow · Go</div>
  </section>
</template>
