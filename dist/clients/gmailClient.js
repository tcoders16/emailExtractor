"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gmail = void 0;
const googleapis_1 = require("googleapis");
const env_1 = require("../config/env");
const oAuth2Client = new googleapis_1.google.auth.OAuth2(env_1.env.GMAIL_CLIENT_ID, env_1.env.GMAIL_CLIENT_SECRET, env_1.env.GMAIL_REDIRECT_URI);
oAuth2Client.setCredentials({
    access_token: env_1.env.GMAIL_ACCESS_TOKEN,
    refresh_token: env_1.env.GMAIL_REFRESH_TOKEN,
});
exports.gmail = googleapis_1.google.gmail({ version: 'v1', auth: oAuth2Client });
