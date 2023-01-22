<template>
  <h1>{{ title }}-{{ age }}</h1>
  <h1>{{ username }}-{{ mail }}</h1>
</template>
<script>
export default {
  name: "FirstComponent",
  props: ["title", "age"],
  inject: ["username", "mail"],
};
</script>
<style></style>
