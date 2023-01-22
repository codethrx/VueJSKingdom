<template>
  <!-- <Basics counter="0" /> -->
  <h1>{{ val }}</h1>
  <!-- <ComputedProps /> -->
  <button @click="pop = true">Open</button>
  <Popup v-show="pop" @close="closePop" />
</template>
<script>
import Basics from "./components/Basics.vue";
import Popup from "./components/Popup.vue";
import ComputedProps from "./components/ComputedProperties.vue";
console.log();
export default {
  data() {
    return { val: "Hola", pop: false };
  },
  components: { Basics, ComputedProps, Popup },
  provide() {
    return {
      username: this.val,
      mail: "abc@gmail.com",
    };
  },
  methods: {
    closePop() {
      this.pop = false;
      console.log("Clickd");
    },
  },
};
</script>
<style scoped></style>
