import { boot } from 'quasar/wrappers'
import 'swiper/css'
import Images from '../hooks/useAssets'
import mitt from 'mitt'
const emitter = mitt()
export default boot(({ app }) => {
// init globals here
  app.config.globalProperties.$images = Images
  app.config.globalProperties.$emitter = emitter
})
