import { Store } from 'vuex';
import { RootState } from './store';
import { Credentials } from 'google-auth-library';

declare module 'vue/types/vue' {
  interface BasicProfile {
    getEmail: () => string;
    getFamilyName: () => string;
    getGivenName: () => string;
    getImageUrl: () => string;
    getName: () => string;
  }

  interface AuthResponse {
    access_token: string;
    expires_at: number;
    expires_in: number;
    first_issued_at: number;
    id_token: string;
    idpId: 'google';
    login_hint: string;
    scope: string;
    token_type: string;
  }

  interface SignInResponse {
    getBasicProfile: () => BasicProfile;
    getAuthResponse: () => AuthResponse;
  }

  interface GoogleAuth {
    signIn: () => Promise<SignInResponse>;
    signOut: () => Promise<void>;
  }

  interface Vue {
    store: Store<RootState>;
    $gAuth: GoogleAuth;
  }
}
