<script setup lang="ts">
import { site } from '~/data/site'
useSeoMeta({ title: `${site.name} | ${site.tagline}`, description: site.contact.mission, ogTitle: `${site.name} | ${site.tagline}`, ogDescription: site.contact.mission, ogImage: site.hero.image, twitterCard: 'summary_large_image' })
</script>
<template>
  <HeroSection />
  <SermonsSection />
  <UPageCTA :title="site.home.bible.title" :description="site.home.bible.description" :links="[{ label: site.home.bible.cta, to: '/leadership', trailingIcon: 'i-lucide-arrow-right' }]" class="bg-brand-700 text-white" :ui="{ title: 'text-white', description: 'text-white/80', links: 'justify-center' }" />
  <UPageSection class="py-16 sm:py-24"><UContainer><div class="grid items-center gap-10 lg:grid-cols-2"><img :src="site.series.image" :alt="`Placeholder artwork for ${site.series.title}`" width="1200" height="800" loading="lazy" class="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"/><div><SectionHeading :eyebrow="site.home.seriesEyebrow" :title="site.series.title" :description="site.series.description"/><UButton :to="site.sermons.url" target="_blank" :label="site.home.seriesCta" trailing-icon="i-lucide-arrow-up-right" /></div></div></UContainer></UPageSection>
  <FeatureCards />
  <BaptismGallery />
  <BooksSection />
  <LeadershipSection />
  <ContactBlock />
</template>
