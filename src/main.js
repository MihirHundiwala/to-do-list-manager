import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import store from './stores/store'
import ToDo from './components/ToDo'
import MyTasks from './components/MyTasks'

const routes = [
  {
    path: "/",
    component: ToDo,
    name: 'ToDo',
    children: [
      {
        path: "/list/:id",
        components: { MyTasks: MyTasks},
        name: 'MyTasks',
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'hash',
  routes: routes,
  base: '/'
})

Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')