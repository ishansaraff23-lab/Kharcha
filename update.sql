-- Kharcha update for labels, custom categories and scheduled payments.
-- Supabase → SQL Editor → New query → paste this → Run. Safe to run more than once; it only adds columns.
alter table public.txns     add column if not exists labels jsonb not null default '[]'::jsonb;
alter table public.settings add column if not exists prefs  jsonb not null default '{}'::jsonb;
notify pgrst, 'reload schema';
