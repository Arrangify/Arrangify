<template>
  <div id="wrapper">
    <div class="header">
      <div class="header__buttons">
        <div class="button is-info" @click="login()" v-if="!user.authenticated">Login</div>
        <div class="button is-info" @click="register()" v-if="!user.authenticated">Register</div>
        <div class="button is-info" @click="logout()" v-if="user.authenticated">Logout</div>
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
  import {routero} from '../main'

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
          routero.go('/my-account')
        })
      },
      login () {
        lock.show((err, profile, id_token) => {
          if (err) {

          }
          localStorage.setItem('profile', JSON.stringify(profile))
          localStorage.setItem('id_token', id_token)
          auth.checkAuth()
          routero.go('/my-account')
        })
      },
      logout () {
        auth.logout()
        routero.go('/')
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
    flex-flow: wrap row;
    padding: 10px;
    background: url("https://pbs.twimg.com/media/Cd7ww62WoAAEzqX.jpg:large") no-repeat center;
    background-size: cover;
  }
  .header {
    display: flex;
    flex: 1;
    &__buttons {
      z-index: 2;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      .button {
        margin-left: 10px;
      }

    }
  }
  footer {
    align-self: flex-end;
    margin: -10px;
    align-self: flex-end;
    flex-grow: 1;
    text-align: center;
    padding: 8px 0;
    background: #111;
    color: #fff;
  }
</style>
