import { ref, computed, inject, provide } from 'vue'
import { translations } from '../i18n.js'

const LANG_SYMBOL = Symbol('language')

export function provideLanguage() {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('portfolio-lang') : null
  const lang = ref(stored === 'en' ? 'en' : 'fa')
  const isTransitioning = ref(false)

  const t = computed(() => translations[lang.value])
  const isRTL = computed(() => lang.value === 'fa')

  function toggleLang() {
    if (isTransitioning.value) return
    isTransitioning.value = true
    setTimeout(() => {
      lang.value = lang.value === 'fa' ? 'en' : 'fa'
      localStorage.setItem('portfolio-lang', lang.value)
      setTimeout(() => {
        isTransitioning.value = false
      }, 50)
    }, 220)
  }

  const context = { lang, t, isRTL, isTransitioning, toggleLang }
  provide(LANG_SYMBOL, context)
  return context
}

export function useLanguage() {
  return inject(LANG_SYMBOL)
}