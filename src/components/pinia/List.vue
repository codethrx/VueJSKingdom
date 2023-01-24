<template>
  <h1>Tasks...</h1>
  <p v-for="i in store.tasks" :key="i" @click="store.deleteItem(i)">{{ i }}</p>
</template>
<script>
import { useStore } from "../../pinia/store";
export default {
  setup() {
    const store = useStore();
    console.log(store.tasks);
    return { store };
  },
};
</script>
