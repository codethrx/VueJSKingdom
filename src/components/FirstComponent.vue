<template>
  <h1>{{ title }}-{{ age }}</h1>
</template>
<script>
export default {
  name: "FirstComponent",
  props: ["title", "age"],
};
</script>
<style></style>
