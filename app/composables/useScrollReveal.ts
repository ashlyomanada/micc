export function useScrollReveal() {
  const el = ref<HTMLElement | null>(null)
  onMounted(() => {
    if (!el.value) return
    if (!('IntersectionObserver' in window)) { el.value.classList.add('is-visible'); return }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.value?.classList.add('is-visible'); observer.disconnect() }
    }, { threshold: 0.12 })
    observer.observe(el.value)
    onBeforeUnmount(() => observer.disconnect())
  })
  return { el }
}
