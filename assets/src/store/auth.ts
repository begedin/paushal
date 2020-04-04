import { ActionTree, MutationTree, Module } from 'vuex';
import { RootState } from '.';

export type AuthState = {
  authenticated: boolean;
  code: string | null;
  codeType: 'google' | null;
};

const newState = (): AuthState => ({
  authenticated: false,
  code: null,
  codeType: null,
});

const state = newState();

const actions: ActionTree<AuthState, RootState> = {};

const mutations: MutationTree<AuthState> = {};

export const auth: Module<AuthState, RootState> = {
  actions,
  mutations,
  namespaced: true,
  state,
};
