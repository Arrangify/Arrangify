<template>
  <div id="wrapper" class="container-fluid">
    <div class="header col-xs-12">
      <div class="header__buttons">
        <div class="btn btn-default col-md-2 col-xs-4" @click="login()" v-if="!user.authenticated">Login</div>
        <div class="btn btn-default" @click="logout()" v-if="user.authenticated">Logout</div>
      </div>
    </div>
    <router-view
      keep-alive>
    </router-view>
  </div>
</template>

<script>
  import auth from '../auth'
  import {lock} from '../auth'
  import {router} from '../main'

  export default {
    name: 'App',
    data () {
      return {
        user: auth.user
      }
    },
    methods: {
      register () {
        lock.showSignup((err, profile, id_token) => {
          if (err) {

          }
          localStorage.setItem('profile', JSON.stringify(profile))
          localStorage.setItem('id_token', id_token)
          auth.checkAuth()
          router.go('/my-account')
        })
      },
      login () {
        lock.show((err, profile, id_token) => {
          if (err) {

          }
          localStorage.setItem('profile', JSON.stringify(profile))
          localStorage.setItem('id_token', id_token)
          auth.checkAuth()
          router.go('/my-account')
        })
      },
      logout () {
        auth.logout()
        router.go('/')
      }
    }
  }
</script>

<style lang="less">
  @import   "../../node_modules/bootstrap/less/bootstrap.less";
  @import   "../../node_modules/bootstrap/less/variables.less";
  @import   "../../node_modules/bootstrap/less/mixins.less";
  @import '../../node_modules/bootstrap/less/grid.less';
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    padding: 0;
    background: url("https://pbs.twimg.com/media/Cd7ww62WoAAEzqX.jpg:large") no-repeat center;
    background-size: cover;
  }

</style>
