<template>
  <div class="intro">
    <div class="intro__action">
      <div class="button is-success is-large">
        Create Your Event
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  .intro {
    display: flex;
    flex: 1;
    z-index: 1;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: radial-gradient(center, ellipse cover,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%);
    }
    &__action {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: center;
      .button {
        background: #2c3e50;
      }
    }
  }
</style>
