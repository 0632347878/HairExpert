<template>
  <a href="https://t.me/annaivanskay">
    <span> {{ greetingMessage }} </span>
    <div class="liquid"></div>
  </a>
</template>

<script>
export default {
  name: "LiquidButton",
  props: {
    greetingMessage: String
  }
}
</script>

<style>
@import '../assets/scss/components/liquid-button.scss';
</style>
