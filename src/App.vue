<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useTheme from 'src/hooks/useTheme'
const { loadAppTheme } = useTheme()

onMounted(() => {
  loadAppTheme()
})
</script>
