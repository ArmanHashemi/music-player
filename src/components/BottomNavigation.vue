<template>
  <div class="w-full blure flex p-2 relative-position bg-accent text-reverse">
    <div v-ripple class="w-1/4 items-center justify-center flex flex-col cursor-pointer relative-position rounded-md px-4">
      <img :src="$images.icons.home" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" class=" w-8">
      <div>{{ $t('home') }}</div>
    </div>
    <div v-ripple class="w-1/4 items-center justify-center flex flex-col cursor-pointer relative-position rounded-md px-4">
      <img :src="$images.icons.search" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" class=" w-8">
      <div>{{ $t('search') }}</div>
    </div>
    <div v-ripple class="w-1/4 items-center justify-center flex flex-col cursor-pointer relative-position rounded-md px-4">
      <img :src="$images.icons.musics" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" class=" w-8">
      <div>{{ $t('library') }}</div>
    </div>
    <div v-ripple class="w-1/4 items-center justify-center flex flex-col cursor-pointer relative-position rounded-md px-4">
      <img :src="$images.icons.spotify" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" class=" w-8">
      <div>{{ $t('premium') }}</div>
    </div>
    <music-player />
  </div>
</template>

<script setup lang="ts">

import MusicPlayer from 'components/MusicPlayer.vue'
import { useGlobalStore } from 'stores/global-store'
const store = useGlobalStore()
</script>

<style scoped lang="scss">
</style>
