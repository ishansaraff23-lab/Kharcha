/* Kharcha — personal expense tracker (PWA + Supabase sync) */
const ICONS = window.ICONS || {};
const ic = (n, cls='i') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||ICONS.CircleEllipsis||''}</svg>`;

/* ---------- built-in categories ---------- */
const BASE = [
  ['food','Food & Drink','Utensils','#EF8B3A','expense'],
  ['groceries','Groceries','ShoppingBasket','#E2A564','expense'],
  ['bills','Bills & Fees','Receipt','#3FBFA4','expense'],
  ['rent','Rent','House','#D0600E','expense'],
  ['transport','Transport','TramFront','#D9B01E','expense'],
  ['car','Car & Fuel','Car','#4F9FE0','expense'],
  ['shopping','Shopping','ShoppingBag','#D35FD0','expense'],
  ['family','Family & Personal','UserRound','#3E9BE0','expense'],
  ['home','Home','Sofa','#B08B53','expense'],
  ['health','Healthcare','HeartPulse','#E2536A','expense'],
  ['entertainment','Entertainment','Drama','#F0A12E','expense'],
  ['travel','Travel','Plane','#EC5487','expense'],
  ['gifts','Gifts','Gift','#26A862','expense'],
  ['beauty','Beauty','Flower2','#8A57D6','expense'],
  ['education','Education','GraduationCap','#3C78B5','expense'],
  ['fitness','Fitness','Dumbbell','#E4572E','expense'],
  ['sport','Sport & Hobbies','Trophy','#2FB0C6','expense'],
  ['insurance','Insurance','ShieldCheck','#72B83A','expense'],
  ['invest','Investments','PiggyBank','#2E9A6A','expense'],
  ['work','Work','Briefcase','#687A90','expense'],
  ['misc','Misc','Shapes','#9B7FB8','expense'],
  ['other','Other','CircleEllipsis','#8F989F','expense'],
  ['salary','Salary','Wallet','#14A870','income'],
  ['business','Business','Store','#2A9D8F','income'],
  ['interest','Interest & Dividends','Percent','#4C9F70','income'],
  ['giftin','Gifts received','Gift','#6DBB6F','income'],
  ['refund','Refunds','RotateCcw','#4F97CF','income'],
  ['otherin','Other income','CirclePlus','#86A96E','income'],
];
const PICK_ICONS = ['Utensils','Coffee','Pizza','Sandwich','Salad','IceCreamCone','Cake','Beer','Wine','Martini','ShoppingBasket','Apple','Fish','ShoppingBag','Shirt','Gem','Glasses','Scissors','Flower2',
  'House','Sofa','BedDouble','Hotel','Key','Wrench','Hammer','Plug','Zap','Droplet','Flame','Wifi','Phone','Smartphone','Laptop','Tv','Monitor','Headphones','Camera',
  'Car','Fuel','Bus','TrainFront','TramFront','Bike','Truck','Ship','Plane','Globe','Mountain','Tent','Umbrella','Footprints',
  'HeartPulse','Pill','Stethoscope','Dumbbell','Trophy','Gamepad2','Music','Film','Popcorn','Ticket','Drama','BookOpen','Newspaper','GraduationCap','Palette','Sprout','Leaf',
  'Baby','UserRound','Dog','Cat','PawPrint','Gift','Heart','HandHeart','Church','Cigarette',
  'Receipt','Wallet','Banknote','Coins','CircleDollarSign','IndianRupee','HandCoins','PiggyBank','Landmark','Building2','Briefcase','Store','Percent','ChartLine','TrendingUp','Bitcoin','ShieldCheck','Package','Shapes','Sparkles','Tag','CircleEllipsis'];
const PALETTE = ['#EF8B3A','#D0600E','#E2536A','#EC5487','#D35FD0','#8A57D6','#5B6CE0','#3E9BE0','#2FB0C6','#3FBFA4','#14A870','#72B83A','#D9B01E','#B08B53','#687A90','#8F989F'];
const ACC_ICON = {cash:'Banknote',bank:'Landmark',card:'CreditCard',wallet:'Smartphone'};
const ACC_KIND = {cash:'Cash',bank:'Bank account',card:'Credit card',wallet:'UPI / wallet'};
const DEFAULT_ACCOUNTS = [
  {id:'bank',name:'Bank account',kind:'bank',opening:0},
  {id:'cash',name:'Cash',kind:'cash',opening:0},
  {id:'card',name:'Credit card',kind:'card',opening:0},
];
const FREQ = {daily:'Daily',weekly:'Weekly',monthly:'Monthly',yearly:'Yearly'};

/* ---------- helpers ---------- */
const pad = n => String(n).padStart(2,'0');
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const parseD = s => { const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d); };
const todayS = () => ymd(new Date());
const curYM = () => todayS().slice(0,7);
const addMonth = (ym,k) => { const [y,m]=ym.split('-').map(Number); const d=new Date(y,m-1+k,1); return `${d.getFullYear()}-${pad(d.getMonth()+1)}`; };
const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTHS_L=['January','February','March','April','May','June','July','August','September','October','November','December'];
const WD=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const ymLabel = ym => { const [y,m]=ym.split('-').map(Number); return `${MONTHS[m-1]} ${y}`; };
const ymLong = ym => MONTHS_L[Number(ym.slice(5))-1];
const daysIn = ym => { const [y,m]=ym.split('-').map(Number); return new Date(y,m,0).getDate(); };
const yest = () => { const y=new Date(); y.setDate(y.getDate()-1); return ymd(y); };
const dayLabel = s => { if(s===todayS()) return 'Today'; if(s===yest()) return 'Yesterday'; const d=parseD(s); return `${WD[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}${d.getFullYear()!==new Date().getFullYear()?' '+d.getFullYear():''}`; };
const shortDay = s => { if(s===todayS()) return 'Today'; if(s===yest()) return 'Yesterday'; const d=parseD(s); return `${d.getDate()} ${MONTHS[d.getMonth()]}${d.getFullYear()!==new Date().getFullYear()?' '+d.getFullYear():''}`; };
const nf = new Intl.NumberFormat('en-IN',{maximumFractionDigits:2});
const money = n => '₹' + nf.format(Math.abs(Math.round(n*100)/100));
const smoney = n => (n<0?'−':'') + money(n);
const kfmt = n => { n=Math.round(n); if(n<1000) return String(n); if(n<100000) return (n/1000).toFixed(n<10000?1:0).replace(/\.0$/,'')+'k'; return (n/100000).toFixed(1).replace(/\.0$/,'')+'L'; };
const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clone = o => JSON.parse(JSON.stringify(o||{}));
const rid = p => p + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
const newId = () => rid('t');
const num = v => { const n=parseFloat(String(v??'').replace(/[,₹\s]/g,'')); return isFinite(n)?n:0; };
const store = { get(k){ try{return localStorage.getItem(k)}catch(e){return null} }, set(k,v){ try{ v==null?localStorage.removeItem(k):localStorage.setItem(k,v)}catch(e){} } };
const cleanLabel = s => String(s||'').trim().replace(/^#+/,'').replace(/\s+/g,' ').slice(0,24);

/* ---------- state ---------- */
const S = {
  mode:'loading',          // loading | auth | ready | nocfg
  months:{}, settings:null,
  tab: (['home','calendar','overview','budgets','more'].includes(store.get('k_tab'))? store.get('k_tab') : 'home'),
  ym: curYM(), calDay: todayS(), ovType:'expense', ovPeriod:'month', acct:null,
  sync:{state:'idle', at:null, err:null},
  authMsg:'', authBusy:false, authMode:'signin', email:'',
  locked:false,
};
const CFG = window.KHARCHA_CONFIG || {};
let SB=null, UID=null, L=null, CAT={};

/* ---------- categories ---------- */
const prefs = () => (L && L.prefs) || {};
function buildCats(){
  const P=prefs(), edits=P.catEdits||{}, custom=P.customCats||[];
  CAT={};
  BASE.forEach(([id,name,icon,c,type],i)=>{ CAT[id]=Object.assign({id,name,icon,c,type,builtin:true,hidden:false,ord:i}, edits[id]||{}); });
  custom.forEach((x,i)=>{ CAT[x.id]=Object.assign({hidden:false}, x, {builtin:false, ord:100+i}); });
}
const catOf = id => id==='__transfer' ? {id,name:'Transfer',icon:'ArrowLeftRight',c:'#7C8A93'} : (CAT[id] || {id,name:'Deleted category',icon:'CircleEllipsis',c:'#8F989F',type:'expense'});
const catsOf = (type, includeHidden) => Object.values(CAT).filter(c=>c.type===type && (includeHidden||!c.hidden)).sort((a,b)=>a.ord-b.ord);

/* ---------- derived data ---------- */
const accounts = () => (S.settings && Array.isArray(S.settings.accounts) && S.settings.accounts.length) ? S.settings.accounts : DEFAULT_ACCOUNTS;
const accById = id => accounts().find(a=>a.id===id) || {id, name:'Deleted account', kind:'bank', opening:0};
const sortTx = (a,b)=> b.date.localeCompare(a.date) || (b.at||0)-(a.at||0);
const txnsOf = ym => Object.values((S.months[ym]&&S.months[ym].txns)||{}).sort(sortTx);
const allTxns = () => Object.keys(S.months).flatMap(k=>txnsOf(k)).sort(sortTx);
const acctFilter = list => S.acct ? list.filter(t=>t.acct===S.acct||t.to===S.acct) : list;
const viewTxns = ym => acctFilter(txnsOf(ym));
const yearTxns = y => acctFilter(Object.keys(S.months).filter(k=>k.startsWith(y+'-')).flatMap(k=>txnsOf(k)));
function totals(list){ let exp=0, inc=0; for(const t of list){ if(t.type==='expense') exp+=t.amt; else if(t.type==='income') inc+=t.amt; } return {exp,inc,net:inc-exp}; }
function byCat(list,type){ const m={}; for(const t of list) if(t.type===type) m[t.cat]=(m[t.cat]||0)+t.amt; return m; }
function budgetFor(ym){
  if(S.months[ym] && S.months[ym].budget) return {b:S.months[ym].budget, from:ym, inherited:false};
  const earlier = Object.keys(S.months).filter(k=>k<ym && S.months[k].budget).sort().pop();
  if(earlier) return {b:S.months[earlier].budget, from:earlier, inherited:true};
  return null;
}
function balances(){
  const bal={}; accounts().forEach(a=>bal[a.id]=Number(a.opening)||0);
  const t0=todayS();
  for(const t of allTxns()){
    if(t.date>t0) continue;
    if(t.type==='expense') bal[t.acct]=(bal[t.acct]||0)-t.amt;
    else if(t.type==='income') bal[t.acct]=(bal[t.acct]||0)+t.amt;
    else { bal[t.acct]=(bal[t.acct]||0)-t.amt; bal[t.to]=(bal[t.to]||0)+t.amt; }
  }
  return bal;
}
function allLabels(){ const s=new Set(); for(const t of allTxns()) (t.labels||[]).forEach(l=>s.add(l)); (prefs().recurring||[]).forEach(r=>(r.labels||[]).forEach(l=>s.add(l))); return [...s].sort((a,b)=>a.localeCompare(b)); }
const barCls = p => p>1 ? 'over' : p>=.8 ? 'warn' : 'ok';

/* ---------- local copy + outbox ---------- */
const lkey = () => 'kharcha:v1:'+UID;
function loadLocal(){
  let o=null; try{ o=JSON.parse(localStorage.getItem(lkey())||'null'); }catch(e){}
  L = Object.assign({txns:{}, budgets:{}, accounts:null, prefs:{}, setAt:null, lastSync:null, outbox:{}}, o||{});
  if(!L.setAt && L.accountsAt) L.setAt=L.accountsAt;
  if(!L.prefs) L.prefs={};
}
function persist(){ try{ localStorage.setItem(lkey(), JSON.stringify(L)); }catch(e){ console.error(e); toast('Phone storage is full. Export your data and delete old entries.'); } }
function rebuild(){
  buildCats();
  const m={};
  for(const t of Object.values(L.txns)){ if(t.deleted) continue; const k=t.date.slice(0,7); (m[k]=m[k]||{txns:{}}).txns[t.id]=t; }
  for(const [ym,b] of Object.entries(L.budgets)){ (m[ym]=m[ym]||{txns:{}}).budget={total:+b.total||0, cats:b.cats||{}}; }
  S.months=m; S.settings = L.accounts ? {accounts:L.accounts} : null;
}
const nowIso = () => new Date().toISOString();
function queue(table, key, row){ L.outbox[table+':'+key] = {table, row}; }
function commit(){ persist(); rebuild(); render(); if(SH) rerenderSheet(); flushSoon(); }
function putTxnRaw(t){ const r={...t, labels:t.labels||[], updated_at:nowIso(), deleted:false}; L.txns[t.id]=r; queue('txns', t.id, r); }
function delTxnRaw(id){ const t=L.txns[id]; if(!t) return; const r={...t, updated_at:nowIso(), deleted:true}; L.txns[id]=r; queue('txns', id, r); }
function putTxn(t){ putTxnRaw(t); commit(); }
function delTxn(id){ delTxnRaw(id); commit(); }
function putBudget(ym, b){ const r={ym, total:+b.total||0, cats:b.cats||{}, updated_at:nowIso()}; L.budgets[ym]=r; queue('budgets', ym, r); commit(); }
function putSettings(patch, silent){
  if(patch.accounts) L.accounts=patch.accounts;
  if(patch.prefs) L.prefs=patch.prefs;
  L.setAt=nowIso();
  queue('settings','me',{accounts:L.accounts||DEFAULT_ACCOUNTS, prefs:L.prefs||{}, updated_at:L.setAt});
  if(silent){ persist(); rebuild(); flushSoon(); } else commit();
}
const saveSettings = next => putSettings({accounts:next.accounts});
const setPrefs = fn => { const p=clone(prefs()); fn(p); putSettings({prefs:p}); };

/* ---------- recurring (scheduled) transactions ---------- */
function nextDate(rule, from){
  const d=parseD(from), s=parseD(rule.start);
  if(rule.freq==='daily') d.setDate(d.getDate()+1);
  else if(rule.freq==='weekly') d.setDate(d.getDate()+7);
  else if(rule.freq==='monthly'){ const y=d.getFullYear(), m=d.getMonth()+1; const nd=new Date(y,m,1); const dim=new Date(nd.getFullYear(),nd.getMonth()+1,0).getDate(); nd.setDate(Math.min(s.getDate(),dim)); return ymd(nd); }
  else { const nd=new Date(d.getFullYear()+1,s.getMonth(),1); const dim=new Date(nd.getFullYear(),nd.getMonth()+1,0).getDate(); nd.setDate(Math.min(s.getDate(),dim)); return ymd(nd); }
  return ymd(d);
}
const ruleNext = r => r.last ? nextDate(r, r.last) : r.start;
function runRecurring(){
  if(!L) return;
  const rules=prefs().recurring||[]; if(!rules.length) return;
  const today=todayS(); let changed=false, made=0; const P=clone(prefs());
  for(const r of P.recurring){
    let next=ruleNext(r), guard=0;
    while(next<=today && (!r.end || next<=r.end) && guard++<400){
      const id=`r_${r.id}_${next.replace(/-/g,'')}`;
      if(!L.txns[id]){ putTxnRaw({id, type:r.type, amt:r.amt, cat:r.cat, acct:r.acct, to:r.to||null, note:r.note||'', labels:r.labels||[], date:next, at:Date.now()}); made++; }
      r.last=next; changed=true; next=nextDate(r,next);
    }
  }
  if(changed){ putSettings({prefs:P}, true); render(); if(made) toast(`Added ${made} scheduled entr${made>1?'ies':'y'}`); }
}

/* ---------- sync with Supabase ---------- */
const toRow = (table,r) => table==='txns'
  ? {id:r.id, user_id:UID, type:r.type, amt:r.amt, cat:r.cat||null, acct:r.acct, to_acct:r.to||null, note:r.note||'', labels:r.labels||[], date:r.date, created_ms:r.at||null, updated_at:r.updated_at, deleted:!!r.deleted}
  : table==='budgets' ? {user_id:UID, ym:r.ym, total:r.total, cats:r.cats, updated_at:r.updated_at}
  : {user_id:UID, accounts:r.accounts, prefs:r.prefs||{}, updated_at:r.updated_at};
const fromTxn = x => ({id:x.id, type:x.type, amt:+x.amt, cat:x.cat, acct:x.acct, to:x.to_acct, note:x.note||'', labels:Array.isArray(x.labels)?x.labels:[], date:x.date, at:+x.created_ms||0, updated_at:x.updated_at, deleted:x.deleted});
const CONFLICT = {txns:'id', budgets:'user_id,ym', settings:'user_id'};
let flushing=false, flushT=null;
function flushSoon(){ clearTimeout(flushT); flushT=setTimeout(syncNow, 400); }
async function flush(){
  for(const [k,{table,row}] of Object.entries(L.outbox)){
    const {error} = await SB.from(table).upsert(toRow(table,row), {onConflict:CONFLICT[table]});
    if(error) throw error;
    if(L.outbox[k] && L.outbox[k].row===row) delete L.outbox[k];
    persist();
  }
}
async function pull(){
  const since = L.lastSync; let maxSeen = since;
  for(let from=0;;from+=1000){
    let q = SB.from('txns').select('*').order('server_at',{ascending:true}).range(from, from+999);
    if(since) q = q.gt('server_at', new Date(new Date(since).getTime()-60000).toISOString());
    const {data, error} = await q; if(error) throw error;
    for(const x of data){
      if(!L.outbox['txns:'+x.id]){ const loc=L.txns[x.id]; if(!loc || !loc.updated_at || x.updated_at >= loc.updated_at) L.txns[x.id]=fromTxn(x); }
      if(!maxSeen || x.server_at > maxSeen) maxSeen = x.server_at;
    }
    if(data.length<1000) break;
  }
  const b = await SB.from('budgets').select('*'); if(b.error) throw b.error;
  for(const x of b.data){ if(L.outbox['budgets:'+x.ym]) continue; const loc=L.budgets[x.ym]; if(!loc || x.updated_at>=loc.updated_at) L.budgets[x.ym]={ym:x.ym,total:+x.total,cats:x.cats||{},updated_at:x.updated_at}; }
  const s = await SB.from('settings').select('*').maybeSingle(); if(s.error) throw s.error;
  if(s.data && !L.outbox['settings:me'] && (!L.setAt || s.data.updated_at>=L.setAt)){ L.accounts=s.data.accounts; L.prefs=s.data.prefs||{}; L.setAt=s.data.updated_at; }
  L.lastSync = maxSeen; persist();
}
async function syncNow(){
  if(!SB || !UID || flushing) return;
  if(!navigator.onLine){ S.sync={...S.sync, state:'offline'}; renderIfMore(); return; }
  flushing=true; S.sync={...S.sync, state:'syncing'};
  try{ await flush(); await pull(); rebuild(); runRecurring(); await flush(); S.sync={state:'ok', at:Date.now(), err:null}; rebuild(); render(); if(SH && SH.kind!=='txn') rerenderSheet(); }
  catch(e){
    console.error(e);
    const msg=(e&&e.message)||'Sync failed';
    const needsUpdate=/column|labels|prefs/i.test(msg) && /exist|find|schema/i.test(msg);
    S.sync={...S.sync, state:'error', err: needsUpdate ? 'update' : msg};
    render();
  }
  finally{ flushing=false; }
}
function renderIfMore(){ if(S.tab==='more') render(); }
const pending = () => L ? Object.keys(L.outbox).length : 0;

/* ---------- theme, privacy, lock ---------- */
function applyTheme(){
  const t=store.get('k_theme')||'system', r=document.documentElement;
  if(t==='system') r.removeAttribute('data-theme'); else r.setAttribute('data-theme',t);
}
function applyHide(){ document.body.classList.toggle('hideamt', store.get('k_hide')==='1'); }
async function hashPin(pin){ const buf=await crypto.subtle.digest('SHA-256', new TextEncoder().encode('kharcha:'+UID+':'+pin)); return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join(''); }
const pinKey = () => 'k_pin:'+UID;
let hiddenAt=0, lockEntry='';
function lockIfNeeded(){ if(UID && store.get(pinKey())){ S.locked=true; lockEntry=''; renderLock(); } }
function renderLock(){
  const el=document.getElementById('lockRoot');
  if(!S.locked){ el.innerHTML=''; return; }
  el.innerHTML=`<div class="lock"><div class="brand">${ic('Lock')}</div><div style="font-weight:800;font-size:20px">Enter passcode</div>
    <div class="dots">${[0,1,2,3].map(i=>`<i class="${i<lockEntry.length?'on':''}"></i>`).join('')}</div><div class="sub" id="lockmsg">&nbsp;</div>
    <div class="keys lockkeys">${['1','2','3','4','5','6','7','8','9','','0','⌫'].map(k=>k?`<button data-act="lkey" data-v="${k}" class="num" aria-label="${k==='⌫'?'Delete digit':k}">${k==='⌫'?ic('Delete'):k}</button>`:'<span></span>').join('')}</div>
    <button class="sub" data-act="lockforgot" style="font-weight:700;margin-top:10px">Forgot passcode? Sign out</button></div>`;
}
async function lockKey(k){
  if(k==='⌫') lockEntry=lockEntry.slice(0,-1); else if(lockEntry.length<4) lockEntry+=k;
  renderLock();
  if(lockEntry.length===4){
    const ok = (await hashPin(lockEntry))===store.get(pinKey());
    if(ok){ S.locked=false; renderLock(); }
    else { lockEntry=''; renderLock(); const m=document.getElementById('lockmsg'); if(m) m.textContent='Wrong passcode. Try again.'; }
  }
}

/* ---------- session ---------- */
async function startSession(user){
  UID=user.id; S.email=user.email||''; loadLocal(); rebuild(); S.mode='ready';
  lockIfNeeded(); render(); runRecurring(); syncNow();
}
async function boot(){
  applyTheme(); applyHide();
  if(!CFG.supabaseUrl || !CFG.supabaseAnonKey || !window.supabase){ S.mode='nocfg'; render(); return; }
  SB = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey, {auth:{persistSession:true, autoRefreshToken:true, detectSessionInUrl:true}});
  render();
  const {data:{session}} = await SB.auth.getSession();
  if(session) startSession(session.user); else { S.mode='auth'; render(); }
  SB.auth.onAuthStateChange((ev, sess)=>{
    if(ev==='SIGNED_IN' && sess && sess.user.id!==UID) startSession(sess.user);
    if(ev==='SIGNED_OUT'){ UID=null; L=null; S.months={}; S.settings=null; S.mode='auth'; S.locked=false; renderLock(); closeAll(); render(); }
  });
  window.addEventListener('online', syncNow);
  document.addEventListener('visibilitychange', ()=>{
    if(document.visibilityState==='hidden') hiddenAt=Date.now();
    else { if(hiddenAt && Date.now()-hiddenAt>60000) lockIfNeeded(); syncNow(); if(L) runRecurring(); }
  });
  setInterval(()=>{ if(document.visibilityState==='visible') syncNow(); }, 60000);
}

/* ---------- render: shell ---------- */
const TABS = [['home','Home','House'],['calendar','Calendar','CalendarDays'],['overview','Overview','ChartPie'],['budgets','Budgets','Target'],['more','More','Ellipsis']];
const yearMode = () => S.tab==='overview' && S.ovPeriod==='year';
function render(){
  const chrome = S.mode==='ready';
  document.querySelector('.top').hidden=!chrome; document.querySelector('.nav').hidden=!chrome;
  document.getElementById('fab').hidden=!chrome||S.tab==='more';
  const v=document.getElementById('view');
  if(S.mode==='loading'){ v.innerHTML = `<div class="card empty" style="margin-top:40px"><b>Opening Kharcha…</b></div>`; return; }
  if(S.mode==='nocfg'){ v.innerHTML = `<div class="card empty" style="margin-top:40px"><b>Almost there</b>Add your Supabase project URL and key to config.js, then reload.</div>`; return; }
  if(S.mode==='auth'){ v.innerHTML = vAuth(); return; }
  document.getElementById('nav').innerHTML = TABS.map(([id,l,i])=>`<button data-act="tab" data-v="${id}" class="${S.tab===id?'on':''}" aria-label="${l}">${ic(i)}<span>${l}</span></button>`).join('');
  document.getElementById('title').textContent = TABS.find(t=>t[0]===S.tab)[1];
  document.getElementById('b_search').innerHTML=ic('Search');
  document.getElementById('b_hide').innerHTML=ic(store.get('k_hide')==='1'?'EyeOff':'Eye');
  document.getElementById('b_hide').setAttribute('aria-label', store.get('k_hide')==='1'?'Show amounts':'Hide amounts');
  const r2=document.getElementById('toprow2'); r2.hidden = S.tab==='more';
  const mb=document.getElementById('monthbar');
  mb.children[0].innerHTML=ic('ChevronLeft'); mb.children[2].innerHTML=ic('ChevronRight');
  document.getElementById('mlabel').textContent = yearMode() ? S.ym.slice(0,4) : ymLabel(S.ym);
  const af=document.getElementById('acctf'); af.hidden = S.tab==='budgets';
  af.innerHTML = `${ic('Wallet')}<span>${S.acct?esc(accById(S.acct).name):'All accounts'}</span>${ic('ChevronDown')}<select id="f_acctfilter" aria-label="Show account"><option value="">All accounts</option>${accounts().map(a=>`<option value="${a.id}" ${S.acct===a.id?'selected':''}>${esc(a.name)}</option>`).join('')}</select>`;
  document.getElementById('fab').innerHTML = ic('Plus');
  v.innerHTML = updateBanner() + ({home:vHome,calendar:vCal,overview:vOverview,budgets:vBudgets,more:vMore})[S.tab]();
}
const updateBanner = () => S.sync.err==='update' ? `<div class="banner">Your database needs a one-time update before changes can sync. In Supabase, open SQL Editor, paste <b>update.sql</b> and click Run. Your entries are safe on this device meanwhile.</div>` : '';

function lblHtml(labels){ return (labels||[]).map(l=>`<span class="lbl">#${esc(l)}</span>`).join(''); }
function txRow(t, sel){
  const c = t.type==='transfer' ? catOf('__transfer') : catOf(t.cat);
  const acc = accById(t.acct);
  const sub = t.type==='transfer' ? `${esc(acc.name)} → ${esc(accById(t.to).name)}` : (t.note ? esc(t.note) : esc(acc.name));
  const amt = t.type==='expense' ? `<span class="a num">−${money(t.amt)}</span>` : t.type==='income' ? `<span class="a num pos">+${money(t.amt)}</span>` : `<span class="a num" style="color:var(--muted)">${money(t.amt)}</span>`;
  const rep = t.id.startsWith('r_') ? `<span class="rep" title="Scheduled">${ic('Repeat')}</span>` : '';
  const fut = t.date>todayS() ? '<span class="lbl fut">Upcoming</span>' : '';
  const lead = sel ? `<span class="chk ${sel.has(t.id)?'on':''}">${ic(sel.has(t.id)?'SquareCheck':'Square')}</span>` : '';
  return `<button class="tx" data-act="${sel?'selrow':'edit'}" data-id="${t.id}">${lead}<span class="ic" style="--c:${c.c}">${ic(c.icon)}</span><span class="t"><b>${esc(c.name)}${rep}</b><span>${sub}</span>${(t.labels&&t.labels.length)||fut?`<span class="lbls">${fut}${lblHtml(t.labels)}</span>`:''}</span>${amt}</button>`;
}
function groupedList(list, sel){
  if(!list.length) return '';
  const g={}; list.forEach(t=>(g[t.date]=g[t.date]||[]).push(t));
  return Object.keys(g).sort().reverse().map(d=>{
    const tt=totals(g[d]);
    return `<div><div class="day-h"><span>${dayLabel(d)}</span><span class="num">${tt.exp?'−'+money(tt.exp):''}${tt.inc?(tt.exp?' · ':'')+'+'+money(tt.inc):''}</span></div><div class="list">${g[d].map(t=>txRow(t,sel)).join('')}</div></div>`;
  }).join('');
}

/* ---------- home ---------- */
function spendCard(ym){
  const list=viewTxns(ym), tt=totals(list), bf=budgetFor(ym);
  let budgetHtml='';
  if(S.acct) budgetHtml=`<div class="sub" style="margin-top:8px">Showing ${esc(accById(S.acct).name)} only.</div>`;
  else if(bf && bf.b.total>0){
    const p=tt.exp/bf.b.total, left=bf.b.total-tt.exp;
    let perDay='';
    if(ym===curYM() && left>0){ const dl=daysIn(ym)-new Date().getDate()+1; perDay=` · ${money(left/dl)}/day for ${dl} day${dl>1?'s':''}`; }
    budgetHtml = `<div class="bar ${barCls(p)}"><i style="width:${Math.min(100,p*100).toFixed(1)}%"></i></div>
      <div class="sub num" style="margin-top:8px">${left>=0?`<b style="color:var(--ink)">${money(left)}</b> left of ${money(bf.b.total)}${perDay}`:`<b class="neg">${money(-left)} over</b> your ${money(bf.b.total)} budget`}</div>`;
  } else budgetHtml = `<div class="sub" style="margin-top:8px">No budget for ${ymLong(ym)}. <button data-act="tab" data-v="budgets" style="color:var(--accent);font-weight:800">Set one</button></div>`;
  return `<div class="card"><div class="label"><span>${ymLong(ym)} spending</span></div>
    <div class="big num">${tt.exp?'−':''}${money(tt.exp)}</div>${budgetHtml}
    <div class="pills num"><span class="pill"><span class="dot" style="background:var(--pos)">${ic('Plus')}</span>${money(tt.inc)}</span><span class="pill"><span class="dot" style="background:var(--neg)">${ic('X')}</span>${money(tt.exp)}</span><span class="pill">Net ${tt.net<0?'−':'+'}${money(tt.net)}</span></div></div>`;
}
function vHome(){
  const bal=balances(); const total=S.acct ? (bal[S.acct]||0) : Object.values(bal).reduce((a,b)=>a+b,0);
  const list=viewTxns(S.ym);
  return `<div class="card"><div class="label"><span>${S.acct?esc(accById(S.acct).name)+' balance':'Total balance'}</span><button data-act="tab" data-v="more" class="sub" style="font-weight:700">Manage</button></div>
    <div class="big num ${total<0?'neg':''}">${smoney(total)}</div>
    <div class="acc-strip">${accounts().map(a=>`<button class="acc ${S.acct===a.id?'on':''}" data-act="acctpick" data-v="${a.id}" style="text-align:left"><small>${esc(a.name)}</small><b class="num ${bal[a.id]<0?'neg':''}">${smoney(bal[a.id]||0)}</b></button>`).join('')}</div></div>
  ${spendCard(S.ym)}
  ${list.length ? groupedList(list) : `<div class="card empty"><b>No entries in ${ymLong(S.ym)}</b>Tap + to log an expense. For an earlier day, use the Calendar tab or change the date when adding.</div>`}`;
}

/* ---------- calendar ---------- */
function vCal(){
  const ym=S.ym, n=daysIn(ym), [y,m]=ym.split('-').map(Number);
  const first=(new Date(y,m-1,1).getDay()+6)%7;
  const list=viewTxns(ym); const byDay={};
  list.forEach(t=>{ const d=byDay[t.date]||(byDay[t.date]={exp:0,inc:0,n:0}); d.n++; if(t.type==='expense') d.exp+=t.amt; else if(t.type==='income') d.inc+=t.amt; });
  const max=Math.max(1,...Object.values(byDay).map(d=>d.exp));
  const t=todayS();
  let cells=['Mo','Tu','We','Th','Fr','Sa','Su'].map(w=>`<div class="wd">${w}</div>`).join('');
  for(let i=0;i<first;i++) cells+='<div></div>';
  for(let d=1; d<=n; d++){
    const ds=`${ym}-${pad(d)}`, info=byDay[ds];
    const h = info&&info.exp ? (0.25+0.75*info.exp/max).toFixed(2) : 0;
    cells+=`<button class="cd ${ds===t?'today':''} ${ds===S.calDay?'sel':''} ${ds>t?'future':''}" style="--h:${h}" data-act="day" data-v="${ds}" aria-label="${dayLabel(ds)}"><span class="n num">${d}</span>${info&&info.exp?`<span class="s num">${kfmt(info.exp)}</span>`:''}${info&&info.inc?'<span class="inc"></span>':''}</button>`;
  }
  const sel = S.calDay && S.calDay.startsWith(ym) ? S.calDay : null;
  let panel;
  if(sel){
    const dl=list.filter(x=>x.date===sel), tt=totals(dl);
    panel = `<div class="row" style="padding:4px 4px 0"><div><div style="font-weight:800;font-size:17px">${dayLabel(sel)}</div><div class="sub num">${dl.length?`${dl.length} entr${dl.length>1?'ies':'y'} · spent ${money(tt.exp)}${tt.inc?' · received '+money(tt.inc):''}`:'Nothing logged'}</div></div><span class="spacer"></span><button class="btn sm" data-act="addon" data-v="${sel}">${ic('Plus')}Add</button></div>
      ${dl.length?`<div class="list">${dl.map(x=>txRow(x)).join('')}</div>`:''}`;
  } else panel = `<div class="sub" style="text-align:center;padding:8px">Tap a day to see or add its entries.</div>`;
  const tt=totals(list);
  return `<div class="card"><div class="label" style="margin-bottom:12px"><span>${ymLong(ym)} ${y}</span><span class="num">Spent ${money(tt.exp)}</span></div><div class="cal">${cells}</div></div>${panel}`;
}

/* ---------- overview ---------- */
function donut(items,total){
  const R=80, C=2*Math.PI*R; let off=0; const gap = items.length>1 ? 2.5 : 0;
  const segs = items.map(it=>{ const len=it.v/total*C; const s=`<circle r="${R}" cx="110" cy="110" fill="none" stroke="${it.c}" stroke-width="26" stroke-dasharray="${Math.max(0.01,len-gap)} ${C}" stroke-dashoffset="${-off}" transform="rotate(-90 110 110)"/>`; off+=len; return s; }).join('');
  return `<svg class="donut" viewBox="0 0 220 220" role="img" aria-label="Breakdown by category"><circle r="${R}" cx="110" cy="110" fill="none" stroke="var(--chip)" stroke-width="26"/>${segs}
    <text x="110" y="104" text-anchor="middle" style="fill:var(--muted);font:700 12px var(--f-ui)">${S.ovType==='expense'?'Spent':'Received'}</text>
    <text x="110" y="128" text-anchor="middle" class="num" style="fill:var(--ink);font:800 21px var(--f-ui)">${money(total)}</text></svg>`;
}
function barChart(data){
  const rawMax=Math.max(1,...data.flatMap(d=>[d.inc,d.exp]));
  const mag=Math.pow(10,Math.floor(Math.log10(rawMax))); const max=Math.ceil(rawMax/mag)*mag;
  const W=320,H=160,Lp=36,B=22,T=10, ch=H-B-T, cw=(W-Lp)/data.length, bw=Math.min(18,cw/3.2);
  const y=v=>T+ch-(v/max)*ch;
  let s=''; [0,.5,1].forEach(f=>{ const yy=y(max*f); s+=`<line x1="${Lp}" x2="${W}" y1="${yy}" y2="${yy}" stroke="var(--line)" stroke-width="1"/><text x="${Lp-6}" y="${yy+3}" text-anchor="end">${kfmt(max*f)}</text>`; });
  data.forEach((d,i)=>{ const cx=Lp+cw*i+cw/2;
    s+=`<rect x="${cx-bw-1}" y="${y(d.inc)}" width="${bw}" height="${Math.max(0,T+ch-y(d.inc))}" rx="3" fill="var(--pos)"/>`;
    s+=`<rect x="${cx+1}" y="${y(d.exp)}" width="${bw}" height="${Math.max(0,T+ch-y(d.exp))}" rx="3" fill="var(--neg)" opacity=".85"/>`;
    s+=`<text x="${cx}" y="${H-6}" text-anchor="middle">${d.l}</text>`; });
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Inflow and outflow">${s}</svg>`;
}
function vOverview(){
  const yr=S.ovPeriod==='year', ym=S.ym, y=ym.slice(0,4);
  const list= yr ? yearTxns(y) : viewTxns(ym), tt=totals(list), type=S.ovType;
  const m=byCat(list,type); const total=Object.values(m).reduce((a,b)=>a+b,0);
  const items=Object.entries(m).map(([k,v])=>({k,v,c:catOf(k).c})).sort((a,b)=>b.v-a.v);
  const prevList = yr ? yearTxns(String(+y-1)) : viewTxns(addMonth(ym,-1));
  const prev=totals(prevList); const prevV = type==='expense'?prev.exp:prev.inc;
  const prevName = yr ? String(+y-1) : ymLabel(addMonth(ym,-1)).slice(0,3);
  const cmp = prevV>0 ? (()=>{ const d=(total-prevV)/prevV*100; return `${d>=0?'+':'−'}${Math.abs(d).toFixed(0)}% vs ${prevName} (${money(prevV)})`; })() : `No data for ${prevName}`;
  const period = yr ? y : ymLong(ym);
  const breakdown = items.length ? `${donut(items,total)}
    <div class="legend">${items.map(it=>{ const c=catOf(it.k), p=it.v/total; return `<button class="lg" data-act="ovcat" data-v="${it.k}"><span class="ic" style="--c:${c.c}">${ic(c.icon)}</span><div class="t"><div><span>${esc(c.name)}</span><span class="num">${money(it.v)}</span></div><div class="bar s" style="margin-top:6px"><i style="width:${(p*100).toFixed(1)}%;background:${c.c}"></i></div><span class="sub num">${(p*100).toFixed(1)}%</span></div>${ic('ChevronRight')}</button>`; }).join('')}</div>`
    : `<div class="empty"><b>No ${type==='expense'?'expenses':'income'} in ${period}</b>Entries you add show up here by category.</div>`;
  let data;
  if(yr) data = MONTHS.map((mn,i)=>{ const k=`${y}-${pad(i+1)}`; const t2=totals(acctFilter(txnsOf(k))); return {l:mn[0], inc:t2.inc, exp:t2.exp}; });
  else { const n=daysIn(ym); const bk=[[1,7],[8,14],[15,21],[22,28]]; if(n>28) bk.push([29,n]);
    data = bk.map(([a,b])=>{ let inc=0,exp=0; list.forEach(t=>{ const d=+t.date.slice(8); if(d>=a&&d<=b){ if(t.type==='income') inc+=t.amt; else if(t.type==='expense') exp+=t.amt; } }); return {l:`${a}–${b}`,inc,exp}; }); }
  const avg = yr ? (()=>{ const months=Object.keys(S.months).filter(k=>k.startsWith(y+'-')&&k<=curYM()).length||1; return `Average ${money(tt.exp/months)} spent per month`; })() : '';
  return `<div class="seg" role="tablist"><button data-act="ovp" data-v="month" class="${!yr?'on':''}">Month</button><button data-act="ovp" data-v="year" class="${yr?'on':''}">Year</button></div>
  <div class="card"><div class="row" style="justify-content:space-between"><div class="label"><span>${type==='expense'?'Expenses':'Income'} · ${period}</span></div>
    <div class="seg mini"><button data-act="ov" data-v="expense" class="${type==='expense'?'on':''}">Spent</button><button data-act="ov" data-v="income" class="${type==='income'?'on':''}">Earned</button></div></div>
    <div class="big num">${type==='expense'&&total?'−':''}${money(total)}</div><div class="sub">${cmp}</div>${breakdown}</div>
  <div class="card flow"><div class="label"><span>Cash flow · ${period}</span></div><div class="big num ${tt.net<0?'neg':''}">${smoney(tt.net)}</div>
    <div class="pills num"><span class="pill"><span class="dot" style="background:var(--pos)">${ic('Plus')}</span>${money(tt.inc)}</span><span class="pill"><span class="dot" style="background:var(--neg)">${ic('X')}</span>${money(tt.exp)}</span></div>
    ${barChart(data)}<div class="sub" style="text-align:center;margin-top:4px">${yr?'Inflow and outflow by month':'Inflow and outflow by week (days of '+ymLong(ym)+')'}${avg?' · '+avg:''}</div></div>`;
}

/* ---------- budgets ---------- */
function vBudgets(){
  const ym=S.ym, list=txnsOf(ym), tt=totals(list), spent=byCat(list,'expense'), bf=budgetFor(ym);
  const b = bf ? bf.b : {total:0,cats:{}}; const cats=b.cats||{};
  const alloc=Object.values(cats).reduce((a,v)=>a+(+v||0),0);
  let head;
  if(b.total>0){
    const p=tt.exp/b.total, left=b.total-tt.exp;
    head = `<div class="card"><div class="label"><span>Monthly budget · ${ymLong(ym)}</span><button class="setb" data-act="bud" data-v="__total">Edit</button></div>
      <div class="big num">${money(tt.exp)} <span class="sub" style="font-size:16px;font-weight:700">of ${money(b.total)}</span></div>
      <div class="bar ${barCls(p)}"><i style="width:${Math.min(100,p*100).toFixed(1)}%"></i></div>
      <div class="sub num" style="margin-top:8px">${left>=0?`${money(left)} left`:`<b class="neg">${money(-left)} over budget</b>`} · ${(p*100).toFixed(0)}% used</div>
      <div class="sub num" style="margin-top:4px">Category budgets add up to ${money(alloc)}${alloc<b.total?` · ${money(b.total-alloc)} unassigned`:alloc>b.total?` · <span class="neg">${money(alloc-b.total)} more than the monthly budget</span>`:''}</div>
      ${bf.inherited?`<div class="row" style="margin-top:12px;flex-wrap:wrap"><span class="tag">Carried over from ${ymLabel(bf.from)}</span><span class="spacer"></span><button class="btn sm ghost" data-act="keepbud">Keep for ${ymLabel(ym).slice(0,3)}</button></div>`:''}</div>`;
  } else head = `<div class="card"><div class="label"><span>Monthly budget · ${ymLong(ym)}</span></div><div style="font-weight:800;font-size:18px;margin-top:6px">No budget set</div><div class="sub" style="margin:4px 0 14px">Set how much you plan to spend in ${ymLong(ym)}. Later months reuse it until you change it.</div><button class="btn" data-act="bud" data-v="__total">Set monthly budget</button></div>`;
  const rows = catsOf('expense',true).map(c=>({c,bud:+cats[c.id]||0,sp:spent[c.id]||0})).filter(r=>!r.c.hidden||r.bud||r.sp)
    .sort((a,b)=> (b.bud>0)-(a.bud>0) || b.sp-a.sp || a.c.ord-b.c.ord);
  const rowHtml = r=>{
    const p = r.bud ? r.sp/r.bud : 0;
    const right = r.bud ? `<button class="setb num" data-act="bud" data-v="${r.c.id}">${kfmt(r.bud)}</button>` : `<button class="setb" data-act="bud" data-v="${r.c.id}">Set</button>`;
    const status = r.bud ? (p>1?`<span class="tag over">${money(r.sp-r.bud)} over</span>`:p>=.8?`<span class="tag warn">${money(r.bud-r.sp)} left</span>`:`<span>${money(r.bud-r.sp)} left</span>`) : '';
    return `<div class="brow"><span class="ic" style="--c:${r.c.c}">${ic(r.c.icon)}</span><div class="t"><b>${esc(r.c.name)}</b><div class="sub num"><span>${money(r.sp)}${r.bud?' of '+money(r.bud):' spent'}</span>${status}</div>${r.bud?`<div class="bar s ${barCls(p)}"><i style="width:${Math.min(100,p*100).toFixed(1)}%"></i></div>`:''}</div>${right}</div>`;
  };
  return `${head}<div class="h2">Category budgets</div><div class="list">${rows.map(rowHtml).join('')}</div>`;
}

/* ---------- more ---------- */
function ago(ms){ const m=Math.round((Date.now()-ms)/60000); return m<1?'just now':m<60?`${m} min ago`:`${Math.round(m/60)} h ago`; }
function vMore(){
  const bal=balances(), n=pending(), sy=S.sync;
  let st, stIcon, stCol;
  if(sy.err==='update'){ st='Database update needed. Run update.sql in Supabase → SQL Editor.'; stIcon='X'; stCol='var(--neg)'; }
  else if(sy.state==='error'){ st=`Couldn’t reach the server: ${esc(sy.err)}. ${n?n+' change'+(n>1?'s':'')+' saved on this device, waiting to upload.':''}`; stIcon='X'; stCol='var(--neg)'; }
  else if(!navigator.onLine || sy.state==='offline'){ st=`You’re offline. ${n?n+' change'+(n>1?'s':'')+' saved on this device will upload when you reconnect.':'Everything is saved on this device.'}`; stIcon='X'; stCol='var(--warn)'; }
  else if(n){ st=`${n} change${n>1?'s':''} uploading…`; stIcon='RotateCcw'; stCol='var(--warn)'; }
  else { st= sy.at ? `All changes synced ${ago(sy.at)}.` : 'Checking for changes…'; stIcon='Check'; stCol='var(--pos)'; }
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  const rules=prefs().recurring||[]; const custom=(prefs().customCats||[]).length;
  const theme=store.get('k_theme')||'system'; const hasPin=!!store.get(pinKey());
  const row=(act,icon,col,title,sub,right='')=>`<button class="more-row" data-act="${act}"><span class="ic" style="--c:${col}">${ic(icon)}</span><span class="t"><b>${title}</b><span class="sub" style="white-space:normal">${sub}</span></span>${right||ic('ChevronRight')}</button>`;
  return `<div class="h2">Accounts</div>
  <div class="list">${accounts().map(a=>`<button class="more-row" data-act="acc" data-id="${a.id}"><span class="ic" style="--c:var(--accent)">${ic(ACC_ICON[a.kind]||'Wallet')}</span><span class="t"><b>${esc(a.name)}</b><span class="sub">${ACC_KIND[a.kind]||'Account'}</span></span><span class="num ${bal[a.id]<0?'neg':''}" style="font-weight:800">${smoney(bal[a.id]||0)}</span></button>`).join('')}
  <button class="more-row" data-act="acc" data-id="__new"><span class="ic" style="--c:var(--muted)">${ic('Plus')}</span><span class="t"><b>Add account</b><span class="sub">Bank, cash, card or UPI wallet</span></span></button></div>
  <div class="h2">Organise</div>
  <div class="list">
    ${row('cats','Shapes','var(--accent)','Categories',`${catsOf('expense').length} expense · ${catsOf('income').length} income${custom?` · ${custom} of your own`:''}`)}
    ${row('rules','Repeat','var(--accent)','Scheduled payments', rules.length?`${rules.length} repeating: ${rules.slice(0,2).map(r=>esc(r.note||catOf(r.cat).name)).join(', ')}${rules.length>2?'…':''}`:'Rent, SIPs, subscriptions that repeat automatically')}
    ${row('search','Search','var(--accent)','Search & bulk edit','Find entries by note, label, amount or category; change many at once')}
  </div>
  <div class="h2">Preferences</div>
  <div class="list">
    <div class="more-row"><span class="ic" style="--c:var(--accent)">${ic(theme==='dark'?'Moon':theme==='light'?'Sun':'Monitor')}</span><span class="t"><b>Appearance</b></span><div class="seg mini">${[['system','Auto'],['light','Light'],['dark','Dark']].map(([k,l])=>`<button data-act="theme" data-v="${k}" class="${theme===k?'on':''}">${l}</button>`).join('')}</div></div>
    ${row('hide', store.get('k_hide')==='1'?'EyeOff':'Eye','var(--accent)','Hide amounts', 'Blur money on screen when others are around. The eye button at the top does the same.', `<span class="sw ${store.get('k_hide')==='1'?'on':''}"><i></i></span>`)}
    ${row('pin','Lock','var(--accent)','Passcode lock', hasPin?'On. Asks for your 4-digit code when you open the app.':'Ask for a 4-digit code when you open the app.', `<span class="sw ${hasPin?'on':''}"><i></i></span>`)}
  </div>
  <div class="h2">Data</div>
  <div class="list">
    <button class="more-row" data-act="sync"><span class="ic" style="--c:${stCol}">${ic(stIcon)}</span><span class="t"><b>Sync</b><span class="sub" style="white-space:normal">${st}</span></span><span class="sub" style="font-weight:800">Sync now</span></button>
    ${row('export','Download','var(--accent)','Export all transactions','CSV file for Excel or Google Sheets','')}
    <label class="more-row" style="cursor:pointer"><span class="ic" style="--c:var(--accent)">${ic('Upload')}</span><span class="t"><b>Import from CSV</b><span class="sub">A file exported from Kharcha</span></span><input type="file" id="f_import" accept=".csv,text/csv" hidden></label>
  </div>
  <div class="h2">Account</div>
  <div class="list"><div class="more-row"><span class="ic" style="--c:var(--muted)">${ic('UserRound')}</span><span class="t"><b>Signed in</b><span class="sub">${esc(S.email)}</span></span><button class="btn sm ghost" data-act="signout">Sign out</button></div></div>
  ${standalone?'':`<div class="card sub"><b style="color:var(--ink)">Install on your phone.</b> iPhone: open this site in Safari, tap Share → Add to Home Screen. Android: open it in Chrome, tap ⋮ → Install app.</div>`}`;
}

/* ---------- sign-in ---------- */
function vAuth(){
  const up = S.authMode==='signup';
  return `<div class="card auth"><div class="brand">${ic('Wallet')}</div><div style="font-weight:800;font-size:22px;text-align:center">Kharcha</div>
    <div class="sub" style="text-align:center;margin-bottom:6px">${up?'Create your account. Your entries are stored in your own database.':'Sign in to see your expenses on this device.'}</div>
    <form id="authform" class="sh-body" style="padding:0">
      <div class="field"><label for="f_em">EMAIL</label><input id="f_em" type="email" autocomplete="email" required value="${esc(S.email)}"></div>
      <div class="field"><label for="f_pw">PASSWORD</label><input id="f_pw" type="password" autocomplete="${up?'new-password':'current-password'}" minlength="6" required></div>
      ${S.authMsg?`<div class="sub" style="color:var(--ink);font-weight:600">${esc(S.authMsg)}</div>`:''}
      <button class="btn wide" type="submit" ${S.authBusy?'disabled':''}>${S.authBusy?'Please wait…':up?'Create account':'Sign in'}</button>
      <button class="btn wide ghost" type="button" data-act="authmode">${up?'I already have an account':'Create an account'}</button>
    </form></div>`;
}
async function doAuth(){
  const email=document.getElementById('f_em').value.trim(), pw=document.getElementById('f_pw').value;
  S.email=email; S.authBusy=true; S.authMsg=''; render();
  const up=S.authMode==='signup';
  const {data, error} = up ? await SB.auth.signUp({email, password:pw}) : await SB.auth.signInWithPassword({email, password:pw});
  S.authBusy=false;
  if(error){ S.authMsg = /invalid login/i.test(error.message) ? 'Wrong email or password.' : error.message; render(); return; }
  if(up && !data.session){ S.authMode='signin'; S.authMsg='Account created. Check your email for a confirmation link, then sign in here.'; render(); return; }
}

/* ======================================================================
   Sheets (bottom panels). A small stack lets a sheet open another and
   return to it when closed (e.g. search → edit entry → back to search).
   ====================================================================== */
let SH=null; const STACK=[];
const root=()=>document.getElementById('sheetRoot');
function sheet(inner, label, cls=''){ return `<div class="scrim" data-act="scrim"><div class="sheet ${cls}" role="dialog" aria-label="${label}">${inner}</div></div>`; }
function head(title, sub, extra=''){ return `<div class="sh-head"><button class="xbtn" data-act="close" aria-label="Close">${ic(STACK.length?'ChevronLeft':'X')}</button><div style="flex:1;min-width:0"><div style="font-weight:800;font-size:17px">${title}</div>${sub?`<div class="sub">${sub}</div>`:''}</div>${extra}</div>`; }
function openSheet(state, keep){ if(!keep) STACK.length=0; else if(SH) STACK.push(SH); SH=state; rerenderSheet(true); }
function closeSheet(){ SH=null; root().innerHTML=''; const prev=STACK.pop(); if(prev){ SH=prev; rerenderSheet(true); } }
function closeAll(){ STACK.length=0; SH=null; root().innerHTML=''; }
function rerenderSheet(fresh){
  if(!SH) return;
  FRESH=!!fresh; try{ rerenderInner(); } finally{ FRESH=false; }
}
function rerenderInner(){
  const k=SH.kind;
  if(k==='txn') renderTxnSheet();
  else if(k==='search') renderSearch(true);
  else if(k==='cats') renderCats();
  else if(k==='catedit') renderCatEdit();
  else if(k==='rules') renderRules();
  else if(k==='ruleedit') renderRuleEdit();
  else if(k==='budget') renderBudget();
  else if(k==='acct') renderAccount();
  else if(k==='pin') renderPin();
  else if(k==='import') renderImport();
}
let FRESH=false;
function keepScroll(fn){ const m=root().querySelector('.sh-scroll'); const sc=(m&&!FRESH)?m.scrollTop:0; fn(); const n=root().querySelector('.sh-scroll'); if(n) n.scrollTop=sc; }

/* ---------- add / edit entry ---------- */
function openTxn(opts, keep){
  const last = store.get('k_acct'); const accs=accounts();
  const defAcct = S.acct || (accs.find(a=>a.id===last) ? last : accs[0].id);
  openSheet(Object.assign({kind:'txn', mode:'add', id:null, type:'expense', amt:'', cat:null, acct:defAcct, to:(accs.find(a=>a.id!==defAcct)||accs[0]).id, note:'', labels:[], repeat:'none', date:todayS(), at:null, confirmDel:false, showLabels:false}, opts||{}), keep);
}
function renderTxnSheet(){
  const s=SH, accs=accounts();
  let cats = s.type==='transfer' ? [] : catsOf(s.type);
  if(s.cat && CAT[s.cat] && CAT[s.cat].hidden && CAT[s.cat].type===s.type) cats=[...cats, CAT[s.cat]];
  const accOpts = sel => accs.map(a=>`<option value="${a.id}" ${a.id===sel?'selected':''}>${esc(a.name)}</option>`).join('');
  const isGen = s.mode==='edit' && s.id && s.id.startsWith('r_');
  const canRepeat = !isGen;
  const labelsAll = [...new Set([...allLabels(), ...s.labels])];
  const html = sheet(`
    <div class="sh-head"><button class="xbtn" data-act="close" aria-label="Close">${ic(STACK.length?'ChevronLeft':'X')}</button>
      <div class="seg">${['expense','income','transfer'].map(t=>`<button data-act="ttype" data-v="${t}" class="${s.type===t?'on':''}">${t[0].toUpperCase()+t.slice(1)}</button>`).join('')}</div>
      ${s.mode==='edit'?`<button class="xbtn" data-act="dup" aria-label="Duplicate">${ic('Copy')}</button><button class="xbtn" data-act="del" aria-label="Delete" style="${s.confirmDel?'background:var(--neg);color:#fff':'color:var(--neg)'}">${ic('Trash2')}</button>`:''}</div>
    ${s.confirmDel?`<div class="sub" style="text-align:center;color:var(--neg);font-weight:700">Tap the bin again to delete this entry</div>`:''}
    <div class="amt"><small>${s.type.toUpperCase()} · INR</small><div class="v num ${s.amt?'':'zero'}" id="amtv">${fmtAmt(s.amt)}</div></div>
    <div style="padding:0 16px">
      <div class="meta">
        <label class="chipf">${ic('CalendarDays')}<span>${shortDay(s.date)}</span><input type="date" id="f_date" value="${s.date}" max="2100-12-31" aria-label="Date"></label>
        ${s.date!==todayS()?`<button class="chipf" data-act="dtoday">Today</button>`:`<button class="chipf" data-act="dyest">Yesterday</button>`}
        <label class="chipf">${ic(ACC_ICON[accById(s.acct).kind]||'Wallet')}<span>${s.type==='transfer'?'From ':''}${esc(accById(s.acct).name)}</span><select id="f_acct" aria-label="Account">${accOpts(s.acct)}</select></label>
        ${s.type==='transfer'?`<label class="chipf">${ic('ArrowLeftRight')}<span>To ${esc(accById(s.to).name)}</span><select id="f_to" aria-label="To account">${accOpts(s.to)}</select></label>`:''}
        ${canRepeat?`<label class="chipf ${s.repeat!=='none'?'onc':''}">${ic('Repeat')}<span>${s.repeat==='none'?'Repeat':FREQ[s.repeat]}</span><select id="f_rep" aria-label="Repeat"><option value="none">Doesn’t repeat</option>${Object.entries(FREQ).map(([k,l])=>`<option value="${k}" ${s.repeat===k?'selected':''}>${l}</option>`).join('')}</select></label>`:`<button class="chipf onc" data-act="rules">${ic('Repeat')}<span>Scheduled</span></button>`}
        <button class="chipf ${s.labels.length?'onc':''}" data-act="lbltoggle">${ic('Tag')}<span>${s.labels.length?s.labels.map(l=>'#'+esc(l)).join(' '):'Label'}</span></button>
      </div>
    </div>
    <div class="sh-mid sh-scroll" id="shmid">
      <input class="note" id="f_note" placeholder="Add a note (optional)" value="${esc(s.note)}" maxlength="120" autocomplete="off">
      ${s.showLabels?`<div class="lblpanel"><div class="lblrow">${labelsAll.map(l=>`<button class="lchip ${s.labels.includes(l)?'on':''}" data-act="lbl" data-v="${esc(l)}">#${esc(l)}</button>`).join('')||'<span class="sub">No labels yet. Labels let you group entries across categories, e.g. #goa-trip or #office.</span>'}</div>
        <div class="row" style="gap:8px;margin-top:8px"><input class="note" id="f_lbl" placeholder="New label" maxlength="24" autocomplete="off" style="flex:1"><button class="btn sm" data-act="lbladd">Add</button></div></div>`:''}
      ${s.type==='transfer' ? `<div class="sub" style="text-align:center;margin-top:14px">Moves money between your accounts. It doesn’t count as spending or income.</div>`
        : `<div class="cats">${cats.map(c=>`<button class="cat ${s.cat===c.id?'on':''}" data-act="pcat" data-v="${c.id}" style="--c:${c.c}"><span class="ic">${ic(c.icon)}</span>${esc(c.name)}</button>`).join('')}<button class="cat" data-act="catnew" data-v="${s.type}" style="--c:var(--muted)"><span class="ic">${ic('Plus')}</span>New</button></div>`}
    </div>
    <div class="keys">${['1','2','3','4','5','6','7','8','9','.','0','⌫'].map(k=>`<button data-act="key" data-v="${k}" class="num" aria-label="${k==='⌫'?'Delete digit':k}">${k==='⌫'?ic('Delete'):k}</button>`).join('')}
      <button class="save" data-act="savetx" id="savebtn">Save</button></div>`, (s.mode==='add'?'Add':'Edit')+' entry');
  keepScroll(()=>{ root().innerHTML=html; });
  updSave();
}
function fmtAmt(a){ if(!a) return '₹0'; const [i,d]=a.split('.'); return '₹'+nf.format(+i||0)+(d!==undefined?'.'+d:''); }
function canSave(){ const v=parseFloat(SH.amt); if(!(v>0)) return false; if(SH.type==='transfer') return SH.acct!==SH.to; return !!SH.cat; }
function updSave(){
  const b=document.getElementById('savebtn');
  if(b){ b.disabled=!canSave(); let t = SH.mode==='add'?(SH.repeat!=='none'?`Save and repeat ${FREQ[SH.repeat].toLowerCase()}`:'Save'):'Save changes';
    if(parseFloat(SH.amt)>0){ if(SH.type==='transfer'&&SH.acct===SH.to) t='Pick two different accounts'; else if(SH.type!=='transfer'&&!SH.cat) t='Pick a category'; }
    b.textContent=t; }
  const v=document.getElementById('amtv'); if(v){ v.textContent=fmtAmt(SH.amt); v.classList.toggle('zero',!SH.amt);}
}
function keyIn(k){
  let a=SH.amt;
  if(k==='⌫') a=a.slice(0,-1);
  else if(k==='.'){ if(!a.includes('.')) a=(a||'0')+'.'; }
  else { if(a.includes('.') && a.split('.')[1].length>=2) return; if(a.replace('.','').length>=10) return; a = (a==='0'?'':a)+k; }
  SH.amt=a; updSave();
}
function budgetAlert(t){
  if(t.type!=='expense') return '';
  const ym=t.date.slice(0,7), bf=budgetFor(ym); if(!bf) return '';
  const list=txnsOf(ym); const spentCat=byCat(list,'expense')[t.cat]||0, spentAll=totals(list).exp;
  const cb=+(bf.b.cats||{})[t.cat]||0, c=catOf(t.cat);
  const check=(after,budget,name)=>{ if(!budget) return ''; const before=after-t.amt;
    if(after>budget && before<=budget) return `${name} is now ${money(after-budget)} over budget`;
    if(after>=.8*budget && before<.8*budget) return `${name}: ${Math.round(after/budget*100)}% of budget used`;
    return ''; };
  return check(spentCat,cb,c.name) || check(spentAll,+bf.b.total||0,'Monthly budget');
}
function saveTxn(){
  if(!canSave()) return;
  const s=SH; const t={id:s.id||newId(), type:s.type, amt:Math.round(parseFloat(s.amt)*100)/100, cat:s.type==='transfer'?null:s.cat, acct:s.acct, to:s.type==='transfer'?s.to:null, note:s.note.trim(), labels:[...s.labels], date:s.date, at:s.at||Date.now()};
  putTxnRaw(t);
  let msg = s.mode==='add' ? `Saved ${money(t.amt)} · ${shortDay(t.date)}` : 'Changes saved';
  if(s.repeat!=='none' && !t.id.startsWith('r_')){
    const P=clone(prefs()); P.recurring=P.recurring||[];
    P.recurring.push({id:rid('q'), type:t.type, amt:t.amt, cat:t.cat, acct:t.acct, to:t.to, note:t.note, labels:t.labels, freq:s.repeat, start:t.date, last:t.date, end:null});
    L.prefs=P; L.setAt=nowIso(); queue('settings','me',{accounts:L.accounts||DEFAULT_ACCOUNTS, prefs:P, updated_at:L.setAt});
    msg=`Saved. Repeats ${FREQ[s.repeat].toLowerCase()} from ${shortDay(t.date)}`;
  }
  store.set('k_acct', t.acct);
  closeSheet(); commit();
  toast(budgetAlert(t) || msg);
}
function editTxn(id){
  const t = L.txns[id]; if(!t || t.deleted) return;
  openTxn({mode:'edit', id:t.id, type:t.type, amt:String(t.amt), cat:t.cat, acct:t.acct, to:t.to||accounts()[0].id, note:t.note||'', labels:[...(t.labels||[])], date:t.date, at:t.at}, !!SH);
}

/* ---------- budgets ---------- */
function openBudget(catId){ openSheet({kind:'budget', catId}); }
function renderBudget(){
  const catId=SH.catId, ym=S.ym, bf=budgetFor(ym), b=bf?bf.b:{total:0,cats:{}};
  const isTotal = catId==='__total';
  const cur = isTotal ? (b.total||0) : ((b.cats||{})[catId]||0);
  const c = isTotal ? null : catOf(catId);
  const spentNow = isTotal ? totals(txnsOf(ym)).exp : (byCat(txnsOf(ym),'expense')[catId]||0);
  const prevYM=addMonth(ym,-1), prevSpent = isTotal ? totals(txnsOf(prevYM)).exp : (byCat(txnsOf(prevYM),'expense')[catId]||0);
  const suggest = [];
  if(prevSpent>0) suggest.push([Math.ceil(prevSpent/100)*100, `${ymLabel(prevYM).slice(0,3)} spend ${money(prevSpent)}`]);
  if(isTotal && !cur) suggest.push([134000,'₹1,34,000']);
  root().innerHTML = sheet(`<div class="sh-head"><button class="xbtn" data-act="close" aria-label="Close">${ic('X')}</button>
      ${c?`<span class="ic" style="--c:${c.c}">${ic(c.icon)}</span>`:''}<div style="flex:1;min-width:0"><div style="font-weight:800;font-size:17px">${isTotal?'Monthly budget':esc(c.name)}</div><div class="sub">${ymLong(ym)} ${ym.slice(0,4)} · spent ${money(spentNow)} so far</div></div></div>
    <form class="sh-body" id="budform">
      <div class="field"><label for="f_bud">BUDGET FOR ${ymLong(ym).toUpperCase()} (₹)</label><input class="hero num" id="f_bud" inputmode="decimal" autocomplete="off" value="${cur||''}" placeholder="0"></div>
      ${suggest.length?`<div class="hint">${suggest.map(([v,l])=>`<button type="button" class="chipf" data-act="bsug" data-v="${v}">${l}</button>`).join('')}</div>`:''}
      <div class="sub">${isTotal?'Applies to this month and carries forward to later months until you change it.':'Applies to '+ymLong(ym)+' and later months that haven’t been set.'}</div>
      <button class="btn wide" type="submit">Save budget</button>
      ${cur?`<button class="btn wide danger" type="button" data-act="bclear">Remove ${isTotal?'monthly':'this'} budget</button>`:''}
    </form>`, 'Budget');
  const inp=document.getElementById('f_bud'); setTimeout(()=>{ try{inp.focus(); inp.select();}catch(e){} },60);
}
function saveBudget(val){
  const ym=S.ym, catId=SH.catId, bf=budgetFor(ym);
  const base = clone(bf?bf.b:{total:0,cats:{}}); if(!base.cats) base.cats={};
  if(catId==='__total') base.total = val; else { if(val>0) base.cats[catId]=val; else delete base.cats[catId]; }
  closeSheet(); putBudget(ym, base); toast(val>0?`Budget saved for ${ymLabel(ym)}`:'Budget removed');
}

/* ---------- accounts ---------- */
function openAccount(id){ const isNew=id==='__new'; openSheet({kind:'acct', id: isNew?rid('a'):id, isNew, confirmDel:false}); }
function renderAccount(){
  const s=SH; const a = s.isNew ? {id:s.id, name:'', kind:'bank', opening:0} : accById(s.id);
  const used = !s.isNew && allTxns().some(t=>t.acct===s.id||t.to===s.id);
  root().innerHTML = sheet(`${head(s.isNew?'New account':'Edit account')}
    <form class="sh-body" id="accform">
      <div class="field"><label for="f_an">NAME</label><input id="f_an" value="${esc(a.name)}" placeholder="e.g. HDFC Savings" maxlength="40" required></div>
      <div class="field"><label for="f_ak">TYPE</label><select id="f_ak">${Object.entries(ACC_KIND).map(([k,l])=>`<option value="${k}" ${a.kind===k?'selected':''}>${l}</option>`).join('')}</select></div>
      <div class="field"><label for="f_ao">STARTING BALANCE (₹)</label><input id="f_ao" inputmode="decimal" value="${a.opening||''}" placeholder="0"></div>
      <div class="sub">The balance before your first entry here. For a credit card, enter what you owe as a negative number, e.g. -12000.</div>
      <button class="btn wide" type="submit">Save account</button>
      ${!s.isNew && accounts().length>1 ? (used?`<div class="sub">This account has entries, so it can’t be deleted.</div>`:`<button class="btn wide danger" type="button" data-act="adel">${s.confirmDel?'Tap again to delete':'Delete account'}</button>`):''}
    </form>`, 'Account');
}

/* ---------- categories ---------- */
function openCats(type){ openSheet({kind:'cats', ctype:type||'expense'}); }
function renderCats(){
  const s=SH, list=catsOf(s.ctype,true);
  const used={}; allTxns().forEach(t=>{ if(t.cat) used[t.cat]=(used[t.cat]||0)+1; });
  keepScroll(()=>{ root().innerHTML = sheet(`${head('Categories','Tap one to rename, change its icon or colour, or hide it.')}
    <div style="padding:0 16px 8px"><div class="seg"><button data-act="ctype" data-v="expense" class="${s.ctype==='expense'?'on':''}">Expense</button><button data-act="ctype" data-v="income" class="${s.ctype==='income'?'on':''}">Income</button></div></div>
    <div class="sh-body sh-scroll" style="padding-top:4px"><div class="list flat">
      ${list.map(c=>`<button class="more-row" data-act="catedit" data-v="${c.id}"><span class="ic" style="--c:${c.c}">${ic(c.icon)}</span><span class="t"><b>${esc(c.name)}</b><span class="sub">${used[c.id]?used[c.id]+' entr'+(used[c.id]>1?'ies':'y'):'Not used yet'}${c.builtin?'':' · your category'}</span></span>${c.hidden?'<span class="tag warn">Hidden</span>':''}${ic('ChevronRight')}</button>`).join('')}
    </div><button class="btn wide" data-act="catedit" data-v="__new">${ic('Plus')}New ${s.ctype} category</button></div>`, 'Categories', 'tall'); });
}
function openCatEdit(id, type, keep){
  const c = id==='__new' ? {id:'__new', name:'', icon:'Tag', c:PALETTE[Math.floor(Math.random()*PALETTE.length)], type, hidden:false, builtin:false} : catOf(id);
  openSheet({kind:'catedit', id, ctype:c.type, draft:{name:c.name, icon:c.icon, c:c.c, hidden:!!c.hidden}, builtin:c.builtin, confirmDel:false, fromTxn:SH&&SH.kind==='txn'}, keep!==false);
}
function renderCatEdit(){
  const s=SH, d=s.draft, isNew=s.id==='__new';
  const used = !isNew && (allTxns().some(t=>t.cat===s.id) || (prefs().recurring||[]).some(r=>r.cat===s.id));
  keepScroll(()=>{ root().innerHTML = sheet(`${head(isNew?`New ${s.ctype} category`:'Edit category')}
    <div class="sh-body sh-scroll">
      <div class="row" style="gap:14px"><span class="ic big" style="--c:${d.c}">${ic(d.icon)}</span>
        <div class="field" style="flex:1"><label for="f_cn">NAME</label><input id="f_cn" value="${esc(d.name)}" maxlength="28" placeholder="e.g. Pet care" autocomplete="off"></div></div>
      <div class="field"><label>COLOUR</label><div class="swatches">${PALETTE.map(p=>`<button class="swatch ${d.c===p?'on':''}" data-act="ccolor" data-v="${p}" style="background:${p}" aria-label="Colour ${p}"></button>`).join('')}</div></div>
      <div class="field"><label>ICON</label><div class="icongrid">${PICK_ICONS.map(n=>`<button class="${d.icon===n?'on':''}" data-act="cicon" data-v="${n}" style="--c:${d.c}" aria-label="${n}">${ic(n)}</button>`).join('')}</div></div>
      ${!isNew?`<button class="more-row flat-row" data-act="chide"><span class="t"><b>Hide from the add screen</b><span class="sub">Past entries keep this category. You can unhide it anytime.</span></span><span class="sw ${d.hidden?'on':''}"><i></i></span></button>`:''}
      <button class="btn wide" data-act="csave">${isNew?'Create category':'Save'}</button>
      ${!isNew && !s.builtin ? (used?`<div class="sub">This category has entries, so it can only be hidden, not deleted.</div>`:`<button class="btn wide danger" data-act="cdel">${s.confirmDel?'Tap again to delete':'Delete category'}</button>`):''}
      ${!isNew && s.builtin ? `<button class="btn wide ghost" data-act="creset">Reset to original</button>`:''}
    </div>`, 'Edit category', 'tall'); });
}
function saveCat(){
  const s=SH, d=s.draft; const name=d.name.trim(); if(!name){ toast('Give the category a name.'); return; }
  let newId=null;
  setPrefs(P=>{
    if(s.id==='__new'){ newId=rid('c'); P.customCats=P.customCats||[]; P.customCats.push({id:newId, type:s.ctype, name, icon:d.icon, c:d.c, hidden:false}); }
    else if(s.builtin){ P.catEdits=P.catEdits||{}; P.catEdits[s.id]={name, icon:d.icon, c:d.c, hidden:d.hidden}; }
    else { const x=(P.customCats||[]).find(x=>x.id===s.id); if(x) Object.assign(x,{name, icon:d.icon, c:d.c, hidden:d.hidden}); }
  });
  const fromTxn=s.fromTxn; closeSheet();
  if(newId && fromTxn && SH && SH.kind==='txn'){ SH.cat=newId; rerenderSheet(); }
  toast(newId?`Added “${name}”`:'Category saved');
}

/* ---------- scheduled payments ---------- */
function openRules(keep){ openSheet({kind:'rules'}, keep); }
function renderRules(){
  const rules=(prefs().recurring||[]).slice().sort((a,b)=>ruleNext(a).localeCompare(ruleNext(b)));
  keepScroll(()=>{ root().innerHTML = sheet(`${head('Scheduled payments','Entries that add themselves on schedule, like rent, SIPs or salary.')}
    <div class="sh-body sh-scroll">
      ${rules.length?`<div class="list flat">${rules.map(r=>{ const c=r.type==='transfer'?catOf('__transfer'):catOf(r.cat); const nx=ruleNext(r); const ended=r.end&&nx>r.end;
        return `<button class="more-row" data-act="ruleedit" data-v="${r.id}"><span class="ic" style="--c:${c.c}">${ic(c.icon)}</span><span class="t"><b>${esc(r.note||c.name)}</b><span class="sub">${FREQ[r.freq]} · ${ended?'Ended':'next '+shortDay(nx)} · ${esc(accById(r.acct).name)}</span></span><span class="num ${r.type==='income'?'pos':''}" style="font-weight:800">${r.type==='expense'?'−':r.type==='income'?'+':''}${money(r.amt)}</span></button>`; }).join('')}</div>`
      : `<div class="empty"><b>Nothing scheduled yet</b>Add an entry and set Repeat to Monthly, Weekly or another frequency.</div>`}
      <button class="btn wide" data-act="rulenew">${ic('Plus')}New scheduled payment</button>
    </div>`, 'Scheduled payments', 'tall'); });
}
function renderRuleEdit(){
  const s=SH, r=(prefs().recurring||[]).find(x=>x.id===s.id); if(!r){ closeSheet(); return; }
  const c=r.type==='transfer'?catOf('__transfer'):catOf(r.cat);
  const cats = r.type==='transfer'?[]:catsOf(r.type,true);
  root().innerHTML = sheet(`${head('Edit scheduled payment', `${FREQ[r.freq]} since ${shortDay(r.start)} · next ${shortDay(ruleNext(r))}`)}
    <form class="sh-body sh-scroll" id="ruleform">
      <div class="field"><label for="f_ra">AMOUNT (₹)</label><input class="hero num" id="f_ra" inputmode="decimal" value="${r.amt}"></div>
      <div class="field"><label for="f_rn">NOTE</label><input id="f_rn" value="${esc(r.note||'')}" maxlength="120" placeholder="${esc(c.name)}"></div>
      ${r.type!=='transfer'?`<div class="field"><label for="f_rc">CATEGORY</label><select id="f_rc">${cats.map(x=>`<option value="${x.id}" ${x.id===r.cat?'selected':''}>${esc(x.name)}</option>`).join('')}</select></div>`:''}
      <div class="field"><label for="f_rac">ACCOUNT</label><select id="f_rac">${accounts().map(a=>`<option value="${a.id}" ${a.id===r.acct?'selected':''}>${esc(a.name)}</option>`).join('')}</select></div>
      <div class="field"><label for="f_rf">REPEATS</label><select id="f_rf">${Object.entries(FREQ).map(([k,l])=>`<option value="${k}" ${r.freq===k?'selected':''}>${l}</option>`).join('')}</select></div>
      <div class="field"><label for="f_re">ENDS ON (OPTIONAL)</label><input id="f_re" type="date" value="${r.end||''}"></div>
      <div class="sub">Changes apply to future entries. Entries already added stay as they are; edit those individually.</div>
      <button class="btn wide" type="submit">Save</button>
      <button class="btn wide danger" type="button" data-act="ruledel">${s.confirmDel?'Tap again to stop':'Stop repeating'}</button>
    </form>`, 'Scheduled payment', 'tall');
}

/* ---------- search & bulk edit ---------- */
function openSearch(f){ openSheet({kind:'search', f:Object.assign({q:'',type:'all',period:'all',from:'',to:'',cat:'',acct:'',label:''}, f||{}), sel:null, bulk:null, confirmDel:false}); }
function searchResults(){
  const f=SH.f, q=f.q.trim().toLowerCase();
  let lo='', hi='9999';
  if(f.period==='month'){ lo=S.ym+'-01'; hi=S.ym+'-31'; }
  else if(f.period==='year'){ lo=S.ym.slice(0,4)+'-01-01'; hi=S.ym.slice(0,4)+'-12-31'; }
  else if(f.period==='custom'){ lo=f.from||''; hi=f.to||'9999'; }
  return allTxns().filter(t=>{
    if(f.type!=='all' && t.type!==f.type) return false;
    if(t.date<lo || t.date>hi) return false;
    if(f.cat && t.cat!==f.cat) return false;
    if(f.acct && t.acct!==f.acct && t.to!==f.acct) return false;
    if(f.label && !(t.labels||[]).includes(f.label)) return false;
    if(q){ const hay=[t.note, catOf(t.cat).name, ...(t.labels||[]).map(l=>'#'+l), String(t.amt), accById(t.acct).name].join(' ').toLowerCase(); if(!hay.includes(q)) return false; }
    return true;
  });
}
function renderSearch(full){
  const s=SH, f=s.f, res=searchResults(), tt=totals(res);
  const shown=res.slice(0,300);
  const resultsHtml = `<div class="sub num" style="padding:2px 4px 6px">${res.length} entr${res.length===1?'y':'ies'}${tt.exp?` · spent ${money(tt.exp)}`:''}${tt.inc?` · received ${money(tt.inc)}`:''}${res.length>300?' · showing latest 300':''}</div>
    ${shown.length?groupedList(shown, s.sel):'<div class="empty"><b>No matches</b>Try a different word or clear a filter.</div>'}`;
  if(!full){ const el=document.getElementById('sres'); if(el){ el.innerHTML=resultsHtml; updBulkBar(); return; } }
  const opt=(v,l,cur)=>`<option value="${v}" ${cur===v?'selected':''}>${l}</option>`;
  const catOpts = ['expense','income'].map(ty=>`<optgroup label="${ty==='expense'?'Expense':'Income'}">${catsOf(ty,true).map(c=>opt(c.id,esc(c.name),f.cat)).join('')}</optgroup>`).join('');
  const labels=allLabels();
  const fchip=(id,iconN,label,active,opts)=>`<label class="chipf ${active?'onc':''}">${ic(iconN)}<span>${label}</span>${ic('ChevronDown')}<select id="${id}">${opts}</select></label>`;
  const perLabel={all:'All time',month:ymLabel(S.ym),year:S.ym.slice(0,4),custom:'Custom dates'}[f.period];
  keepScroll(()=>{ root().innerHTML = sheet(`${head('Search', '', `<button class="btn sm ${s.sel?'':'ghost'}" data-act="selmode">${s.sel?'Done':'Select'}</button>`)}
    <div style="padding:0 16px">
      <div class="searchbox">${ic('Search')}<input id="f_q" type="search" placeholder="Note, label, amount or category" value="${esc(f.q)}" autocomplete="off"></div>
      <div class="meta" style="justify-content:flex-start">
        ${fchip('f_sper','CalendarDays',perLabel,f.period!=='all',[opt('all','All time',f.period),opt('month',ymLabel(S.ym),f.period),opt('year',S.ym.slice(0,4),f.period),opt('custom','Custom dates',f.period)].join(''))}
        ${fchip('f_stype','ArrowLeftRight',{all:'All types',expense:'Expenses',income:'Income',transfer:'Transfers'}[f.type],f.type!=='all',[opt('all','All types',f.type),opt('expense','Expenses',f.type),opt('income','Income',f.type),opt('transfer','Transfers',f.type)].join(''))}
        ${fchip('f_scat','Shapes',f.cat?esc(catOf(f.cat).name):'All categories',!!f.cat,opt('','All categories',f.cat)+catOpts)}
        ${fchip('f_sacc','Wallet',f.acct?esc(accById(f.acct).name):'All accounts',!!f.acct,opt('','All accounts',f.acct)+accounts().map(a=>opt(a.id,esc(a.name),f.acct)).join(''))}
        ${labels.length?fchip('f_slbl','Tag',f.label?'#'+esc(f.label):'All labels',!!f.label,opt('','All labels',f.label)+labels.map(l=>opt(l,'#'+esc(l),f.label)).join('')):''}
      </div>
      ${f.period==='custom'?`<div class="row" style="gap:8px;margin-bottom:8px"><div class="field" style="flex:1"><label for="f_sfrom">FROM</label><input type="date" id="f_sfrom" value="${f.from}"></div><div class="field" style="flex:1"><label for="f_sto">TO</label><input type="date" id="f_sto" value="${f.to}"></div></div>`:''}
    </div>
    <div class="sh-mid sh-scroll" id="sres">${resultsHtml}</div>
    <div id="bulkbar"></div>`, 'Search', 'tall'); });
  updBulkBar();
}
function updBulkBar(){
  const el=document.getElementById('bulkbar'); if(!el) return; const s=SH;
  if(!s.sel){ el.innerHTML=''; return; }
  const n=s.sel.size;
  let panel='';
  if(s.bulk==='cat') panel=`<div class="bulkpanel"><div class="sub">Pick a category. Expense entries take expense categories, income entries take income ones.</div>${['expense','income'].map(ty=>`<div class="h2" style="margin:8px 0 4px">${ty}</div><div class="cats small">${catsOf(ty).map(c=>`<button class="cat" data-act="bcat" data-v="${c.id}" style="--c:${c.c}"><span class="ic">${ic(c.icon)}</span>${esc(c.name)}</button>`).join('')}</div>`).join('')}</div>`;
  else if(s.bulk==='acct') panel=`<div class="bulkpanel"><div class="lblrow">${accounts().map(a=>`<button class="lchip" data-act="bacct" data-v="${a.id}">${esc(a.name)}</button>`).join('')}</div></div>`;
  else if(s.bulk==='label') panel=`<div class="bulkpanel"><div class="lblrow">${allLabels().map(l=>`<button class="lchip" data-act="blbl" data-v="${esc(l)}">#${esc(l)}</button>`).join('')}</div><div class="row" style="gap:8px;margin-top:8px"><input class="note" id="f_blbl" placeholder="New label" maxlength="24" style="flex:1"><button class="btn sm" data-act="blbladd">Add</button></div></div>`;
  el.innerHTML = `${panel}<div class="bulkbar"><span class="sub" style="font-weight:800;color:var(--ink)">${n} selected</span><span class="spacer"></span>
    <button class="chipf" data-act="bsel" data-v="all">All</button>
    <button class="chipf ${s.bulk==='cat'?'onc':''}" data-act="bmode" data-v="cat" ${n?'':'disabled'}>${ic('Shapes')}</button>
    <button class="chipf ${s.bulk==='acct'?'onc':''}" data-act="bmode" data-v="acct" ${n?'':'disabled'}>${ic('Wallet')}</button>
    <button class="chipf ${s.bulk==='label'?'onc':''}" data-act="bmode" data-v="label" ${n?'':'disabled'}>${ic('Tag')}</button>
    <button class="chipf" data-act="bdel" ${n?'':'disabled'} style="color:var(--neg)${s.confirmDel?';background:var(--neg);color:#fff':''}">${ic('Trash2')}${s.confirmDel?'<span>Confirm</span>':''}</button></div>`;
}
function bulkApply(fn, msg){
  let n=0; for(const id of SH.sel){ const t=L.txns[id]; if(!t||t.deleted) continue; const u=fn({...t, labels:[...(t.labels||[])]}); if(u){ putTxnRaw(u); n++; } }
  SH.bulk=null; SH.sel=new Set(); SH.confirmDel=false; commit(); toast(msg(n));
}

/* ---------- passcode ---------- */
function openPin(){ openSheet({kind:'pin', step:1, a:'', b:''}); }
function renderPin(){
  const s=SH, cur=s.step===1?s.a:s.b;
  root().innerHTML = sheet(`${head(s.step===1?'Choose a 4-digit passcode':'Enter it again', 'Stored only on this device. If you forget it, sign out and back in.')}
    <div class="sh-body" style="align-items:center"><div class="dots">${[0,1,2,3].map(i=>`<i class="${i<cur.length?'on':''}"></i>`).join('')}</div><div class="sub" id="pinmsg">${s.msg||'&nbsp;'}</div></div>
    <div class="keys">${['1','2','3','4','5','6','7','8','9','','0','⌫'].map(k=>k?`<button data-act="pkey" data-v="${k}" class="num">${k==='⌫'?ic('Delete'):k}</button>`:'<span></span>').join('')}</div>`, 'Passcode');
}
async function pinKey2(k){
  const s=SH; const f=s.step===1?'a':'b';
  if(k==='⌫') s[f]=s[f].slice(0,-1); else if(s[f].length<4) s[f]+=k;
  s.msg='';
  if(s[f].length===4){
    if(s.step===1){ s.step=2; }
    else if(s.a===s.b){ store.set(pinKey(), await hashPin(s.a)); closeSheet(); render(); toast('Passcode lock is on'); return; }
    else { s.step=1; s.a=''; s.b=''; s.msg='Codes didn’t match. Start again.'; }
  }
  renderPin();
}

/* ---------- CSV export / import ---------- */
async function saveFile(filename, data){
  const blob = new Blob([data], {type:'text/csv'});
  const file = new File([blob], filename, {type:'text/csv'});
  if(navigator.canShare && navigator.canShare({files:[file]}) && /iPhone|iPad|Android/i.test(navigator.userAgent)){
    try{ await navigator.share({files:[file], title:filename}); return; }catch(e){ if(e.name==='AbortError') return; }
  }
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
}
async function exportCSV(){
  const rows=[['Date','Type','Category','Account','To account','Amount (INR)','Note','Labels']];
  allTxns().slice().reverse().forEach(t=>rows.push([t.date,t.type,t.type==='transfer'?'':catOf(t.cat).name,accById(t.acct).name,t.to?accById(t.to).name:'',t.type==='expense'?-t.amt:t.amt,t.note||'',(t.labels||[]).join('; ')]));
  const csv=rows.map(r=>r.map(v=>{ v=String(v); return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v; }).join(',')).join('\n');
  try{ await saveFile(`kharcha-transactions-${todayS()}.csv`, csv); }catch(e){ toast('Couldn’t export. Try again.'); }
}
function parseCSV(text){
  const rows=[]; let row=[], f='', q=false;
  for(let i=0;i<text.length;i++){ const c=text[i];
    if(q){ if(c==='"'){ if(text[i+1]==='"'){ f+='"'; i++; } else q=false; } else f+=c; }
    else if(c==='"') q=true; else if(c===','){ row.push(f); f=''; } else if(c==='\n'||c==='\r'){ if(c==='\r'&&text[i+1]==='\n') i++; row.push(f); rows.push(row); row=[]; f=''; } else f+=c; }
  if(f!==''||row.length){ row.push(f); rows.push(row); }
  return rows.filter(r=>r.some(x=>x.trim()!==''));
}
async function importCSV(file){
  const rows=parseCSV(await file.text()); const hd=(rows.shift()||[]).map(h=>h.trim().toLowerCase());
  const col=n=>hd.findIndex(h=>h.startsWith(n));
  const ci={date:col('date'),type:col('type'),cat:col('category'),acct:col('account'),to:col('to account'),amt:col('amount'),note:col('note'),lbl:col('label')};
  if(ci.date<0||ci.amt<0||ci.type<0){ toast('That file doesn’t look like a Kharcha export.'); return; }
  const byName={}; Object.values(CAT).forEach(c=>byName[c.type+':'+c.name.toLowerCase()]=c.id);
  const accs=accounts().map(a=>({...a})); let newAcc=false;
  const accId=name=>{ name=(name||'').trim()||'Bank account'; let a=accs.find(x=>x.name.toLowerCase()===name.toLowerCase()); if(!a){ a={id:rid('a'),name,kind:'bank',opening:0}; accs.push(a); newAcc=true; } return a.id; };
  const out=[];
  for(const r of rows){
    const date=(r[ci.date]||'').trim(); const type=(r[ci.type]||'').trim().toLowerCase(); const amt=Math.abs(num(r[ci.amt]));
    if(!/^\d{4}-\d{2}-\d{2}$/.test(date) || !['expense','income','transfer'].includes(type) || !(amt>0)) continue;
    const catName=(r[ci.cat]||'').trim().toLowerCase();
    out.push({id:newId(), type, amt, cat: type==='transfer'?null:(byName[type+':'+catName] || (type==='income'?'otherin':'other')), acct:accId(r[ci.acct]), to: type==='transfer'?accId(r[ci.to]):null, note:(r[ci.note]||'').trim(), labels: ci.lbl>=0?(r[ci.lbl]||'').split(';').map(cleanLabel).filter(Boolean):[], date, at:Date.now()});
  }
  if(!out.length){ toast('No entries found in that file.'); return; }
  openSheet({kind:'import', rows:out, accs, newAcc});
}
function renderImport(){
  const s=SH, ds=s.rows.map(t=>t.date).sort();
  root().innerHTML=sheet(`${head(`Import ${s.rows.length} entries?`)}<div class="sh-body"><div class="sub">From ${shortDay(ds[0])} to ${shortDay(ds[ds.length-1])}. Importing the same file twice creates duplicates.</div><button class="btn wide" data-act="doimport">Import ${s.rows.length} entries</button></div>`, 'Import');
}

let toastT=null;
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.hidden=false; clearTimeout(toastT); toastT=setTimeout(()=>t.hidden=true,2800); }

