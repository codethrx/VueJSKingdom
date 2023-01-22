<template>
  <!-- <Basics counter="0" /> -->
  <h1>{{ val }}</h1>
  <ComputedProps />
</template>
<script>
import Basics from "./components/Basics.vue";
import ComputedProps from "./components/ComputedProperties.vue";
export default {
  data() {
    return { val: "Hola" };
  },
  components: { Basics, ComputedProps },
  provide() {
    return {
      username: this.val,
      mail: "abc@gmail.com",
    };
  },
};
</script>
<style scoped></style>
