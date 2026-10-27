<script setup lang="ts">
import { site } from '~/data/site'
</script>
<template><section class="py-16 sm:py-24"><UContainer><div class="grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><SectionHeading :eyebrow="site.home.sermonsEyebrow" :title="site.sermons.title" :description="site.sermons.description" /><UButton :to="site.sermons.url" target="_blank" :label="site.home.moreSermonsLabel" trailing-icon="i-lucide-arrow-up-right" size="lg" /></div><UCard class="overflow-hidden rounded-3xl border-0 bg-white shadow-xl"><LiteYouTube :video-id="site.sermons.videoId" :title="site.sermons.title" /></UCard></div></UContainer></section></template>
