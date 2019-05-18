// This is where it all goes :)
import Vue from 'vue'
import App from './components/App.vue'
import ContentfulVue from 'contentful-vue';

Vue.config.productionTip = false

console.log("process", process.env)
Vue.use(ContentfulVue, {
  space: process.env.SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_API || ""
});

new Vue({
  el: '#application-container',
  template: '<App/>',
  components: { App }
})