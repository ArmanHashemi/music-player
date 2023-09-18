<template>
  <div class="w-full flex grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 ">
    <div  v-for="(music, i) in musics" :key="i">
      <div @click="emitter.emit('playMusic',music.id)" v-ripple class="flex rounded-md shadow-xl bg-accent flex items-center relative-position cursor-pointer">
        <img :src="music.image" class="w-16">
        <div class="flex-1 px-2 text-reverse text-md text-bold">{{music.title}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import musics from 'src/constants/musics'
import useGlobalEmitter from 'src/hooks/useGlobalEmitter'
const emitter = useGlobalEmitter()
</script>

<style scoped lang="scss">

</style>
