# AI Receptionist Build

This folder holds the actual AI voice agent implementation — everything that
is *not* the marketing website. Empty for now; structured ahead of time so
the repo stays organized when this work starts.

## What will live here

- `prompts/` — system prompts and conversation scripts for the receptionist
  (greeting, emergency detection, booking flow, transfer rules), versioned
  per client or as reusable templates.
- `retell/` — Retell AI agent configurations (voice settings, LLM settings,
  webhook endpoints) exported as JSON.
- `n8n/` — n8n workflow exports (JSON) for the automation layer: calendar
  booking, CRM updates, team notifications, transcript delivery.
- `docs/` — internal build notes: how a client build is scoped, tested, and
  launched.

## Rules

- **Never commit secrets.** API keys, webhook URLs with tokens, and client
  phone numbers belong in environment variables or a local `.env` file
  (already covered by the repo `.gitignore`) — not in exported configs.
  Scrub exports before committing.
- Client-specific configs should be anonymized or kept out of this public
  repo entirely if they contain real business data.
