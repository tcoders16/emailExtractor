import { gmail } from "../clients/gmailClient";
import { notion } from "../clients/notionClient";
import { extractEmailData } from "../utils/extractEmailData";
import { env } from "../config/env";

export async function fetchAndLogSentEmails() {
  const res = await gmail.users.messages.list({
    userId: "me",
    labelIds: ["SENT"],
    maxResults: 5,
  });

  const messages = res.data.messages || [];

  for (const msg of messages) {
    const fullMsg = await gmail.users.messages.get({
      userId: "me",
      id: msg.id!,
    });

    const { to, subject, date, body } = extractEmailData(fullMsg.data.payload);

    await notion.pages.create({
      parent: { database_id: env.NOTION_DATABASE_ID },
      properties: {
        To: { title: [{ text: { content: to } }] },
        Subject: { rich_text: [{ text: { content: subject } }] },
        SentAt: { date: { start: new Date(date).toISOString() } },
      },
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [{ text: { content: body || "No body" } }],
          },
        },
      ],
    });
  }
}