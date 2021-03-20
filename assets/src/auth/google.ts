import GAuth from 'vue3-google-auth';
const { createGAuth, useGAuth } = GAuth;

export const CLIENT_ID =
  '369380962042-4bri73mpdad3t9u89i5e44uj4cvrh1ta.apps.googleusercontent.com';
export const CLIENT_SECRET = 'h3lOeFwNCD49qCwCb4yVXKbS';

export const gAuth = createGAuth({
  clientId: CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account',
});

export { useGAuth };