<template>
  <div class="poc">
    <payment-slip v-for="slip in slips" :key="slip.id" :slip="slip" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '@/store';
import PaymentSlip from '@/components/PaymentSlip.vue';

const CodePocView = defineComponent({
  name: 'code-poc-view',
  components: { PaymentSlip },

  computed: {
    slips() {
      const store = useStore<RootState>();
      return store.state.paymentSlips.paymentSlips;
    },
  },
});

export default CodePocView;
</script>

<style lang="scss" scoped></style>
