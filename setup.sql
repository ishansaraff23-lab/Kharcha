-- Kharcha database setup. Paste all of this into Supabase → SQL Editor → New query, then click Run.
-- Every table uses row-level security: each signed-in user can only read and write their own rows.

create table if not exists public.txns (
  id          text primary key,
  user_id     uuid not null default auth.uid() references auth.users on delete cascade,
  type        text not null check (type in ('expense','income','transfer')),
  amt         numeric(14,2) not null check (amt > 0),
  cat         text,
  acct        text not null,
  to_acct     text,
  note        text not null default '',
  date        date not null,
  created_ms  bigint,
  updated_at  timestamptz not null,
  deleted     boolean not null default false,
  server_at   timestamptz not null default now()
);

create table if not exists public.budgets (
  user_id     uuid not null default auth.uid() references auth.users on delete cascade,
  ym          text not null,
  total       numeric(14,2) not null default 0,
  cats        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null,
  server_at   timestamptz not null default now(),
  primary key (user_id, ym)
);

create table if not exists public.settings (
  user_id     uuid primary key default auth.uid() references auth.users on delete cascade,
  accounts    jsonb not null,
  updated_at  timestamptz not null,
  server_at   timestamptz not null default now()
);

create index if not exists txns_user_server_at on public.txns (user_id, server_at);

-- server_at records when the server received each change, so other devices can fetch only what's new
create or replace function public.kharcha_touch() returns trigger language plpgsql as $$
begin new.server_at := now(); return new; end $$;

drop trigger if exists txns_touch on public.txns;
create trigger txns_touch before insert or update on public.txns for each row execute function public.kharcha_touch();
drop trigger if exists budgets_touch on public.budgets;
create trigger budgets_touch before insert or update on public.budgets for each row execute function public.kharcha_touch();
drop trigger if exists settings_touch on public.settings;
create trigger settings_touch before insert or update on public.settings for each row execute function public.kharcha_touch();

alter table public.txns     enable row level security;
alter table public.budgets  enable row level security;
alter table public.settings enable row level security;

drop policy if exists "own txns" on public.txns;
create policy "own txns" on public.txns for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists "own budgets" on public.budgets;
create policy "own budgets" on public.budgets for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists "own settings" on public.settings;
create policy "own settings" on public.settings for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
