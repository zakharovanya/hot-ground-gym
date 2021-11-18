import Vue from 'vue'
import ExampleModule from './example-module.vue'

new Vue({
  render: (h) => h(ExampleModule)
}).$mount('#example-vue-module')
