<template>
  <div>
    <h2 @click="$emit('close')">Close</h2>
    <!-- <h2 @click="close">Close</h2> -->
  </div>
</template>
<script>
// import { emit } from "vue";
export default {
  //   props: ["close"],
  emit: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
