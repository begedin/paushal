declare module 'vue3-google-auth' {
  import { Plugin } from 'vue';
  type CreateParams = {
    clientId: string;
    scope: string;
    prompt: string;
  };

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
    getAuthResponse: () => AuthResponse;
    getBasicProfile: () => BasicProfile;
  }

  interface GoogleAuth {
    signIn: () => Promise<SignInResponse>;
    signOut: () => Promise<void>;
  }

  interface GAuth {
    createGAuth: (params: CreateParams) => Plugin;
    useGAuth: () => GoogleAuth
  }

  const gauth: GAuth;

  export default gauth;
}
