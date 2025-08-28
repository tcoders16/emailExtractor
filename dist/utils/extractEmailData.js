"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractEmailData = extractEmailData;
function extractEmailData(payload) {
    const headers = payload?.headers || [];
    const to = headers.find((h) => h.name === 'To')?.value || 'unknown';
    const subject = headers.find((h) => h.name === 'Subject')?.value || 'No Subject';
    const date = headers.find((h) => h.name === 'Date')?.value || new Date().toISOString();
    const body = Buffer.from(payload?.parts?.[0]?.body?.data || '', 'base64').toString('utf-8');
    return { to, subject, date, body };
}
