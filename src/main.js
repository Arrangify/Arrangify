import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import IntroView from './components/Intro.vue'
import MyAccount from './components/MyAccount.vue'
import VueResource from 'vue-resource'
import auth from './auth'

Vue.use(VueResource)
Vue.use(Router)

// Check the users auth status when the app starts
auth.checkAuth()

//  Router config
var router = new Router()

console.log(IntroView)
console.log(MyAccount)

router.map({
  '/intro': {
    component: IntroView
  },
  '/my-account': {
    component: MyAccount
  }
})

router.beforeEach(function ({to, next}) {
  if (to.path === '/my-account') {
    if (!auth.user.authenticated) {
      router.go('/intro')
    }
  }
  if ((to.path === '/intro' || to.path === '/login') && auth.user.authenticated) {
    router.go('/my-account')
  }
  window.scrollTo(0, 0)
})

//  Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/intro'
})

router.start(App, '#app')

export var routero = router
