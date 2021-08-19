<template>
  <div class="test">sample</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      str: "abc" as String
    }
  }
})
</script>


<style>
.test {
  color: black;
}
</style>
