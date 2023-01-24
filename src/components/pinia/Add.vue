<template>
  <h1>Add Item{{ val }}</h1>
  <input placeholder="Add" v-model="val" />
  <button :click="add(val)">Add</button>
</template>
<script>
import { useStore } from "../../pinia/store";
import { ref } from "vue";
export default {
  setup() {
    const { add } = useStore();
    const val = ref("");
    return { val, add };
  },
};
</script>
