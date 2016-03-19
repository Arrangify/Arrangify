<template>
  <router-view
    class="view"
    keep-alive
    transition
    transition-mode="out-in">
  </router-view>
</template>

<script>
  import auth from '../auth'

  export default {
    data () {
      return {
        user: auth.user
      }
    },
    methods: {
      logout () {
        auth.logout()
      }
    }
  }
</script>

<style lang="scss">
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
  }
  #app {
    display: flex;
    height: 100%;
    flex: 1;
  }
  .button {
    padding: 5px 15px;
    color: #fff;
    cursor: pointer;
    &--primary {
      background: #3498db;
    }
    &--danger {
      background: #c0392b;
    }
    &--action {
      background: #34495e;
     }
    &--large {
      padding: 15px 30px;
      font-size: 20px;
    }
  }
</style>
