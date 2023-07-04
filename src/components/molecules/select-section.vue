<template>
  <div class="select-section" :class="{ section__flex: isFlex }">
    <label-title class="mb-1" :is-required="isRequired">
      {{ label }}
    </label-title>
    <select-field
      :attach="attach"
      :is-loading="isLoading"
      :is-clearable="isClearable"
      :is-return-object="isReturnObject"
      :items="items"
      :placeholder="placeholder"
      :no-data-text="noDataText"
      :rules="rules"
      :value="modelValue"
      :menu-width="menuWidth"
      @input="$emit('update:model-value', $event)"
      @focus="$emit('focus', $event)"
    />
  </div>
</template>

<script>
import LabelTitle from '@/components/atoms/label-title.vue';
import SelectField from '@/components/atoms/select-field.vue';

export default {
  name: 'SelectSection',
  components: {
    LabelTitle,
    SelectField,
  },
  model: {
    prop: 'modelValue',
    event: 'update:model-value',
  },
  props: {
    attach: {
      type: [String, Boolean],
      required: false,
      default: '',
    },
    isClearable: {
      type: Boolean,
      required: false,
      default: false,
    },
    isFlex: {
      type: Boolean,
      required: false,
      default: false,
    },
    isLoading: {
      type: Boolean,
      required: true,
      default: false,
    },
    isRequired: {
      type: Boolean,
      required: false,
      default: false,
    },
    isReturnObject: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    noDataText: {
      type: String,
      required: false,
      default: '$vuetify.noDataText',
    },
    rules: {
      type: Array,
      required: false,
      default: () => [],
    },
    modelValue: {
      type: [String, Object],
      required: false,
      default: '',
    },
    menuWidth: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.section__flex {
  display: flex;
  justify-content: space-between;
  padding: 0 10px 5px 0;
}
.section__flex > p {
  padding: 10px 8px 0 0;
}
</style>
