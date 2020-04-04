<template>
  <div class="app">
    <payment-slip v-for="slip in slips" :key="slip.id" :slip="slip" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { PaymentSlipPayload } from './store/types';
import PaymentSlip from './components/PaymentSlip';

@Component({ name: 'app', components: { PaymentSlip } })
export default class App extends Vue {
  @State(state => state.paymentSlips.paymentSlips) 
  slips!: PaymentSlipPayload[]
}
</script>

<style lang="scss" scoped>
.app {
  color: red;
}
</style>