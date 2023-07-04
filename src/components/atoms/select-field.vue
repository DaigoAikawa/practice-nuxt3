<template>
  <!-- NOTE: ラッパーコンポーネントを使用すると v-list がスコープ外になり Scoped CSS が当たりません -->
  <v-select
    v-model="modelValueSync"
    class="select-field pt-0 mt-0"
    hide-details="auto"
    :items="items"
    item-title="text"
    item-value="id"
    :disabled="isLoading"
    :rules="rules"
    :placeholder="placeholder"
    :no-data-text="noDataText"
    :menu-props="{ offsetY: true, nudgeBottom: 4, minWidth: menuWidth }"
    :clearable="isClearable"
    :return-object="isReturnObject"
    :attach="attach"
  />
</template>

<script>
import { VSelect } from 'vuetify/components/VSelect';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SelectField',

  components: {
    VSelect,
  },

  model: {
    prop: 'value',
    event: 'input',
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
    isLoading: {
      type: Boolean,
      required: true,
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
    value: {
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

  emits: ['input'],

  setup: (props, { emit }) => {
    const modelValueSync = computed({
      get: () => props.value,
      set: (newValue) => emit('input', newValue),
    });

    return { modelValueSync };
  },
});
</script>

<style scoped>
.v-input ::v-deep input {
  max-height: none;
  cursor: inherit;
}
.v-input ::v-deep .v-select__slot > .v-input__append-inner {
  align-self: unset;
  margin-top: 0px;
}
.v-input.v-text-field ::v-deep input::placeholder {
  color: var(--v-lightGray-base);
  font-weight: bold;
}
.v-input ::v-deep .v-input__control > .v-input__slot > .v-select__slot {
  height: 40px;
  border: 1px solid var(--v-border-base) !important;
  border-radius: 4px;
  padding: 0px 7px 0px 16px;
  background-color: var(--v-white-base);
}
.v-input
  ::v-deep
  .v-input__control
  > .v-input__slot
  > .v-select__slot
  > .v-select__selections {
  user-select: none;
}
.v-input ::v-deep .v-input__control > .v-input__slot:before,
.v-input ::v-deep .v-input__control > .v-input__slot:after {
  border-width: 0 !important;
}
.v-input.v-input--is-focused
  ::v-deep
  .v-input__control
  > .v-input__slot
  > .v-select__slot
  > .v-input__append-inner
  > .v-input__icon--clear
  > .v-icon {
  color: var(--v-gray-base) !important;
}
.v-input.v-input--is-focused
  ::v-deep
  .v-input__control
  > .v-input__slot
  > .v-select__slot {
  background-color: var(--v-focus-base);
}
.v-input.error--text
  ::v-deep
  .v-input__control
  > .v-input__slot
  > .v-select__slot {
  border: 2px solid var(--v-error-base) !important;
  border-radius: 4px;
}
.v-input ::v-deep i.v-icon.error--text,
.v-input ::v-deep .v-messages.error--text {
  color: var(--v-error-base) !important;
  caret-color: var(--v-error-base) !important;
  font-weight: bold;
}
.v-input.v-select.v-select--is-menu-active
  ::v-deep
  .v-input__icon--append
  .v-icon {
  transform: none !important;
}
.v-input ::v-deep .v-icon {
  color: var(--v-darkGray-base) !important;
}
.v-input
  ::v-deep
  .v-input__control
  > .v-input__slot
  > .v-select__slot
  > .v-select__selections,
.v-list ::v-deep .v-list-item .v-list-item__title {
  font-size: 14px;
  color: var(--v-text-base);
}
.v-list ::v-deep .v-list-item--active {
  color: var(--v-offWhite-base) !important;
  caret-color: var(--v-offWhite-base) !important;
  background-color: var(--v-offWhite-base) !important;
}
.v-input ::v-deep .v-menu__content {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.14),
    0px 4px 5px 0px rgba(0, 0, 0, 0.2), 0px 1px 10px 0px rgba(0, 0, 0, 0.2);
}
.v-list ::v-deep .v-list-item {
  margin: 0px 8px 0px;
  border-radius: 4px;
}
.v-list ::v-deep .v-list-item--link:before {
  border-radius: 4px;
}
</style>
