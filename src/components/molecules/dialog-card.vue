<template>
  <v-card variant="outlined">
    <slot name="title" />
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
import { VCard } from 'vuetify/components/VCard';
export default {
  name: 'DialogCard',
  components: {
    VCard,
  },
};
</script>

<style scoped>
.v-card {
  width: 480px;
  border-radius: 6px;
  border-width: 0;
  background-color: var(--v-white-base);
}
.v-card .v-card__text {
  padding: 28px 24px 28px 24px !important;
}
</style>
