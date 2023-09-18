<template>
  <div v-if="showPlayer" class="flex justify-between items-center h-14 w-full absolute p-2" style="top: -50px;background: #795930">
    <div class="flex items-center">
      <img :src="$images.images.pic5" class="w-8 h-8">
      <div class="flex-1 flex flex-col px-2">
        <div class="text-md text-bold">Psychedelic Switch </div>
        <div class="">Carly Rae Jepsen</div>
      </div>
    </div>
    <div class="flex-1 flex items-center justify-end space-x-2 px-2">
      <img class="cursor-pointer w-8" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" :src="$images.icons.close" @click="close">
      <img class="cursor-pointer w-8" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" :src="$images.icons.fav_empty">
      <img class="cursor-pointer w-8" :class="(store.themeMode === 'light') ? 'svg-dark':'svg-light'" :src="(isPlaying) ? $images.icons.player_pause : $images.icons.play"
           @click="(isPlaying) ? pauseMusic():playMusic()"
      >

    </div>
  </div>
</template>

<script setup lang="ts">
import useGlobalEmitter from 'src/hooks/useGlobalEmitter'
import { ref } from 'vue'
import { useGlobalStore } from 'stores/global-store'

const emitter = useGlobalEmitter()
const store = useGlobalStore()

const showPlayer = ref(false)
const isPlaying = ref(false)
const isPlayingItem = ref(0)

emitter.on('playMusic', (id: number) => {
  showPlayer.value = true
  isPlaying.value = true
  isPlayingItem.value = id
})
emitter.on('pauseMusic', (id: number) => {
  isPlaying.value = false
  isPlayingItem.value = id
})

function playMusic () {
  isPlaying.value = true
  emitter.emit('playMusicFromPlayer', isPlayingItem.value)
}

function pauseMusic () {
  isPlaying.value = false
  emitter.emit('pauseMusicFromPlayer', isPlayingItem.value)
}
function close () {
  isPlaying.value = false
  emitter.emit('pauseMusicFromPlayer', isPlayingItem.value)
  showPlayer.value = false
}
</script>

<style scoped lang="scss">

</style>
