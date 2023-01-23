<template>
  <slot name="header" />
  <h2>Card#{{ id }}</h2>
  <slot />
  <slot name="footer" />
</template>
<script>
export default {
  props: ["id"],
};
</script>
