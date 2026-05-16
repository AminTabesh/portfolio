import { ref, inject, provide } from 'vue'

const THEME_SYMBOL = Symbol('theme')

export function provideTheme() {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('portfolio-theme') : null
  const isDark = ref(stored !== 'light')
  const isTransitioning = ref(false)

  if (!isDark.value) {
    document.documentElement.classList.add('light-mode')
  }

  function toggleTheme() {
    if (isTransitioning.value) return
    isTransitioning.value = true
    setTimeout(() => {
      isDark.value = !isDark.value
      localStorage.setItem('portfolio-theme', isDark.value ? 'dark' : 'light')
      document.documentElement.classList.toggle('light-mode', !isDark.value)
      setTimeout(() => {
        isTransitioning.value = false
      }, 50)
    }, 220)
  }

  const context = { isDark, isTransitioning, toggleTheme }
  provide(THEME_SYMBOL, context)
  return context
}

export function useTheme() {
  return inject(THEME_SYMBOL)
}
