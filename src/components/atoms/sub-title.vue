<template>
  <p class="sub-title">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'SubTitle',
};
</script>

<style scoped>
.sub-title {
  color: var(--v-text-base);
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 13px;
}
</style>
