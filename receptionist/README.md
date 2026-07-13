# AI Receptionist Build

This folder holds the actual AI voice agent implementation — everything that
is *not* the marketing website.

## Files

- **`home-services-receptionist-inbound.json`** — the public **template** for
  the Retell AI inbound receptionist agent: prompt, emergency-detection and
  transfer rules, and Cal.com booking tools. Every credential and
  business-specific value is a `[BRACKETED]` placeholder. This file is safe
  to share and is the one that gets committed.
- **`home-services-receptionist-inbound.LOCAL.json`** — the filled-in working
  copy with **real credentials** (Cal.com API key, transfer number, business
  details). It is **gitignored** (`*.LOCAL.json` in the repo `.gitignore`)
  and exists only on the machine that uses it. It will never appear in this
  public repo — if you can read this on GitHub, that file is not here.

## Working on this project?

Don't put real values into the template. Instead:

1. Copy `home-services-receptionist-inbound.json` to
   `home-services-receptionist-inbound.LOCAL.json` (the `.gitignore` already
   covers any `*.LOCAL.json`).
2. Fill in the `[BRACKETED]` placeholders in the **copy only**.
3. If you improve the prompt or structure, edit the template — with
   placeholders intact — and commit that.

## Still to come

- `n8n/` — workflow exports for the automation layer (calendar booking, CRM
  updates, team notifications, transcript delivery). The `[YOUR_WEBHOOK_URL]`
  placeholders in the agent config get filled once these exist.
- `prompts/` — reusable per-trade prompt variants as client builds start.

## Rules

- **Never commit secrets.** API keys, webhook URLs with tokens, and client
  phone numbers live only in `*.LOCAL.json` or `.env` files, both gitignored.
- Client-specific configs must be anonymized before any part of them is
  committed as a template.
