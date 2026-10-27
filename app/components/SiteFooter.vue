<script setup lang="ts">
import { site } from '~/data/site'
</script>
<template><UFooter class="bg-slate-950 text-slate-400"><template #top><RegionsFooter /></template><template #bottom><UContainer><div class="flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs sm:flex-row"><p>© {{ new Date().getFullYear() }} {{ site.name }} · {{ site.contact.affiliation }}</p><NuxtLink to="/visit-church" class="hover:text-white">Plan a visit</NuxtLink></div></UContainer></template></UFooter></template>
