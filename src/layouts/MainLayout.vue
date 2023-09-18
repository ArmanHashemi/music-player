<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="p-2">
      <router-view />
    </q-page-container>
    <q-footer>
      <bottom-navigation />
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">

import BottomNavigation from 'components/BottomNavigation.vue'
</script>
