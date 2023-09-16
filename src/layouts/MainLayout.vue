<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-sticky class="z-30" position="bottom-right" :offset="[18, 18]">
      <theme-switch/>
    </q-page-sticky>
    <q-page-container class="p-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

import ThemeSwitch from 'components/ThemeSwitch.vue'
</script>
