<template>
  <h1>State Management in View</h1>
  <router-link to="/about/123"> User </router-link>
  <Pinia />

  <router-view></router-view>
</template>
<script>
import Pinia from "./components/Pinia.vue";
export default {
  setup() {},
  components: { Pinia },
};
</script>
<style scoped></style>
