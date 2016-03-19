<template>
  <div class="intro">
    <div class="intro__buttons">
      <div class="button button--primary" v-link="{ path: '/login' }">Login</div>
      <div class="button button--primary">Register</div>
    </div>
    <div class="intro__action">
      <div class="button button--action button--large">
        Create Your Event
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .intro {
    display: flex;
    flex: 1;
    height: 100%;
    flex-flow: wrap column;
    padding: 10px;
    &__buttons {
      display: flex;
      justify-content: flex-end;
      .button {
        margin-left: 1px;
      }
    }
    &__action {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: center;
    }
  }
</style>
