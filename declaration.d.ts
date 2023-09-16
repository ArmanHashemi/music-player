import 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $images: any
  }
}
