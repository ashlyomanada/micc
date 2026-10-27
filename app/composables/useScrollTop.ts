export function useScrollTop() {
  const visible = ref(false)
  if (import.meta.client) {
    const update = () => { visible.value = window.scrollY > 500 }
    onMounted(() => { update(); window.addEventListener('scroll', update, { passive: true }) })
    onBeforeUnmount(() => window.removeEventListener('scroll', update))
  }
  return { visible }
}
