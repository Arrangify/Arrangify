<template>
  12312
  <title-bar title="My Account"></title-bar>
  asdas
</template>

<script>
  import auth from '../auth'

  export default {

    name: 'MyAccount',
    methods: {

    },
    route: {
      // Check the users auth status before
      // allowing navigation to the route
      canActivate () {
        console.log(auth.user.authenticated)
        return true
      }
    },
    components: {
      'title-bar': require('./TitleBar.vue')
    },
    created () {
      console.log(1)
    }
  }
</script>

<style lang="scss" scoped>

</style>
