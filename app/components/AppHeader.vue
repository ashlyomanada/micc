<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { site } from '~/data/site'
const route = useRoute()
const scrolled = ref(false)
const items = computed<NavigationMenuItem[]>(() => [
  { label: 'LOCATIONS', to: '/locations', children: site.regions.map(r => ({ label: r.name, to: `/locations#${r.id}` })) },
  { label: 'SERMONS', to: site.sermons.url, target: '_blank' },
  { label: 'BELIEFS', to: '/beliefs' },
  { label: 'LEADERSHIP', to: '/leadership' }
])
onMounted(() => { const update = () => scrolled.value = window.scrollY > 40; update(); window.addEventListener('scroll', update, { passive: true }); onBeforeUnmount(() => window.removeEventListener('scroll', update)) })
</script>
<template>
  <UHeader :class="['fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled || route.path !== '/' ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent text-white']" :toggle="{ color: 'neutral' }">
    <template #title><span class="font-display text-lg font-extrabold tracking-tight sm:text-xl">{{ site.name }}</span></template>
    <UNavigationMenu :items="items" class="hidden md:flex" />
    <template #right><UButton to="/visit-church" label="VISIT CHURCH" color="primary" size="sm" class="hidden sm:inline-flex" /></template>
    <template #body>
      <nav aria-label="Mobile navigation" class="min-h-[calc(100dvh-var(--ui-header-height))] bg-white px-6 py-8 text-slate-900 md:hidden">
        <div class="mx-auto flex max-w-lg flex-col gap-2">
          <details class="border-b border-slate-200 py-3"><summary class="cursor-pointer font-bold">LOCATIONS</summary><NuxtLink v-for="region in site.regions" :key="region.id" :to="`/locations#${region.id}`" class="block py-3 pl-4 text-slate-600">{{ region.name }}</NuxtLink></details>
          <a :href="site.sermons.url" target="_blank" class="border-b border-slate-200 py-4 font-bold">SERMONS ↗</a>
          <NuxtLink to="/beliefs" class="border-b border-slate-200 py-4 font-bold">BELIEFS</NuxtLink><NuxtLink to="/leadership" class="border-b border-slate-200 py-4 font-bold">LEADERSHIP</NuxtLink>
          <UButton to="/visit-church" label="VISIT CHURCH" class="mt-4 justify-center" size="lg" />
        </div>
      </nav>
    </template>
  </UHeader>
</template>
