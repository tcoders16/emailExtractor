import { google } from 'googleapis';
import { env } from '../config/env';

const oAuth2Client = new google.auth.OAuth2(
  env.GMAIL_CLIENT_ID,
  env.GMAIL_CLIENT_SECRET,
  env.GMAIL_REDIRECT_URI
);

oAuth2Client.setCredentials({
  access_token: env.GMAIL_ACCESS_TOKEN,
  refresh_token: env.GMAIL_REFRESH_TOKEN,
});

export const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
