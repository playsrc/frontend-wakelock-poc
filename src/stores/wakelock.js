import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWakeLockStore = defineStore('wakelock', () => {
  const enabled = ref(false)

  function toggle() {
    enabled.value = !enabled.value
  }

  return { enabled, toggle }
})
