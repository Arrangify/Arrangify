<template>
  <div class="header__buttons">
    <div class="button is-info" @click="login()" v-if="!user.authenticated">Login</div>
    <div class="button is-info" @click="register()" v-if="!user.authenticated">Register</div>
    <div class="button is-info" @click="logout()" v-if="user.authenticated">Logout</div>
  </div>
  <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
    <footer>
      Footer
    </footer>

</template>

<script>
  import auth from '../auth'
  import {lock} from '../auth'
  import {router} from '../main'

  export default {
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

<style lang="scss">
  @import '../../node_modules/bulma/bulma/utilities/utilities.sass';
  @import '../../node_modules/bulma/bulma/config/variables.sass';
  @import '../../node_modules/bulma/bulma/config/generated-variables.sass';
  @import '../../node_modules/bulma/bulma/base/base.sass';
  @import '../../node_modules/bulma/bulma/elements/elements.sass';
  @import '../../node_modules/bulma/bulma/components/components.sass';
  @import '../../node_modules/bulma/bulma/layout/layout.sass';

  html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  }

  body {
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;
    flex: 1;
    flex-flow: wrap column;
    padding: 10px;
    background: url("https://pbs.twimg.com/media/Cd7ww62WoAAEzqX.jpg:large") no-repeat center;
    background-size: cover;
  }
  .header {
    &__buttons {
      z-index: 2;
      display: flex;
      justify-content: flex-end;
      .button {
        margin-left: 10px;
      }

    }
  }
</style>
