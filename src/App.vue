<template>
  <!-- <h1>Vue basics.....{{ name }}</h1>
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
  </Card> -->
  <h1>Dynamic Components.</h1>
  <DynamicComponent />
</template>
<script>
import Card from "./slots/Card.vue";
import DynamicComponent from "./dynamicComponents/DynamicComponents.vue";
export default {
  data() {
    return {
      name: "",
    };
  },
  components: { Card, DynamicComponent },

  methods: {},
};
</script>
<style scoped></style>
