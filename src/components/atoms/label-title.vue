<template>
  <p class="label-title" :class="{ required: isRequired }">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'LabelTitle',
  props: {
    isRequired: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.label-title {
  color: var(--v-text-base);
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  margin-bottom: 0;
}
.label-title.required:after {
  content: '*';
  color: var(--v-secondary-base);
  padding-left: 4px;
}
</style>
