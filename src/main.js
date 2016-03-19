import Vue from 'vue'
import App from './components/App'
import Intro from './components/Intro'
import Login from './components/Login'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import auth from './auth'

Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  components: { App }
})

// Check the users auth status when the app starts
auth.checkAuth()

//  Router config
export var router = new VueRouter()
router.start(App, '#app')

router.map({
  '/intro': {
    component: Intro
  },
  '/login': {
    component: Login
  }
})

//  Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/intro'
})
