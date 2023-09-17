<template>
  <q-page class="flex flex-col w-full h-full space-y-4">

    <top-menu-section />
    <category-section />
    <musics-sections />
    <picked-for-you />
  </q-page>
</template>

<script setup lang="ts">
import CategorySection from 'components/CategorySection.vue'
import TopMenuSection from 'components/TopMenuSection.vue'
import MusicsSections from 'components/MusicsSections.vue'
import PickedForYou from 'components/PickedForYou.vue'

</script>
