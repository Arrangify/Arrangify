<template>
  <div class="login">
    <input type="text" placeholder="Username" />
    <input type="password" />
    <input type="submit" value="Login" class="button button--action" />
  </div>
</template>

<script>
  import auth from '../auth'
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      getQuote() {
        this.$http
          .get('http://localhost:3001/api/protected/random-quote', (data) => {
          this.quote = data;
      }, {
          // Attach the JWT header
          headers: auth.getAuthHeader()
        })
      .error((err) => console.log(err))
      }
    },
    route: {
      // Check the users auth status before
      // allowing navigation to the route
      canActivate() {
        return auth.user.authenticated
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
