<template>
  {{ name }}
</template>
<script>
import { ref, reactive, toRefs } from "vue";
export default {
  //refs
  // setup() {
  //   const name = ref("Clark");
  //   setTimeout(() => (name.value = "Bruce"), 2000);
  //   return { name };
  // },
  //reactive
  setup() {
    const name = reactive({ name: "Clark" });
    setTimeout(() => (name.name = "Bruce"), 2000);
    return toRefs(name);
  },
};
</script>
<style scoped></style>
