import { setCssVar, LocalStorage } from 'quasar'
import { useGlobalStore } from 'stores/global-store'

export default function useTheme () {
  const globalStore = useGlobalStore()

  function loadAppTheme () {
    let themeMode: string | null
    if (LocalStorage.getItem('theme')) {
      themeMode = LocalStorage.getItem('theme')
    } else {
      themeMode = getMediaPreference()
    }
    if (themeMode === 'dark') {
      darkTheme()
    } else {
      lightTheme()
    }
  }
  function darkTheme () {
    setCssVar('primary', '#4527A0')
    setCssVar('secondary', '#1D1B29')
    setCssVar('accent', '#FAFAFA')
    setCssVar('tertiary', '#E7E7E7')
    setCssVar('fourtiary', '#18181B')
    setCssVar('reverse', '#FFFFFF')
  }
  function lightTheme () {
    setCssVar('primary', '#4527A0')
    setCssVar('secondary', '#FFFFFF')
    setCssVar('accent', '#343741')
    setCssVar('tertiary', '#71717A')
    setCssVar('fourtiary', '#F5F5F5')
    setCssVar('reverse', '#000000')
  }
  function changeTheme () {
    let themeMode: string | null
    if (LocalStorage.getItem('theme')) {
      themeMode = LocalStorage.getItem('theme')
    } else {
      themeMode = getMediaPreference()
    }
    if (themeMode === 'dark') {
      lightTheme()
      LocalStorage.set('theme', 'light')
      globalStore.changeTheme('light')
    } else {
      darkTheme()
      LocalStorage.set('theme', 'dark')
      globalStore.changeTheme('dark')
    }
  }
  function getMediaPreference () {
    const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (hasDarkPreference) {
      LocalStorage.set('theme', 'dark')
      return 'dark'
    } else {
      LocalStorage.set('theme', 'light')
      return 'light'
    }
  }

  return {
    loadAppTheme,
    changeTheme
  }
}
