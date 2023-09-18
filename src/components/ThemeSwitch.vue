<template>
  <q-toggle
    keep-color
    v-model="theme"
    @update:model-value="changeTheme"
    checked-icon="dark_mode"
    icon-color="primary"
    color="reverse"
    unchecked-icon="light_mode"
  />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import useTheme from 'src/hooks/useTheme'

const { changeTheme } = useTheme()
const q = useQuasar()
const theme = ref(q.localStorage.getItem('theme') === 'dark')
</script>

<style scoped lang="scss">
</style>
