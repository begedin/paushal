<template>
  <div class="slip">
    <h1>{{slip.receiver}}</h1>
    <img :src="dataURL" />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { generate2DBarcode } from '@/generator';
import { PaymentSlipPayload } from '@/store/types';

const generateQR = (slip: PaymentSlipPayload) => {
  return generate2DBarcode({
    Iznos: slip.amount.toString(),
    ImePlatitelja: slip.payer,
    AdresaPlatitelja: 'Fake',
    SjedistePlatitelja: 'Fake',
    Primatelj: slip.receiver,
    AdresaPrimatelja: 'Fake',
    SjedistePrimatelja: 'Fake',
    IBAN: slip.receiver_iban,
    ModelPlacanja: slip.receiver_model,
    PozivNaBroj: slip.receiver_reference_number || '',
    SifraNamjene: slip.purpose_code || '',
    OpisPlacanja: slip.payment_description,
  })['canvas']!;
};

@Component({ name: 'payment-slip' })
export default class PaymentSlip extends Vue {
  @Prop({ required: true }) slip!: PaymentSlipPayload;

  get dataURL() {
    return generateQR(this.slip).toDataURL()
  }
}
</script>
<style lang="scss" scoped>
.slip {
  color: red;

  img {
    width: 20em;
    height: auto;
  }
}
</style>