
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "ec5f1052-a764-4c41-b8f2-c35022165e3b"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
