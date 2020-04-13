<template>
  <div class="poc">
    <payment-slip v-for="slip in slips" :key="slip.id" :slip="slip" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { PaymentSlipPayload } from '../store/types';
import PaymentSlip from '../components/PaymentSlip.vue';

@Component({ name: 'code-poc-view', components: { PaymentSlip } })
export default class CodePocView extends Vue {
  @State((state) => state.paymentSlips.paymentSlips)
  slips!: PaymentSlipPayload[];
}
</script>

<style lang="scss" scoped>
</style>