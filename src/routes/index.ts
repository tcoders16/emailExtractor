import express from 'express';
import { runEmailSync } from '../controllers/emailController';

const router = express.Router();

router.get('/sync-emails', runEmailSync);

export default router;