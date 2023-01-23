<template>
  <h1>Vue basics.....{{ name }}</h1>
  <Card :id="1">
    <p>Hi</p>
    <p>Hi............</p>
  </Card>
  <Card :id="2">
    <h4>Be bold change the game XD</h4>
  </Card>
  <Card>
    <template v-slot:header>Header</template>
    Content
    <template v-slot:footer>Footer</template>
  </Card>
</template>
<script>
import Card from "./slots/Card.vue";
export default {
  data() {
    return {
      name: "",
    };
  },
  components: { Card },

  methods: {},
};
</script>
<style scoped></style>
