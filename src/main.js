import vueApp from './vue'
import reactApp from './react'
import { registerApp } from './loader'

// vueApp.mount()
// reactApp.mount()

registerApp('reactapp', reactApp)
registerApp('vueapp', vueApp)

// const appList = []

// export default registerApp = (name, where, how) => {
//   console.log(`Loading: ${name}`)
//   vueApp
// }