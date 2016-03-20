<template>
  Test
</template>

<script>
  import auth from '../auth'

  export default {
    data () {
      return {
        quote: ''
      }
    },
    methods: {

    },
    route: {
      // Check the users auth status before
      // allowing navigation to the route
      canActivate () {
        return auth.user.authenticated
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
