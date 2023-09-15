import { defineStore } from 'pinia'
export const useGlobalStore = defineStore('global', {
  state: () => ({
    themeMode: 'dark'
  }),
  actions: {
    changeTheme (mode: string) {
      this.themeMode = mode
    }
  }
})
