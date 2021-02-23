<template>
  <div v-if="signedIn">
    <img :src="credentials.image" referrerpolicy="no-referrer" />
    <div>{{ credentials.name }}</div>
    <div>{{ credentials.email }}</div>
  </div>
  <button v-else class="" @click="signIn">Sign IN</button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

enum ErrorCodes {
  /** Indicates lack of access to specified scopes */
  AccessDenied = 'access_denied',
  /** Indicates siging failed when prompt was set to none */
  ImmediateFailed = 'immediate_failed',
  /** Indicates popup to select account was closed by user, without making a selection */
  PopupClosedByUser = 'popup_closed_by_user',
}

@Component({ name: 'google-auth' })
export default class GoogleAuth extends Vue {
  credentials: {
    accessToken: string;
    email: string;
    image: string;
    name: string;
  } | null = null;

  get signedIn(): boolean {
    return !!this.credentials;
  }

  created() {
    const credentialsStr = localStorage.getItem('credentials-google');
    if (!credentialsStr) return;

    this.credentials = JSON.parse(credentialsStr);
  }

  async signIn() {
    const googleUser = await this.$gAuth.signIn();
    const profile = googleUser.getBasicProfile();

    const name = profile.getName();
    const email = profile.getEmail();
    const image = profile.getImageUrl();
    const accessToken = googleUser.getAuthResponse().access_token;

    this.credentials = { name, email, image, accessToken };
    localStorage.setItem(
      'credentials-google',
      JSON.stringify(this.credentials)
    );
  }
}
</script>

<style lang="scss" scoped>
</style>