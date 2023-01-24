<template>
  <h1>View -- {{ store.state.name + " - " + store.state.username }}</h1>
  <button @click="store.changeName()">Toggle</button>
</template>
<script>
import { inject } from "vue";

export default {
  setup() {
    const store = inject("store");
    return { store };
  },
};
</script>
