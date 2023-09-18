<template>
  <q-page class="flex w-screen h-screen space-y-4 overflow-scroll pb-24 p-2">
    <top-menu-section />
    <category-section />
    <musics-sections />
    <picked-for-you />
    <jump-back-section />
  </q-page>
</template>

<script setup lang="ts">
import CategorySection from 'components/CategorySection.vue'
import TopMenuSection from 'components/TopMenuSection.vue'
import MusicsSections from 'components/MusicsSections.vue'
import PickedForYou from 'components/PickedForYou.vue'
import JumpBackSection from 'components/JumpBackSection.vue'

</script>
