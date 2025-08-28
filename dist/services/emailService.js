"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAndLogSentEmails = fetchAndLogSentEmails;
const gmailClient_1 = require("../clients/gmailClient");
const notionClient_1 = require("../clients/notionClient");
const extractEmailData_1 = require("../utils/extractEmailData");
const env_1 = require("../config/env");
async function fetchAndLogSentEmails() {
    const res = await gmailClient_1.gmail.users.messages.list({
        userId: "me",
        labelIds: ["SENT"],
        maxResults: 5,
    });
    const messages = res.data.messages || [];
    for (const msg of messages) {
        const fullMsg = await gmailClient_1.gmail.users.messages.get({
            userId: "me",
            id: msg.id,
        });
        const { to, subject, date, body } = (0, extractEmailData_1.extractEmailData)(fullMsg.data.payload);
        await notionClient_1.notion.pages.create({
            parent: { database_id: env_1.env.NOTION_DATABASE_ID },
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
