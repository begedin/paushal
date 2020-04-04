import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { PaymentSlip } from './store/types';

@Component({ name: 'app' })
export default class App extends Vue {
  @State((state) => state.paymentSlips.paymentSlips)
  paymentSlips!: PaymentSlip[];
  render() {
    return (
      <div class="app">
        {this.paymentSlips.map((p) => (
          <div>{p.receiver}</div>
        ))}
      </div>
    );
  }
}
