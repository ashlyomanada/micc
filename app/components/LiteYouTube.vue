<script setup lang="ts">
const props = defineProps<{ videoId: string; title: string }>()
const loaded = ref(false)
</script>
<template>
  <div class="relative aspect-video overflow-hidden rounded-2xl bg-slate-900">
    <iframe v-if="loaded" class="absolute inset-0 h-full w-full" :src="`https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1`" :title="props.title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy" />
    <button v-else class="group absolute inset-0 grid w-full place-items-center text-white" :aria-label="`Play ${title}`" @click="loaded = true">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />
      <div class="relative text-center"><span class="mx-auto grid size-16 place-items-center rounded-full bg-white text-primary shadow-xl transition group-hover:scale-110"><UIcon name="i-lucide-play" class="size-7" /></span><span class="mt-4 block text-sm font-medium">{{ title }}</span></div>
    </button>
  </div>
</template>
