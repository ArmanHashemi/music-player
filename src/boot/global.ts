import { boot } from 'quasar/wrappers'
import 'swiper/css'
import Images from '../hooks/useAssets'
export default boot(({ app }) => {
// init globals here
  app.config.globalProperties.$images = Images
})
