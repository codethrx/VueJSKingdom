<template>
  <h1>Tasks...</h1>
  <p v-for="i in tasks" :key="i">{{ i }}</p>
</template>
<script>
import { useStore } from "../../pinia/store";
export default {
  setup() {
    const store = useStore();
    console.log(store.tasks);
    return { tasks: store.tasks };
  },
};
</script>
