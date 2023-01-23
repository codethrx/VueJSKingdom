<template>
  <button @click="tab = 'A'">A</button>
  <button @click="tab = 'B'">B</button>
  <keep-alive>
    <component :is="tab"></component>
  </keep-alive>

  <teleport to="#lol">Lol</teleport>
</template>
<script>
import A from "./A.vue";
import B from "./B.vue";
export default {
  name: "DynamicComponent",
  data() {
    return {
      tab: "A",
    };
  },
  components: { A, B },
};
</script>
