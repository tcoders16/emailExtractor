import dotenv from 'dotenv';
dotenv.config();

export const env = {
  GMAIL_CLIENT_ID: process.env.GMAIL_CLIENT_ID!,
  GMAIL_CLIENT_SECRET: process.env.GMAIL_CLIENT_SECRET!,
  GMAIL_REDIRECT_URI: process.env.GMAIL_REDIRECT_URI!,
  GMAIL_ACCESS_TOKEN: process.env.GMAIL_ACCESS_TOKEN!,
  GMAIL_REFRESH_TOKEN: process.env.GMAIL_REFRESH_TOKEN!,
  NOTION_API_KEY: process.env.NOTION_API_KEY!,
  NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID!,
};
