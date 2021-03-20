import { createStore } from 'vuex';
import { AuthState, auth } from '@/store/auth';
import { PaymentSlipsState, paymentSlips } from '@/store/paymentSlips';

export type RootState = {
  version?: string;
  auth: AuthState;
  paymentSlips: PaymentSlipsState;
};

export const store = createStore<RootState>({
  modules: {
    auth,
    paymentSlips,
  },
});
