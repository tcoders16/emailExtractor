import { fetchAndLogSentEmails } from '../services/emailService';
import { Request, Response } from 'express';

export const runEmailSync = async (_req: Request, res: Response) => {
  try {
    await fetchAndLogSentEmails();
    res.status(200).json({ message: 'Synced emails to Notion.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to sync emails.' });
  }
};