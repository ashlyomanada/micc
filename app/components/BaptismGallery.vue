<script setup lang="ts">
import { site } from '~/data/site'
const selected = ref<(typeof site.baptismPhotos)[number] | null>(null)
const { el } = useScrollReveal()
const open = computed({ get: () => selected.value !== null, set: (value: boolean) => { if (!value) selected.value = null } })
</script>
<template>
  <section ref="el" class="scroll-reveal py-16 sm:py-24"><UContainer><SectionHeading :eyebrow="site.home.baptism.eyebrow" :title="site.home.baptism.title" :description="site.home.baptism.description" centered /><UCarousel :items="[...site.baptismPhotos]" arrows class="md:hidden" :ui="{ item: 'basis-[82%] ps-0' }"><template #default="{ item }"><button class="w-full overflow-hidden rounded-2xl" :aria-label="`View ${item.alt}`" @click="selected = item"><img :src="item.image" :alt="item.alt" width="640" height="460" loading="lazy" class="aspect-[4/3] w-full object-cover" /></button></template></UCarousel><div class="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-4"><button v-for="photo in site.baptismPhotos" :key="photo.image" class="group overflow-hidden rounded-2xl" :aria-label="`View ${photo.alt}`" @click="selected = photo"><img :src="photo.image" :alt="photo.alt" width="640" height="460" loading="lazy" class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /></button></div></UContainer>
    <UModal v-model:open="open" :title="selected?.alt"><template #body><img v-if="selected" :src="selected.image" :alt="selected.alt" width="1200" height="800" class="max-h-[70vh] w-full rounded-xl object-contain" /></template></UModal>
  </section>
</template>
