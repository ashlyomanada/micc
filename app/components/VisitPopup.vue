<script setup lang="ts">
import { site } from '~/data/site'
const { open, close } = useVisitPopup()
</script>
<template>
  <UModal v-model:open="open" title="VISIT US" :description="site.contact.serviceTime">
    <template #body>
      <div class="space-y-5">
        <div><p class="font-display text-2xl font-bold">{{ site.contact.venue }}</p><p class="mt-1 text-slate-600">{{ site.contact.address }}</p><UButton :to="site.contact.mapUrl" target="_blank" label="Google Maps →" variant="link" class="px-0" /></div>
        <div><p class="text-sm font-semibold text-slate-500">Call or Text</p><a :href="`tel:${site.contact.phone}`" class="font-semibold text-primary">{{ site.contact.phone }}</a></div>
        <div class="flex gap-2"><UButton v-for="social in site.socials" :key="social.label" :to="social.url" target="_blank" :icon="social.icon" :aria-label="social.label" color="neutral" variant="ghost" /></div>
      </div>
    </template>
    <template #footer><UButton label="Plan your visit" to="/visit-church" @click="close" /><UButton label="Close" variant="ghost" color="neutral" @click="close" /></template>
  </UModal>
</template>
