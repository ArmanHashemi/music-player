<template>
  <!--  title section  -->
  <div class="w-full flex justify-between">
    <div class="text-bold text-xl">{{ $t('goodAfterNoon') }}</div>
    <div class="flex px-2 space-x-2">
      <theme-switch/>
      <img class="cursor-pointer" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" :src="$images.icons.alarm">
      <img class="cursor-pointer" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" :src="$images.icons.schedule">
      <img class="cursor-pointer" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" :src="$images.icons.settings">

    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from 'stores/global-store'
import ThemeSwitch from 'components/ThemeSwitch.vue'
const store = useGlobalStore()
</script>

<style scoped lang="scss">

</style>
