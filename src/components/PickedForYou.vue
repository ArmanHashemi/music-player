<template>
  <div class="w-full overflow-hidden">
    <div class="my-4 w-full flex justify-between">
      <div class="text-bold text-xl">{{ $t('pickedForYou') }}</div>
      <img class="cursor-pointer" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'"
           :src="$images.icons.options">
    </div>
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="10"
    >
      <swiper-slide v-for="(pick,i) in picksForYou" :key="i">
        <div v-ripple class="flex rounded-md shadow-xl bg-accent flex relative-position cursor-pointer">
          <img :src="pick.image" class="w-40">
          <div class="flex-1 flex flex-col p-3">
            <div class="w-full space-y-2 flex items-start justify-start">
              <div class="w-full">{{ $t('playList') }}</div>
              <div class="w-full text-bold text-md">{{pick.title}}</div>
              <div class="w-full">{{ pick.description }}</div>
            </div>
            <div class="flex-1"></div>
            <div class="w-full flex justify-between items-center">
              <img :src="$images.icons.fav_empty" class="cursor-pointer w-8" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'">
              <img @click="(isPlayingItem === pick.id) ? pauseMusic(pick.id):playMusic(pick.id)" :src="(isPlayingItem === pick.id) ? $images.icons.pause : $images.icons.play" class="cursor-pointer w-8 rounded-full bg-white p-1">

            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import picksForYou from 'src/constants/picksForYou'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { useGlobalStore } from 'stores/global-store'
import useGlobalEmitter from 'src/hooks/useGlobalEmitter'

const store = useGlobalStore()
const emitter = useGlobalEmitter()
const isPlayingItem = ref(0)

const slidesPerView = ref<number>(1.1)
const breakpoints = [768, 992]
const slidesPerViewValues = [1.1, 2.5, 3.5]

const resizeHandler = () => {
  const width = window.innerWidth
  const index = breakpoints.findIndex(bp => width < bp)
  slidesPerView.value = index === -1 ? slidesPerViewValues[slidesPerViewValues.length - 1] : slidesPerViewValues[index]
}

onMounted(() => {
  window.addEventListener('resize', resizeHandler)
  resizeHandler()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})

function playMusic (id: number) {
  isPlayingItem.value = id
  emitter.emit('playMusic', id)
}

function pauseMusic (id: number) {
  isPlayingItem.value = 0
  emitter.emit('pauseMusic', id)
}

emitter.on('pauseMusicFromPlayer', () => {
  isPlayingItem.value = 0
})
emitter.on('playMusicFromPlayer', (id: number) => {
  isPlayingItem.value = id
})
</script>

<style scoped lang="scss">

</style>
