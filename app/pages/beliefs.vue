<script setup lang="ts">
import { site } from '~/data/site'
useSeoMeta({ title: `Beliefs | ${site.name}`, description: site.home.beliefsDescription, ogTitle: `Beliefs | ${site.name}`, ogDescription: site.home.beliefsDescription, ogImage: site.hero.image, twitterCard: 'summary_large_image' })
</script>
<template><div class="pt-24"><UPageHero :title="site.home.beliefsTitle" :description="site.home.beliefsDescription" /><UContainer class="max-w-4xl pb-24"><UAccordion :items="[...site.beliefs]" :ui="{ item: 'border-b border-slate-200' }" /></UContainer></div></template>
