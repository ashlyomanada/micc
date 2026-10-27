export function useVisitPopup() {
  const open = ref(false)
  watch(open, (visible, wasVisible) => {
    if (wasVisible && !visible) {
      try { sessionStorage.setItem('church-visit-seen', '1') } catch { /* Closing still works without storage. */ }
    }
  })
  onMounted(() => {
    let seen = false
    try {
      seen = Boolean(sessionStorage.getItem('church-visit-seen'))
    } catch { /* Show the prompt if session storage is unavailable. */ }
    if (!seen) {
      const timer = window.setTimeout(() => { open.value = true }, 1600)
      onBeforeUnmount(() => window.clearTimeout(timer))
    }
  })
  const close = () => {
    open.value = false
    try { sessionStorage.setItem('church-visit-seen', '1') } catch { /* Ignore unavailable storage. */ }
  }
  return { open, close }
}
