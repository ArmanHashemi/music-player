import { getCurrentInstance } from 'vue'

export default function useGlobalEmitter () {
  const internalInstance = getCurrentInstance()
  return internalInstance!.appContext.config.globalProperties.$emitter
}
