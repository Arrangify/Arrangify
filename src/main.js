import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import IntroView from './components/Intro.vue'
import MyAccount from './components/MyAccount.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Router)

//  Router config
export var router = new Router()
import auth from './auth'
// Check the users auth status when the app starts
auth.checkAuth()

router.map({
  '/intro': {
    component: IntroView
  },
  '/my-account': {
    component: MyAccount
  }
})

router.beforeEach(function (tran) {
  console.log('user is', auth.user.authenticated ? ' ' : ' not ', 'authenticated')
  console.log('to is: ', tran.to.path)
  if (tran.to.path === '/my-account' && !auth.user.authenticated) {
    tran.redirect('/intro')
  } else if ((tran.to.path === '/intro' || tran.path === '/login') && auth.user.authenticated) {
    tran.redirect('/my-account')
  } else {
    tran.next()
  }

  window.scrollTo(0, 0)
})

//  Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/intro'
})

router.start(App, '#app')
