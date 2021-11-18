import '../styles/index.scss'

import './core/voice'
import './core/lazy-load'
import './components'

const exampleVueModule = document.getElementById('example-vue-module')
if (exampleVueModule) {
  import(
    /* webpackChunkName: "example-module" */ './vue/modules/_example-module'
  )
}
