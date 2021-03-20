import GAuth from 'vue3-google-auth';
const { createGAuth, useGAuth } = GAuth;

export const CLIENT_ID =
  '***REMOVED***';
export const CLIENT_SECRET = '***REMOVED***';

export const gAuth = createGAuth({
  clientId: CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account',
});

export { useGAuth };