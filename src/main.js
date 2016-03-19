import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import IntroView from './components/Intro.vue'
import LoginView from './components/Login.vue'
import VueResource from 'vue-resource'
import auth from './auth'

Vue.use(VueResource)
Vue.use(Router)

// Check the users auth status when the app starts
auth.checkAuth()

//  Router config
export var router = new Router()

router.map({
  '/intro': {
    component: IntroView
  },
  '/login': {
    component: LoginView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

//  Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/intro'
})

router.start(App, '#app')
