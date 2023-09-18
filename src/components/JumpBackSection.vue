<template>
  <div class="w-full overflow-hidden">
    <div class="my-4 w-full flex justify-between">
      <div class="text-bold text-xl">{{ $t('jumpBack') }}</div>
    </div>
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="10"
    >
      <swiper-slide class="relative-position" v-ripple>
        <img :src="$images.images.pic3">
      </swiper-slide>
      <swiper-slide class="relative-position" v-ripple>

        <img :src="$images.images.pic4">
      </swiper-slide>
      <swiper-slide class="relative-position" v-ripple>

        <img :src="$images.images.pic3">
      </swiper-slide>
      <swiper-slide class="relative-position" v-ripple>

        <img :src="$images.images.pic4">
      </swiper-slide>
      <swiper-slide class="relative-position" v-ripple>

        <img :src="$images.images.pic3">
      </swiper-slide>
      <swiper-slide class="relative-position" v-ripple>

        <img :src="$images.images.pic4">
      </swiper-slide>
      <swiper-slide class="relative-position" v-ripple>

        <img :src="$images.images.pic3">
      </swiper-slide>
      <swiper-slide class="relative-position" v-ripple>

        <img :src="$images.images.pic4">
      </swiper-slide>
    </swiper>

  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, onUnmounted, ref } from 'vue'

const slidesPerView = ref<number>(1.1)
const breakpoints = [768, 992]
const slidesPerViewValues = [3.5, 4.5, 6.5]

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

</script>

<style scoped lang="scss">

</style>
