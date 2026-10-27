<script setup lang="ts">
const { visible } = useScrollTop()
</script>
<template><UButton v-if="visible" to="#top" icon="i-lucide-arrow-up" aria-label="Back to top" color="primary" class="fixed bottom-5 right-5 z-40 rounded-full shadow-lg" /></template>
