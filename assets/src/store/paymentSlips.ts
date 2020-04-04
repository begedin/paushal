import { ActionTree, MutationTree, Module } from 'vuex';
import { PaymentSlipPayload } from './types';
import { RootState } from '.';

export type PaymentSlipsState = {
  paymentSlips: PaymentSlipPayload[];
};

const newState = (): PaymentSlipsState => ({
  paymentSlips: [
    {
      id: 1,
      receiver: 'Ivan Horvat',
      amount: 100.5,
      date_of_execution: null,
      payer: 'Marko Horvat',
      payer_iban: null,
      payment_description: 'Test',
      receiver_model: 'HR01',
      receiver_reference_number: '123456789',
      receiver_iban: 'HR24123456',
      purpose_code: null,
    },
    {
      id: 2,
      receiver: 'Stjepan Horvat',
      amount: 1020.5,
      date_of_execution: null,
      payer: 'Marko Horvat',
      payer_iban: null,
      payment_description: 'Test',
      receiver_model: 'HR01',
      receiver_reference_number: '123456789',
      receiver_iban: 'HR24123456',
      purpose_code: null,
    },
  ],
});

const state = newState();

const actions: ActionTree<PaymentSlipsState, RootState> = {};

const mutations: MutationTree<PaymentSlipsState> = {};

export const paymentSlips: Module<PaymentSlipsState, RootState> = {
  actions,
  mutations,
  namespaced: true,
  state,
};
