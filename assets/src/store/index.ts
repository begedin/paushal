import Vuex, { Store } from 'vuex';
import { AuthState, auth } from './auth';
import { PaymentSlipsState, paymentSlips } from './paymentSlips';

export type RootState = {
  version?: string;
  auth: AuthState;
  paymentSlips: PaymentSlipsState;
};

export const createStore = (): Store<RootState> =>
  new Vuex.Store<RootState>({
    modules: {
      auth,
      paymentSlips,
    },
  });
