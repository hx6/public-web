import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Comments from './views/Comments.vue'


Vue.use(Router)

export const routes = [
  { path: '/', component: Home,  },
  { path: '/login', component: Login},
  { path: '/register', component: Register},
  { path: '/comments', component: Comments },
  { path: '*', redirect: '/' }
]