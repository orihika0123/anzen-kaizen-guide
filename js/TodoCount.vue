<template>
  <span id="todoCount">(全{{count}}件)</span>
</template>

<script lang="ts">
import Vue from "vue"
import store from "./Store"

export default Vue.extend({
  props: {
    count: { type: Number }
  }
})
</script>

<style scoped>
span {
  font-size: 0.8rem;
}
</style>
