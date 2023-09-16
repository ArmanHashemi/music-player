<template>
  <q-page class="flex flex-col w-full h-full space-y-4">
    <!--  title section  -->
    <div class="w-full flex justify-between">
      <div class="text-bold text-xl">{{ $t('goodAfterNoon') }}</div>
      <div class="flex space-x-4">
        <img class="cursor-pointer" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" :src="$images.icons.alarm">
        <img class="cursor-pointer" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" :src="$images.icons.schedule">
        <img class="cursor-pointer" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" :src="$images.icons.settings">
      </div>
    </div>
    <!--  category section  -->
    <div class="w-full flex space-x-1">
      <q-chip :label="$t('music')" color="accent" text-color="reverse"/>
      <q-chip :label="$t('podcast')" color="accent" text-color="reverse"/>
    </div>

    <!--  music section  -->
    <div class="w-full flex">
      <div class="w-full md:w-1/2 lg:w-1/3 p-2" v-for="(music, i) in musics" :key="i">
        <div class="rounded-md shadow-xl bg-accent flex items-center">
          <img :src="music.image">
          <div class="p-2 text-reverse text-2xl">{{music.title}}</div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script setup lang="ts">
import { useGlobalStore } from 'stores/global-store'
import musics from 'src/constants/musics'

const store = useGlobalStore()
</script>
