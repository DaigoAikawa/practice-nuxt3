<template>
  <v-btn
    class="light text-white"
    elevation="0"
    :type="type"
    :width="width"
    :height="height"
    :disabled="!isFormInvalid"
    :loading="isLoading"
    :block="isBlock"
    :class="{ 'highlighting-disable': isHighlightingDisable }"
    @click="$emit('click')"
  >
    <template #default>
      <span class="mb-0">
        <slot />
      </span>
    </template>
  </v-btn>
</template>

<script>
import { VBtn } from 'vuetify/components/VBtn';

export default {
  name: 'BaseButton',

  components: {
    VBtn,
  },

  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
    },
    width: {
      type: String,
      required: false,
      default: 'undefined',
    },
    height: {
      type: String,
      required: false,
      default: '48',
    },
    isFormInvalid: {
      type: Boolean,
      required: false,
      default: false,
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    isHighlightingDisable: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBlock: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.v-btn {
  border-radius: 4px;
}
.v-btn span {
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
}
button.light.white--text.theme--light.v-btn.v-btn--disabled {
  color: var(--v-white-base) !important;
  background-color: #bce5dc !important;
  opacity: 1;
}
button.light.white--text.theme--light.v-btn.v-btn--disabled.highlighting-disable {
  color: var(--v-primaryVibrant-base) !important;
  background-color: #bce6dc !important;
  opacity: 1;
}
</style>
