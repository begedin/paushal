<template>
  <div v-if="!!state.credentials">
    {{JSON.stringify(state.credentials)}}
    <img :src="state.credentials.image" referrerpolicy="no-referrer" />
    <div>{{ state.credentials.name }}</div>
    <div>{{ state.credentials.email }}</div>
  </div>
  <button v-else class="" @click="signIn">Sign IN</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useGAuth } from '@/auth/google';

// enum ErrorCodes {
//   /** Indicates lack of access to specified scopes */
//   AccessDenied = 'access_denied',
//   /** Indicates siging failed when prompt was set to none */
//   ImmediateFailed = 'immediate_failed',
//   /**
//    * Indicates popup to select account was closed by user,
//    * without making a selection
//    */
//   PopupClosedByUser = 'popup_closed_by_user',
// }

type Credentials = {
  accessToken: string;
  email: string;
  image: string;
  name: string;
};

const GoogleAuth = defineComponent({
  name: 'google-auth',

 setup() {
    const credentialsStr = localStorage.getItem('credentials-google');

    const state = reactive({
      credentials: credentialsStr
        ? reactive<Credentials>(JSON.parse(credentialsStr))
        : null,
    });

    const gAuth = useGAuth();

    const signIn = async () => {
      const googleUser = await gAuth.signIn();
      const profile = googleUser.getBasicProfile();

      state.credentials = {
        accessToken: googleUser.getAuthResponse().access_token,
        name: profile.getName(),
        email: profile.getEmail(),
        image: profile.getImageUrl(),
      };

      localStorage.setItem(
        'credentials-google',
        JSON.stringify(state.credentials)
      );
    };

    return { gAuth, signIn, state };
  },
});

export default GoogleAuth;
</script>

<style lang="scss" scoped></style>