/* ---------- events ---------- */
document.addEventListener('click', e=>{
  if(e.target.type==='date' && e.target.showPicker){ try{ e.target.showPicker(); }catch(_){} }
  const el=e.target.closest('[data-act]'); if(!el || el.disabled) return;
  const a=el.dataset.act, v=el.dataset.v;
  if(a==='scrim'){ if(e.target===el) closeAll(); return; }
  switch(a){
    case 'tab': S.tab=v; store.set('k_tab',v); window.scrollTo(0,0); render(); break;
    case 'mprev': S.ym=addMonth(S.ym, yearMode()?-12:-1); S.calDay=null; render(); break;
    case 'mnext': S.ym=addMonth(S.ym, yearMode()?12:1); S.calDay=null; render(); break;
    case 'day': S.calDay = S.calDay===v ? null : v; render(); break;
    case 'ov': S.ovType=v; render(); break;
    case 'ovp': S.ovPeriod=v; render(); break;
    case 'ovcat': openSearch({cat:v, period:S.ovPeriod}); break;
    case 'acctpick': S.acct = S.acct===v ? null : v; render(); break;
    case 'search': openSearch(); break;
    case 'hide': store.set('k_hide', store.get('k_hide')==='1'?null:'1'); applyHide(); render(); break;
    case 'theme': store.set('k_theme', v==='system'?null:v); applyTheme(); render(); break;
    case 'pin': if(store.get(pinKey())){ store.set(pinKey(), null); render(); toast('Passcode lock is off'); } else openPin(); break;
    case 'pkey': pinKey2(v); break;
    case 'lkey': lockKey(v); break;
    case 'lockforgot': S.locked=false; renderLock(); store.set(pinKey(), null); SB.auth.signOut(); break;
    case 'add': openTxn({date: (S.tab==='calendar' && S.calDay) ? S.calDay : (S.ym===curYM()?todayS():`${S.ym}-01`)}); break;
    case 'addon': openTxn({date:v}); break;
    case 'edit': editTxn(el.dataset.id); break;
    case 'close': closeSheet(); break;
    case 'ttype': SH.type=v; SH.cat=null; SH.confirmDel=false; rerenderSheet(); break;
    case 'pcat': SH.cat=v; document.querySelectorAll('.cat').forEach(c=>c.classList.toggle('on',c.dataset.v===v)); updSave(); break;
    case 'key': keyIn(v); break;
    case 'dtoday': SH.date=todayS(); rerenderSheet(); break;
    case 'dyest': SH.date=yest(); rerenderSheet(); break;
    case 'lbltoggle': SH.showLabels=!SH.showLabels; rerenderSheet(); break;
    case 'lbl': { const i=SH.labels.indexOf(v); if(i>=0) SH.labels.splice(i,1); else SH.labels.push(v); rerenderSheet(); break; }
    case 'lbladd': { const inp=document.getElementById('f_lbl'); const l=cleanLabel(inp&&inp.value); if(l && !SH.labels.includes(l)) SH.labels.push(l); rerenderSheet(); break; }
    case 'savetx': saveTxn(); break;
    case 'dup': { const s=SH; closeSheet(); openTxn({type:s.type, amt:s.amt, cat:s.cat, acct:s.acct, to:s.to, note:s.note, labels:[...s.labels], date:todayS()}, !!SH); toast('Copy ready. Check the date, then save.'); break; }
    case 'del':
      if(!SH.confirmDel){ SH.confirmDel=true; rerenderSheet(); }
      else { const id=SH.id; closeSheet(); delTxn(id); toast('Entry deleted'); }
      break;
    case 'catnew': openCatEdit('__new', v); break;
    case 'bud': openBudget(v); break;
    case 'bsug': document.getElementById('f_bud').value=v; break;
    case 'bclear': saveBudget(0); break;
    case 'keepbud': { const bf=budgetFor(S.ym); if(bf){ putBudget(S.ym, clone(bf.b)); toast(`Budget saved for ${ymLabel(S.ym)}`);} break; }
    case 'acc': openAccount(el.dataset.id); break;
    case 'adel': {
      if(!SH.confirmDel){ SH.confirmDel=true; rerenderSheet(); break; }
      const id=SH.id; closeSheet(); if(S.acct===id) S.acct=null; saveSettings({accounts:accounts().filter(x=>x.id!==id).map(x=>({...x}))}); toast('Account deleted'); break; }
    case 'cats': openCats(); break;
    case 'ctype': SH.ctype=v; rerenderSheet(); break;
    case 'catedit': openCatEdit(v, SH.ctype); break;
    case 'ccolor': SH.draft.c=v; rerenderSheet(); break;
    case 'cicon': SH.draft.icon=v; rerenderSheet(); break;
    case 'chide': SH.draft.hidden=!SH.draft.hidden; rerenderSheet(); break;
    case 'csave': saveCat(); break;
    case 'creset': { const id=SH.id; setPrefs(P=>{ if(P.catEdits) delete P.catEdits[id]; }); closeSheet(); toast('Category reset'); break; }
    case 'cdel': { if(!SH.confirmDel){ SH.confirmDel=true; rerenderSheet(); break; } const id=SH.id; setPrefs(P=>{ P.customCats=(P.customCats||[]).filter(x=>x.id!==id); }); closeSheet(); toast('Category deleted'); break; }
    case 'rules': openRules(!!SH); break;
    case 'rulenew': openTxn({repeat:'monthly'}, true); break;
    case 'ruleedit': openSheet({kind:'ruleedit', id:v, confirmDel:false}, true); break;
    case 'ruledel': { if(!SH.confirmDel){ SH.confirmDel=true; rerenderSheet(); break; } const id=SH.id; setPrefs(P=>{ P.recurring=(P.recurring||[]).filter(r=>r.id!==id); }); closeSheet(); toast('Stopped. Past entries are kept.'); break; }
    case 'selmode': SH.sel = SH.sel ? null : new Set(); SH.bulk=null; SH.confirmDel=false; rerenderSheet(); break;
    case 'selrow': { const id=el.dataset.id; SH.sel.has(id)?SH.sel.delete(id):SH.sel.add(id); SH.confirmDel=false; renderSearch(false); break; }
    case 'bsel': { const ids=searchResults().map(t=>t.id); SH.sel = SH.sel.size===ids.length ? new Set() : new Set(ids); renderSearch(false); break; }
    case 'bmode': SH.bulk = SH.bulk===v ? null : v; SH.confirmDel=false; updBulkBar(); break;
    case 'bcat': { const c=catOf(v); bulkApply(t=> t.type===c.type ? {...t, cat:v} : null, n=>`Moved ${n} entr${n===1?'y':'ies'} to ${c.name}`); break; }
    case 'bacct': bulkApply(t=>({...t, acct:v}), n=>`Moved ${n} entr${n===1?'y':'ies'} to ${accById(v).name}`); break;
    case 'blbl': bulkApply(t=> t.labels.includes(v)?null:{...t, labels:[...t.labels, v]}, n=>`Labelled ${n} entr${n===1?'y':'ies'} #${v}`); break;
    case 'blbladd': { const l=cleanLabel(document.getElementById('f_blbl').value); if(l) bulkApply(t=> t.labels.includes(l)?null:{...t, labels:[...t.labels, l]}, n=>`Labelled ${n} entr${n===1?'y':'ies'} #${l}`); break; }
    case 'bdel': { if(!SH.confirmDel){ SH.confirmDel=true; updBulkBar(); break; } const n=SH.sel.size; for(const id of SH.sel) delTxnRaw(id); SH.sel=new Set(); SH.confirmDel=false; commit(); toast(`Deleted ${n} entr${n===1?'y':'ies'}`); break; }
    case 'export': exportCSV(); break;
    case 'sync': syncNow().then(render); break;
    case 'signout': SB.auth.signOut(); break;
    case 'authmode': S.authMode = S.authMode==='signup'?'signin':'signup'; S.authMsg=''; render(); break;
    case 'doimport': { const {rows,accs,newAcc}=SH; closeSheet(); if(newAcc) L.accounts=accs, putSettings({accounts:accs}, true); rows.forEach(t=>putTxnRaw(t)); commit(); toast(`Imported ${rows.length} entries`); break; }
  }
});
document.addEventListener('change', e=>{
  const id=e.target.id, val=e.target.value;
  if(id==='f_import' && e.target.files[0]){ importCSV(e.target.files[0]); e.target.value=''; return; }
  if(id==='f_acctfilter'){ S.acct=val||null; render(); return; }
  if(!SH) return;
  if(id==='f_date' && val){ SH.date=val; rerenderSheet(); }
  if(id==='f_acct'){ SH.acct=val; rerenderSheet(); }
  if(id==='f_to'){ SH.to=val; rerenderSheet(); }
  if(id==='f_rep'){ SH.repeat=val; rerenderSheet(); }
  const fmap={f_sper:'period',f_stype:'type',f_scat:'cat',f_sacc:'acct',f_slbl:'label',f_sfrom:'from',f_sto:'to'};
  if(fmap[id] && SH.kind==='search'){ SH.f[fmap[id]]=val; SH.sel && (SH.sel=new Set()); renderSearch(true); }
});
document.addEventListener('input', e=>{
  if(!SH) return; const id=e.target.id;
  if(id==='f_note') SH.note=e.target.value;
  if(id==='f_cn') SH.draft.name=e.target.value;
  if(id==='f_q'){ SH.f.q=e.target.value; renderSearch(false); }
});
document.addEventListener('submit', e=>{
  e.preventDefault();
  const id=e.target.id;
  if(id==='authform'){ doAuth(); return; }
  if(id==='budform'){ const v=num(document.getElementById('f_bud').value); saveBudget(v>0?Math.round(v*100)/100:0); }
  if(id==='accform'){
    const name=document.getElementById('f_an').value.trim(); if(!name){ toast('Give the account a name.'); return; }
    const kind=document.getElementById('f_ak').value; const opening=num(document.getElementById('f_ao').value);
    const list=accounts().map(x=>({...x})); const i=list.findIndex(x=>x.id===SH.id);
    const rec={id:SH.id,name,kind,opening}; if(i>=0) list[i]=rec; else list.push(rec);
    closeSheet(); saveSettings({accounts:list}); toast('Account saved');
  }
  if(id==='ruleform'){
    const amt=num(document.getElementById('f_ra').value); if(!(amt>0)){ toast('Enter an amount above zero.'); return; }
    const rid_=SH.id; const g=i=>document.getElementById(i);
    setPrefs(P=>{ const r=(P.recurring||[]).find(x=>x.id===rid_); if(!r) return;
      r.amt=Math.round(amt*100)/100; r.note=g('f_rn').value.trim(); if(g('f_rc')) r.cat=g('f_rc').value; r.acct=g('f_rac').value; r.end=g('f_re').value||null;
      if(g('f_rf').value!==r.freq){ r.freq=g('f_rf').value; if(r.last){ r.start=r.last; } } });
    closeSheet(); toast('Scheduled payment updated');
  }
});
document.addEventListener('keydown', e=>{
  if(S.locked){ if(/^[0-9]$/.test(e.key)) lockKey(e.key); else if(e.key==='Backspace') lockKey('⌫'); return; }
  if(!SH) return;
  if(e.key==='Escape'){ closeSheet(); return; }
  const tag=document.activeElement && document.activeElement.tagName;
  if(e.key==='Enter' && document.activeElement && document.activeElement.id==='f_lbl'){ e.preventDefault(); document.querySelector('[data-act=lbladd]').click(); return; }
  if(e.key==='Enter' && document.activeElement && document.activeElement.id==='f_blbl'){ e.preventDefault(); document.querySelector('[data-act=blbladd]').click(); return; }
  if(SH.kind==='pin'){ if(/^[0-9]$/.test(e.key)) pinKey2(e.key); else if(e.key==='Backspace') pinKey2('⌫'); return; }
  if(SH.kind!=='txn' || ['INPUT','SELECT','TEXTAREA'].includes(tag)) return;
  if(/^[0-9.]$/.test(e.key)){ keyIn(e.key); e.preventDefault(); }
  else if(e.key==='Backspace'){ keyIn('⌫'); e.preventDefault(); }
  else if(e.key==='Enter'){ saveTxn(); e.preventDefault(); }
});

boot();
