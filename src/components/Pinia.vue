<template>
  <h1>{{ store.title }}</h1>
  <Add />
  <List />
</template>
<script>
import { useStore } from "../pinia/store";
import List from "./pinia/List.vue";
import Add from "./pinia/Add.vue";
export default {
  components: { List, Add },
  setup() {
    const store = useStore();
    console.log(store);
    return { store };
  },
};
</script>
