<script setup lang="ts">
import { site } from '~/data/site'
const { el } = useScrollReveal()
</script>
<template>
  <section ref="el" class="scroll-reveal bg-slate-50 py-16 sm:py-24"><UContainer><SectionHeading :eyebrow="site.home.featuresEyebrow" :title="site.home.featuresTitle" :description="site.home.featuresDescription" centered /><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><UPageCard v-for="card in site.home.features" :key="card.title" :to="card.to" class="group overflow-hidden rounded-2xl border-0 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div class="relative -m-5 mb-4 h-48 overflow-hidden"><img :src="card.image" :alt="`Placeholder image for ${card.title}`" width="600" height="400" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"/><h3 class="absolute bottom-4 left-4 font-display text-xl font-bold text-white">{{ card.title }}</h3></div><p class="text-sm leading-6 text-slate-600">{{ card.text }}</p></UPageCard></div></UContainer></section>
</template>
