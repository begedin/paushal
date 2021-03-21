/* global process */

import GAuth from 'vue3-google-auth';
const { createGAuth, useGAuth } = GAuth;

export const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

if (!CLIENT_ID) {
  throw new Error('Google Client ID not available');
}


export const gAuth = createGAuth({
  clientId: CLIENT_ID || '',
  scope: 'profile email',
  prompt: 'select_account',
});

export { useGAuth };
