# EmailExtractor

A small Node.js + TypeScript service that extracts email data and integrates with external services like Gmail and Notion. Built with Express and scheduled jobs via cron.

## Features
- Extracts email data via Google APIs
- Pushes structured data to Notion using `@notionhq/client`
- Express HTTP server for health and hooks
- Cron-based scheduling with `node-cron`

## Prerequisites
- Node.js 18+
- A Google Cloud project with Gmail API access (if using Gmail)
- A Notion integration with a database/page target

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create environment file based on your current `.env` (not committed). Example:
   ```env
   # Server
   PORT=3000

   # Google
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   GOOGLE_REDIRECT_URI=
   GOOGLE_REFRESH_TOKEN=

   # Notion
   NOTION_TOKEN=
   NOTION_DATABASE_ID=
   ```
3. Build TypeScript:
   ```bash
   npx tsc
   ```
4. Run (development with ts-node):
   ```bash
   npx ts-node src/server.ts
   ```
   Or run the built output:
   ```bash
   node dist/server.js
   ```

## Scripts
Currently only the default test placeholder is defined. Common additions you may want:
```json
{
  "scripts": {
    "dev": "ts-node src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

## Project Structure
```
src/
  clients/        # API clients (Gmail, Notion)
  controllers/    # Express route handlers
  routes/         # Express routes
  services/       # Core business logic
  utils/          # Helpers (e.g., email parsing)
  server.ts       # App entry
```

## Development Notes
- TypeScript compiles from `src` to `dist` (see `tsconfig.json`).
- `node_modules`, `dist`, and env files are ignored via `.gitignore`.
- To avoid committing secrets, use `.env.example` for placeholders.

## Troubleshooting
- If `node_modules` or `dist` were committed previously, run:
  ```bash
  git rm -r --cached node_modules dist
  git commit -m "Remove node_modules and dist from repo; update .gitignore"
  git push
  ```
- If Google APIs fail, verify credentials and refresh token scopes.
- For Notion errors, ensure the integration has access to the target database.

## License
ISC

