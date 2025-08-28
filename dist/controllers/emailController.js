"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEmailSync = void 0;
const emailService_1 = require("../services/emailService");
const runEmailSync = async (_req, res) => {
    try {
        await (0, emailService_1.fetchAndLogSentEmails)();
        res.status(200).json({ message: 'Synced emails to Notion.' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to sync emails.' });
    }
};
exports.runEmailSync = runEmailSync;
