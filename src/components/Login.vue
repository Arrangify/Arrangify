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
    data () {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit () {
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }
        // We need to pass the component's this context
        // to properly make use of http in the auth service
        auth.login(this, credentials, 'secretquote')
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>
