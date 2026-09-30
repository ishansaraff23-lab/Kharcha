
const ICONS = {"Utensils": "<path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\"/><path d=\"M7 2v20\"/><path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\"/>", "ShoppingBasket": "<path d=\"m15 11-1 9\"/><path d=\"m19 11-4-7\"/><path d=\"M2 11h20\"/><path d=\"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4\"/><path d=\"M4.5 15.5h15\"/><path d=\"m5 11 4-7\"/><path d=\"m9 11 1 9\"/>", "TramFront": "<rect width=\"16\" height=\"16\" x=\"4\" y=\"3\" rx=\"2\"/><path d=\"M4 11h16\"/><path d=\"M12 3v8\"/><path d=\"m8 19-2 3\"/><path d=\"m18 22-2-3\"/><path d=\"M8 15h.01\"/><path d=\"M16 15h.01\"/>", "Car": "<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><path d=\"M9 17h6\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/>", "House": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>", "Receipt": "<path d=\"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z\"/><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\"/><path d=\"M12 17.5v-11\"/>", "Sofa": "<path d=\"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3\"/><path d=\"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z\"/><path d=\"M4 18v2\"/><path d=\"M20 18v2\"/><path d=\"M12 4v9\"/>", "UserRound": "<circle cx=\"12\" cy=\"8\" r=\"5\"/><path d=\"M20 21a8 8 0 0 0-16 0\"/>", "ShoppingBag": "<path d=\"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\"/><path d=\"M3 6h18\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/>", "HeartPulse": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/><path d=\"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\"/>", "Drama": "<path d=\"M10 11h.01\"/><path d=\"M14 6h.01\"/><path d=\"M18 6h.01\"/><path d=\"M6.5 13.1h.01\"/><path d=\"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3\"/><path d=\"M17.4 9.9c-.8.8-2 .8-2.8 0\"/><path d=\"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7\"/><path d=\"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4\"/>", "Plane": "<path d=\"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z\"/>", "Gift": "<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\"/><path d=\"M12 8v13\"/><path d=\"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7\"/><path d=\"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5\"/>", "Flower2": "<path d=\"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/><path d=\"M12 10v12\"/><path d=\"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z\"/><path d=\"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z\"/>", "GraduationCap": "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\"/><path d=\"M22 10v6\"/><path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\"/>", "Dumbbell": "<path d=\"M14.4 14.4 9.6 9.6\"/><path d=\"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z\"/><path d=\"m21.5 21.5-1.4-1.4\"/><path d=\"M3.9 3.9 2.5 2.5\"/><path d=\"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z\"/>", "ShieldCheck": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/>", "PiggyBank": "<path d=\"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z\"/><path d=\"M2 9v1c0 1.1.9 2 2 2h1\"/><path d=\"M16 11h.01\"/>", "Briefcase": "<path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"/>", "CircleEllipsis": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M17 12h.01\"/><path d=\"M12 12h.01\"/><path d=\"M7 12h.01\"/>", "Wallet": "<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"/>", "Store": "<path d=\"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7\"/><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><path d=\"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4\"/><path d=\"M2 7h20\"/><path d=\"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7\"/>", "Percent": "<line x1=\"19\" x2=\"5\" y1=\"5\" y2=\"19\"/><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"/>", "RotateCcw": "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/>", "CirclePlus": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 12h8\"/><path d=\"M12 8v8\"/>", "Landmark": "<line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\"/><line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\"/><line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\"/><line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\"/><line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\"/><polygon points=\"12 2 20 7 4 7\"/>", "CreditCard": "<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/><line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\"/>", "Banknote": "<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M6 12h.01M18 12h.01\"/>", "ArrowLeftRight": "<path d=\"M8 3 4 7l4 4\"/><path d=\"M4 7h16\"/><path d=\"m16 21 4-4-4-4\"/><path d=\"M20 17H4\"/>", "CalendarDays": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/><path d=\"M8 14h.01\"/><path d=\"M12 14h.01\"/><path d=\"M16 14h.01\"/><path d=\"M8 18h.01\"/><path d=\"M12 18h.01\"/><path d=\"M16 18h.01\"/>", "ChartPie": "<path d=\"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z\"/><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"/>", "Target": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>", "Ellipsis": "<circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/>", "ChevronLeft": "<path d=\"m15 18-6-6 6-6\"/>", "ChevronRight": "<path d=\"m9 18 6-6-6-6\"/>", "X": "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>", "Plus": "<path d=\"M5 12h14\"/><path d=\"M12 5v14\"/>", "Trash2": "<path d=\"M3 6h18\"/><path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\"/><path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\"/><line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\"/><line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\"/>", "Download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\"/>", "Pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/><path d=\"m15 5 4 4\"/>", "Check": "<path d=\"M20 6 9 17l-5-5\"/>", "Delete": "<path d=\"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z\"/><path d=\"m12 9 6 6\"/><path d=\"m18 9-6 6\"/>", "Coins": "<circle cx=\"8\" cy=\"8\" r=\"6\"/><path d=\"M18.09 10.37A6 6 0 1 1 10.34 18\"/><path d=\"M7 6h1v4\"/><path d=\"m16.71 13.88.7.71-2.82 2.82\"/>", "Smartphone": "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\"/><path d=\"M12 18h.01\"/>", "ArrowDownLeft": "<path d=\"M17 7 7 17\"/><path d=\"M17 17H7V7\"/>", "ArrowUpRight": "<path d=\"M7 7h10v10\"/><path d=\"M7 17 17 7\"/>", "Trophy": "<path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\"/><path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\"/><path d=\"M4 22h16\"/><path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\"/><path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\"/><path d=\"M18 2H6v7a6 6 0 0 0 12 0V2Z\"/>", "Shapes": "<path d=\"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"3.5\"/>"};
const ic = (n, cls='i') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||''}</svg>`;

const EXP = [
  ['food','Food & Drink','Utensils','#EF8B3A'],
  ['groceries','Groceries','ShoppingBasket','#E2A564'],
  ['bills','Bills & Fees','Receipt','#3FBFA4'],
  ['rent','Rent','House','#D0600E'],
  ['transport','Transport','TramFront','#D9B01E'],
  ['car','Car & Fuel','Car','#4F9FE0'],
  ['shopping','Shopping','ShoppingBag','#D35FD0'],
  ['family','Family & Personal','UserRound','#3E9BE0'],
  ['home','Home','Sofa','#B08B53'],
  ['health','Healthcare','HeartPulse','#E2536A'],
  ['entertainment','Entertainment','Drama','#F0A12E'],
  ['travel','Travel','Plane','#EC5487'],
  ['gifts','Gifts','Gift','#26A862'],
  ['beauty','Beauty','Flower2','#8A57D6'],
  ['education','Education','GraduationCap','#3C78B5'],
  ['fitness','Fitness','Dumbbell','#E4572E'],
  ['sport','Sport & Hobbies','Trophy','#2FB0C6'],
  ['insurance','Insurance','ShieldCheck','#72B83A'],
  ['invest','Investments','PiggyBank','#2E9A6A'],
  ['work','Work','Briefcase','#687A90'],
  ['misc','Misc','Shapes','#9B7FB8'],
  ['other','Other','CircleEllipsis','#8F989F'],
];
const INC = [
  ['salary','Salary','Wallet','#14A870'],
  ['business','Business','Store','#2A9D8F'],
  ['interest','Interest & Dividends','Percent','#4C9F70'],
  ['giftin','Gifts received','Gift','#6DBB6F'],
  ['refund','Refunds','RotateCcw','#4F97CF'],
  ['otherin','Other income','CirclePlus','#86A96E'],
];
const CAT = {}; [...EXP,...INC].forEach(([id,name,icon,c])=>CAT[id]={id,name,icon,c});
CAT.__transfer = {id:'__transfer',name:'Transfer',icon:'ArrowLeftRight',c:'#7C8A93'};
const ACC_ICON = {cash:'Banknote',bank:'Landmark',card:'CreditCard',wallet:'Smartphone'};
const ACC_KIND = {cash:'Cash',bank:'Bank account',card:'Credit card',wallet:'UPI / wallet'};
const DEFAULT_ACCOUNTS = [
  {id:'bank',name:'Bank account',kind:'bank',opening:0},
  {id:'cash',name:'Cash',kind:'cash',opening:0},
  {id:'card',name:'Credit card',kind:'card',opening:0},
];

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
const dayLabel = s => { const t=todayS(); if(s===t) return 'Today'; const y=new Date(); y.setDate(y.getDate()-1); if(s===ymd(y)) return 'Yesterday'; const d=parseD(s); return `${WD[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`; };
const shortDay = s => { const t=todayS(); if(s===t) return 'Today'; const y=new Date(); y.setDate(y.getDate()-1); if(s===ymd(y)) return 'Yesterday'; const d=parseD(s); return `${d.getDate()} ${MONTHS[d.getMonth()]}${d.getFullYear()!==new Date().getFullYear()?' '+d.getFullYear():''}`; };
const nf = new Intl.NumberFormat('en-IN',{maximumFractionDigits:2});
const money = n => '₹' + nf.format(Math.abs(Math.round(n*100)/100));
const smoney = n => (n<0?'−':'') + money(n);
const kfmt = n => { n=Math.round(n); if(n<1000) return String(n); if(n<100000) return (n/1000).toFixed(n<10000?1:0).replace(/\.0$/,'')+'k'; return (n/100000).toFixed(1).replace(/\.0$/,'')+'L'; };
const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clone = o => JSON.parse(JSON.stringify(o||{}));
const newId = () => 't' + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
const store = { get(k){ try{return localStorage.getItem(k)}catch(e){return null} }, set(k,v){ try{localStorage.setItem(k,v)}catch(e){} } };

const accounts = () => (S.settings && Array.isArray(S.settings.accounts) && S.settings.accounts.length) ? S.settings.accounts : DEFAULT_ACCOUNTS;
const accById = id => accounts().find(a=>a.id===id) || {id, name:'Deleted account', kind:'bank', opening:0};
const txnsOf = ym => Object.values((S.months[ym]&&S.months[ym].txns)||{}).sort((a,b)=> b.date.localeCompare(a.date) || (b.at||0)-(a.at||0));
const allTxns = () => Object.keys(S.months).flatMap(k=>txnsOf(k));
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
  for(const t of allTxns()){
    if(t.type==='expense') bal[t.acct]=(bal[t.acct]||0)-t.amt;
    else if(t.type==='income') bal[t.acct]=(bal[t.acct]||0)+t.amt;
    else { bal[t.acct]=(bal[t.acct]||0)-t.amt; bal[t.to]=(bal[t.to]||0)+t.amt; }
  }
  return bal;
}
const barCls = p => p>1 ? 'over' : p>=.8 ? 'warn' : 'ok';

/* ---------- state ---------- */
const S = {
  mode:'loading',          // loading | auth | ready | nocfg
  months:{},               // derived: 'YYYY-MM' -> {txns:{id:txn}, budget:{total, cats:{}}}
  settings:null,
  tab: (['home','calendar','overview','budgets','more'].includes(store.get('k_tab'))? store.get('k_tab') : 'home'),
  ym: curYM(),
  calDay: todayS(),
  ovType:'expense',
  sync:{state:'idle', at:null, err:null},
  authMsg:'', authBusy:false, authMode:'signin', email:'',
};
const CFG = window.KHARCHA_CONFIG || {};
let SB=null, UID=null;
const DL = { save: async ({filename,data}) => {
  const blob = new Blob([data], {type:'text/csv'});
  const file = new File([blob], filename, {type:'text/csv'});
  if(navigator.canShare && navigator.canShare({files:[file]}) && /iPhone|iPad|Android/i.test(navigator.userAgent)){
    try{ await navigator.share({files:[file], title:filename}); return {status:'saved'}; }catch(e){ if(e.name==='AbortError') throw {code:'declined'}; }
  }
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000); return {status:'saved'};
}};

/* Local copy of everything (works offline) + outbox of unsynced changes */
let L = null;
const lkey = () => 'kharcha:v1:'+UID;
function loadLocal(){
  let o=null; try{ o=JSON.parse(localStorage.getItem(lkey())||'null'); }catch(e){}
  L = Object.assign({txns:{}, budgets:{}, accounts:null, lastSync:null, outbox:{}}, o||{});
}
function persist(){ try{ localStorage.setItem(lkey(), JSON.stringify(L)); }catch(e){ console.error(e); toast('Phone storage is full. Export your data and clear old entries.'); } }
function rebuild(){
  const m={};
  for(const t of Object.values(L.txns)){ if(t.deleted) continue; const k=t.date.slice(0,7); (m[k]=m[k]||{txns:{}}).txns[t.id]=t; }
  for(const [ym,b] of Object.entries(L.budgets)){ if(b.deleted) continue; (m[ym]=m[ym]||{txns:{}}).budget={total:+b.total||0, cats:b.cats||{}}; }
  S.months=m; S.settings = L.accounts ? {accounts:L.accounts} : null;
}
const nowIso = () => new Date().toISOString();
function queue(table, key, row){ L.outbox[table+':'+key] = {table, row}; }
function commit(){ persist(); rebuild(); render(); flushSoon(); }

function putTxn(t){ const r={...t, updated_at:nowIso(), deleted:false}; L.txns[t.id]=r; queue('txns', t.id, r); commit(); }
function delTxn(id){ const t=L.txns[id]; if(!t) return; const r={...t, updated_at:nowIso(), deleted:true}; L.txns[id]=r; queue('txns', id, r); commit(); }
function putBudget(ym, b){ const r={ym, total:+b.total||0, cats:b.cats||{}, updated_at:nowIso()}; L.budgets[ym]=r; queue('budgets', ym, r); commit(); }
function saveSettings(next){ L.accounts=next.accounts; L.accountsAt=nowIso(); queue('settings','me',{accounts:next.accounts, updated_at:L.accountsAt}); commit(); }
// compatibility with the month-based helpers used by the screens
function modifyMonth(key, fn){
  const before = clone(S.months[key]||{txns:{}}); const after = clone(before); if(!after.txns) after.txns={};
  fn(after);
  for(const id of Object.keys(before.txns||{})) if(!after.txns[id]) delTxn(id);
  for(const [id,t] of Object.entries(after.txns)) if(JSON.stringify(t)!==JSON.stringify(before.txns[id])) putTxn(t);
  if(after.budget && JSON.stringify(after.budget)!==JSON.stringify(before.budget)) putBudget(key, after.budget);
  return Promise.resolve();
}

/* ---------- sync with Supabase ---------- */
const toRow = (table,r) => table==='txns'
  ? {id:r.id, user_id:UID, type:r.type, amt:r.amt, cat:r.cat||null, acct:r.acct, to_acct:r.to||null, note:r.note||'', date:r.date, created_ms:r.at||null, updated_at:r.updated_at, deleted:!!r.deleted}
  : table==='budgets' ? {user_id:UID, ym:r.ym, total:r.total, cats:r.cats, updated_at:r.updated_at}
  : {user_id:UID, accounts:r.accounts, updated_at:r.updated_at};
const fromTxn = x => ({id:x.id, type:x.type, amt:+x.amt, cat:x.cat, acct:x.acct, to:x.to_acct, note:x.note||'', date:x.date, at:+x.created_ms||0, updated_at:x.updated_at, deleted:x.deleted});
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
  let since = L.lastSync, maxSeen = since;
  for(let from=0;;from+=1000){
    let q = SB.from('txns').select('*').order('server_at',{ascending:true}).range(from, from+999);
    if(since) q = q.gt('server_at', new Date(new Date(since).getTime()-60000).toISOString());
    const {data, error} = await q; if(error) throw error;
    for(const x of data){
      if(L.outbox['txns:'+x.id]) continue;
      const loc=L.txns[x.id];
      if(!loc || !loc.updated_at || x.updated_at >= loc.updated_at) L.txns[x.id]=fromTxn(x);
      if(!maxSeen || x.server_at > maxSeen) maxSeen = x.server_at;
    }
    if(data.length<1000) break;
  }
  const b = await SB.from('budgets').select('*'); if(b.error) throw b.error;
  for(const x of b.data){ if(L.outbox['budgets:'+x.ym]) continue; const loc=L.budgets[x.ym]; if(!loc || x.updated_at>=loc.updated_at) L.budgets[x.ym]={ym:x.ym,total:+x.total,cats:x.cats||{},updated_at:x.updated_at}; }
  const s = await SB.from('settings').select('*').maybeSingle(); if(s.error) throw s.error;
  if(s.data && !L.outbox['settings:me'] && (!L.accountsAt || s.data.updated_at>=L.accountsAt)){ L.accounts=s.data.accounts; L.accountsAt=s.data.updated_at; }
  L.lastSync = maxSeen; persist();
}
async function syncNow(){
  if(!SB || !UID || flushing) return;
  if(!navigator.onLine){ S.sync={...S.sync, state:'offline'}; renderIfMore(); return; }
  flushing=true; S.sync={...S.sync, state:'syncing'};
  try{ await flush(); await pull(); await flush(); S.sync={state:'ok', at:Date.now(), err:null}; rebuild(); render(); }
  catch(e){ console.error(e); S.sync={...S.sync, state:'error', err:(e&&e.message)||'Sync failed'}; renderIfMore(); }
  finally{ flushing=false; }
}
function renderIfMore(){ if(S.tab==='more' && !SH) render(); }
const pending = () => L ? Object.keys(L.outbox).length : 0;

async function startSession(user){
  UID=user.id; S.email=user.email||''; loadLocal(); rebuild(); S.mode='ready'; render(); syncNow();
}
async function boot(){
  if(!CFG.supabaseUrl || !CFG.supabaseAnonKey || !window.supabase){ S.mode='nocfg'; render(); return; }
  SB = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey, {auth:{persistSession:true, autoRefreshToken:true, detectSessionInUrl:true}});
  const {data:{session}} = await SB.auth.getSession();
  if(session) startSession(session.user); else { S.mode='auth'; render(); }
  SB.auth.onAuthStateChange((ev, sess)=>{
    if(ev==='SIGNED_IN' && sess && sess.user.id!==UID) startSession(sess.user);
    if(ev==='SIGNED_OUT'){ UID=null; L=null; S.months={}; S.settings=null; S.mode='auth'; render(); }
  });
  window.addEventListener('online', syncNow);
  document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState==='visible') syncNow(); });
  setInterval(()=>{ if(document.visibilityState==='visible') syncNow(); }, 60000);
}

/* ---------- sign-in screen ---------- */
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

/* ---------- render ---------- */
const TABS = [['home','Home','House'],['calendar','Calendar','CalendarDays'],['overview','Overview','ChartPie'],['budgets','Budgets','Target'],['more','More','Ellipsis']];
function render(){
  document.getElementById('nav').innerHTML = TABS.map(([id,l,i])=>`<button data-act="tab" data-v="${id}" class="${S.tab===id?'on':''}" aria-label="${l}">${ic(i)}<span>${l}</span></button>`).join('');
  document.getElementById('title').textContent = TABS.find(t=>t[0]===S.tab)[1];
  const mb=document.getElementById('monthbar'); mb.hidden = S.tab==='more';
  mb.children[0].innerHTML=ic('ChevronLeft'); mb.children[2].innerHTML=ic('ChevronRight');
  document.getElementById('mlabel').textContent = ymLabel(S.ym);
  document.getElementById('fab').innerHTML = ic('Plus');
  const v=document.getElementById('view');
  const chrome = S.mode==='ready';
  document.querySelector('.top').hidden=!chrome; document.querySelector('.nav').hidden=!chrome; document.getElementById('fab').hidden=!chrome||S.tab==='more';
  if(S.mode==='loading'){ v.innerHTML = `<div class="card empty" style="margin-top:40px"><b>Opening Kharcha…</b></div>`; return; }
  if(S.mode==='nocfg'){ v.innerHTML = `<div class="card empty" style="margin-top:40px"><b>Almost there</b>Add your Supabase project URL and anon key to config.js, then reload.</div>`; return; }
  if(S.mode==='auth'){ v.innerHTML = vAuth(); return; }
  v.innerHTML = ({home:vHome,calendar:vCal,overview:vOverview,budgets:vBudgets,more:vMore})[S.tab]();
}
const localBanner = () => '';

function txRow(t){
  const c = t.type==='transfer' ? CAT.__transfer : (CAT[t.cat]||CAT.other);
  const acc = accById(t.acct);
  const sub = t.type==='transfer' ? `${esc(acc.name)} → ${esc(accById(t.to).name)}` : (t.note ? esc(t.note) : esc(acc.name));
  const amt = t.type==='expense' ? `<span class="a num">−${money(t.amt)}</span>` : t.type==='income' ? `<span class="a num pos">+${money(t.amt)}</span>` : `<span class="a num" style="color:var(--muted)">${money(t.amt)}</span>`;
  return `<button class="tx" data-act="edit" data-id="${t.id}" data-ym="${t.date.slice(0,7)}"><span class="ic" style="--c:${c.c}">${ic(c.icon)}</span><span class="t"><b>${esc(c.name)}</b><span>${sub}</span></span>${amt}</button>`;
}
function groupedList(list){
  if(!list.length) return '';
  const g={}; list.forEach(t=>(g[t.date]=g[t.date]||[]).push(t));
  return Object.keys(g).sort().reverse().map(d=>{
    const tt=totals(g[d]);
    return `<div><div class="day-h"><span>${dayLabel(d)}</span><span class="num">${tt.exp?'−'+money(tt.exp):''}${tt.inc?(tt.exp?' · ':'')+'+'+money(tt.inc):''}</span></div><div class="list">${g[d].map(txRow).join('')}</div></div>`;
  }).join('');
}

function spendCard(ym){
  const list=txnsOf(ym), tt=totals(list), bf=budgetFor(ym);
  let budgetHtml='';
  if(bf && bf.b.total>0){
    const p=tt.exp/bf.b.total, left=bf.b.total-tt.exp;
    let perDay='';
    if(ym===curYM() && left>0){ const dl=daysIn(ym)-new Date().getDate()+1; perDay=` · ${money(left/dl)}/day for ${dl} day${dl>1?'s':''}`; }
    budgetHtml = `<div class="bar ${barCls(p)}"><i style="width:${Math.min(100,p*100).toFixed(1)}%"></i></div>
      <div class="sub num" style="margin-top:8px">${left>=0?`<b style="color:var(--ink)">${money(left)}</b> left of ${money(bf.b.total)}${perDay}`:`<b class="neg">${money(-left)} over</b> your ${money(bf.b.total)} budget`}</div>`;
  } else {
    budgetHtml = `<div class="sub" style="margin-top:8px">No budget for ${ymLong(ym)}. <button data-act="tab" data-v="budgets" style="color:var(--accent);font-weight:800">Set one</button></div>`;
  }
  return `<div class="card"><div class="label"><span>${ymLong(ym)} spending</span></div>
    <div class="big num">${tt.exp?'−':''}${money(tt.exp)}</div>${budgetHtml}
    <div class="pills num"><span class="pill"><span class="dot" style="background:var(--pos)">${ic('Plus')}</span>${money(tt.inc)}</span><span class="pill"><span class="dot" style="background:var(--neg)">${ic('X')}</span>${money(tt.exp)}</span><span class="pill">Net ${tt.net<0?'−':'+'}${money(tt.net)}</span></div></div>`;
}
function vHome(){
  const bal=balances(); const total=Object.values(bal).reduce((a,b)=>a+b,0);
  const list=txnsOf(S.ym);
  return `${localBanner()}
  <div class="card"><div class="label"><span>Total balance</span><button data-act="tab" data-v="more" class="sub" style="font-weight:700">Accounts</button></div>
    <div class="big num ${total<0?'neg':''}">${smoney(total)}</div>
    <div class="acc-strip">${accounts().map(a=>`<button class="acc" data-act="acc" data-id="${a.id}" style="text-align:left"><small>${esc(a.name)}</small><b class="num ${bal[a.id]<0?'neg':''}">${smoney(bal[a.id]||0)}</b></button>`).join('')}</div></div>
  ${spendCard(S.ym)}
  ${list.length ? groupedList(list) : `<div class="card empty"><b>No entries in ${ymLong(S.ym)}</b>Tap + to log an expense. To add something from an earlier day, use the Calendar tab or change the date when adding.</div>`}`;
}

function vCal(){
  const ym=S.ym, n=daysIn(ym), [y,m]=ym.split('-').map(Number);
  const first=(new Date(y,m-1,1).getDay()+6)%7; // Monday first
  const list=txnsOf(ym); const byDay={};
  list.forEach(t=>{ const d=byDay[t.date]||(byDay[t.date]={exp:0,inc:0,n:0}); d.n++; if(t.type==='expense') d.exp+=t.amt; else if(t.type==='income') d.inc+=t.amt; });
  const max=Math.max(1,...Object.values(byDay).map(d=>d.exp));
  const t=todayS();
  let cells=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(w=>`<div class="wd">${w[0]}${w[1]}</div>`).join('');
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
      ${dl.length?`<div class="list">${dl.map(txRow).join('')}</div>`:''}`;
  } else panel = `<div class="sub" style="text-align:center;padding:8px">Tap a day to see or add its entries.</div>`;
  const tt=totals(list);
  return `${localBanner()}<div class="card"><div class="label" style="margin-bottom:12px"><span>${ymLong(ym)} ${y}</span><span class="num">Spent ${money(tt.exp)}</span></div><div class="cal">${cells}</div></div>${panel}`;
}

function donut(items,total){
  const R=80, C=2*Math.PI*R; let off=0; const gap = items.length>1 ? 2.5 : 0;
  const segs = items.map(it=>{ const len=it.v/total*C; const s=`<circle r="${R}" cx="110" cy="110" fill="none" stroke="${it.c}" stroke-width="26" stroke-dasharray="${Math.max(0.01,len-gap)} ${C}" stroke-dashoffset="${-off}" transform="rotate(-90 110 110)"/>`; off+=len; return s; }).join('');
  return `<svg class="donut" viewBox="0 0 220 220" role="img" aria-label="Breakdown by category"><circle r="${R}" cx="110" cy="110" fill="none" stroke="var(--chip)" stroke-width="26"/>${segs}
    <text x="110" y="104" text-anchor="middle" style="fill:var(--muted);font:700 12px var(--f-ui)">${S.ovType==='expense'?'Spent':'Received'}</text>
    <text x="110" y="128" text-anchor="middle" style="fill:var(--ink);font:800 21px var(--f-ui)">${money(total)}</text></svg>`;
}
function flowChart(ym){
  const list=txnsOf(ym), n=daysIn(ym);
  const buckets=[[1,7],[8,14],[15,21],[22,28]]; if(n>28) buckets.push([29,n]);
  const data=buckets.map(([a,b])=>{ let inc=0,exp=0; list.forEach(t=>{ const d=+t.date.slice(8); if(d>=a&&d<=b){ if(t.type==='income') inc+=t.amt; else if(t.type==='expense') exp+=t.amt; } }); return {a,b,inc,exp}; });
  const rawMax=Math.max(1,...data.flatMap(d=>[d.inc,d.exp]));
  const mag=Math.pow(10,Math.floor(Math.log10(rawMax))); const max=Math.ceil(rawMax/mag)*mag;
  const W=320,H=160,L=36,B=22,T=10, ch=H-B-T, cw=(W-L)/data.length, bw=Math.min(18,cw/3.2);
  const y=v=>T+ch-(v/max)*ch;
  let s=''; [0,.5,1].forEach(f=>{ const yy=y(max*f); s+=`<line x1="${L}" x2="${W}" y1="${yy}" y2="${yy}" stroke="var(--line)" stroke-width="1"/><text x="${L-6}" y="${yy+3}" text-anchor="end">${kfmt(max*f)}</text>`; });
  data.forEach((d,i)=>{ const cx=L+cw*i+cw/2;
    s+=`<rect x="${cx-bw-1.5}" y="${y(d.inc)}" width="${bw}" height="${Math.max(0,T+ch-y(d.inc))}" rx="4" fill="var(--pos)"/>`;
    s+=`<rect x="${cx+1.5}" y="${y(d.exp)}" width="${bw}" height="${Math.max(0,T+ch-y(d.exp))}" rx="4" fill="var(--neg)" opacity=".85"/>`;
    s+=`<text x="${cx}" y="${H-6}" text-anchor="middle">${d.a}–${d.b}</text>`; });
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Weekly inflow and outflow">${s}</svg>`;
}
function vOverview(){
  const ym=S.ym, list=txnsOf(ym), tt=totals(list), type=S.ovType;
  const m=byCat(list,type); const total=Object.values(m).reduce((a,b)=>a+b,0);
  const items=Object.entries(m).map(([k,v])=>({k,v,c:(CAT[k]||CAT.other).c})).sort((a,b)=>b.v-a.v);
  const prev=totals(txnsOf(addMonth(ym,-1)));
  const prevV = type==='expense'?prev.exp:prev.inc;
  const cmp = prevV>0 ? (()=>{ const d=(total-prevV)/prevV*100; return `${d>=0?'+':'−'}${Math.abs(d).toFixed(0)}% vs ${ymLabel(addMonth(ym,-1)).slice(0,3)} (${money(prevV)})`; })() : `No data for ${ymLabel(addMonth(ym,-1))}`;
  const breakdown = items.length ? `${donut(items,total)}
    <div class="legend">${items.map(it=>{ const c=CAT[it.k]||CAT.other, p=it.v/total; return `<div class="lg"><span class="ic" style="--c:${c.c}">${ic(c.icon)}</span><div class="t"><div><span>${esc(c.name)}</span><span class="num">${money(it.v)}</span></div><div class="bar s" style="margin-top:6px"><i style="width:${(p*100).toFixed(1)}%;background:${c.c}"></i></div><span class="sub num">${(p*100).toFixed(1)}%</span></div></div>`; }).join('')}</div>`
    : `<div class="empty"><b>No ${type==='expense'?'expenses':'income'} in ${ymLong(ym)}</b>Entries you add show up here by category.</div>`;
  return `${localBanner()}<div class="seg" role="tablist"><button data-act="ov" data-v="expense" class="${type==='expense'?'on':''}">Expenses</button><button data-act="ov" data-v="income" class="${type==='income'?'on':''}">Income</button></div>
  <div class="card"><div class="label"><span>${type==='expense'?'Expenses':'Income'}</span></div><div class="big num">${type==='expense'&&total?'−':''}${money(total)}</div><div class="sub">${cmp}</div>${breakdown}</div>
  <div class="card flow"><div class="label"><span>Cash flow</span></div><div class="big num ${tt.net<0?'neg':''}">${smoney(tt.net)}</div>
    <div class="pills num"><span class="pill"><span class="dot" style="background:var(--pos)">${ic('Plus')}</span>${money(tt.inc)}</span><span class="pill"><span class="dot" style="background:var(--neg)">${ic('X')}</span>${money(tt.exp)}</span></div>
    ${flowChart(ym)}<div class="sub" style="text-align:center;margin-top:4px">Inflow and outflow by week (days of ${ymLong(ym)})</div></div>`;
}

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
  } else {
    head = `<div class="card"><div class="label"><span>Monthly budget · ${ymLong(ym)}</span></div><div style="font-weight:800;font-size:18px;margin-top:6px">No budget set</div><div class="sub" style="margin:4px 0 14px">Set how much you plan to spend in ${ymLong(ym)}. Next months reuse it until you change it.</div><button class="btn" data-act="bud" data-v="__total">Set monthly budget</button></div>`;
  }
  const rows = EXP.map(([id])=>CAT[id]).map(c=>({c,bud:+cats[c.id]||0,sp:spent[c.id]||0}))
    .sort((a,b)=> (b.bud>0)-(a.bud>0) || b.sp-a.sp || 0);
  const rowHtml = r=>{
    const p = r.bud ? r.sp/r.bud : 0;
    const right = r.bud ? `<button class="setb num" data-act="bud" data-v="${r.c.id}">${kfmt(r.bud)}</button>` : `<button class="setb" data-act="bud" data-v="${r.c.id}">Set</button>`;
    const status = r.bud ? (p>1?`<span class="tag over">${money(r.sp-r.bud)} over</span>`:p>=.8?`<span class="tag warn">${money(r.bud-r.sp)} left</span>`:`<span>${money(r.bud-r.sp)} left</span>`) : '';
    return `<div class="brow"><span class="ic" style="--c:${r.c.c}">${ic(r.c.icon)}</span><div class="t"><b>${esc(r.c.name)}</b><div class="sub num"><span>${money(r.sp)}${r.bud?' of '+money(r.bud):' spent'}</span>${status}</div>${r.bud?`<div class="bar s ${barCls(p)}"><i style="width:${Math.min(100,p*100).toFixed(1)}%"></i></div>`:''}</div>${right}</div>`;
  };
  return `${localBanner()}${head}<div class="h2">Category budgets</div><div class="list">${rows.map(rowHtml).join('')}</div>`;
}

function ago(ms){ const m=Math.round((Date.now()-ms)/60000); return m<1?'just now':m<60?`${m} min ago`:`${Math.round(m/60)} h ago`; }
function vMore(){
  const bal=balances(), n=pending(), sy=S.sync;
  let st, stIcon, stCol;
  if(sy.state==='error'){ st=`Couldn’t reach the server: ${esc(sy.err)}. ${n?n+' change'+(n>1?'s':'')+' saved on this phone, waiting to upload.':''}`; stIcon='X'; stCol='var(--neg)'; }
  else if(!navigator.onLine || sy.state==='offline'){ st=`You’re offline. ${n?n+' change'+(n>1?'s':'')+' saved on this phone will upload when you reconnect.':'Everything is saved on this phone.'}`; stIcon='X'; stCol='var(--warn)'; }
  else if(n){ st=`${n} change${n>1?'s':''} uploading…`; stIcon='RotateCcw'; stCol='var(--warn)'; }
  else { st= sy.at ? `All changes synced ${ago(sy.at)}.` : 'Checking for changes…'; stIcon='Check'; stCol='var(--pos)'; }
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  return `<div class="h2">Accounts</div>
  <div class="list">${accounts().map(a=>`<button class="more-row" data-act="acc" data-id="${a.id}"><span class="ic" style="--c:var(--accent)">${ic(ACC_ICON[a.kind]||'Wallet')}</span><span class="t"><b>${esc(a.name)}</b><span class="sub">${ACC_KIND[a.kind]||'Account'}</span></span><span class="num ${bal[a.id]<0?'neg':''}" style="font-weight:800">${smoney(bal[a.id]||0)}</span></button>`).join('')}
  <button class="more-row" data-act="acc" data-id="__new"><span class="ic" style="--c:var(--muted)">${ic('Plus')}</span><span class="t"><b>Add account</b><span class="sub">Bank, cash, card or UPI wallet</span></span></button></div>
  <div class="h2">Data</div>
  <div class="list">
    <button class="more-row" data-act="sync"><span class="ic" style="--c:${stCol}">${ic(stIcon)}</span><span class="t"><b>Sync</b><span class="sub" style="white-space:normal">${st}</span></span><span class="sub" style="font-weight:800">Sync now</span></button>
    <button class="more-row" data-act="export"><span class="ic" style="--c:var(--accent)">${ic('Download')}</span><span class="t"><b>Export all transactions</b><span class="sub">CSV file for Excel or Google Sheets</span></span></button>
    <label class="more-row" style="cursor:pointer"><span class="ic" style="--c:var(--accent)">${ic('CirclePlus')}</span><span class="t"><b>Import from CSV</b><span class="sub">A file exported from Kharcha</span></span><input type="file" id="f_import" accept=".csv,text/csv" hidden></label>
  </div>
  <div class="h2">Account</div>
  <div class="list"><div class="more-row"><span class="ic" style="--c:var(--muted)">${ic('UserRound')}</span><span class="t"><b>Signed in</b><span class="sub">${esc(S.email)}</span></span><button class="btn sm ghost" data-act="signout">Sign out</button></div></div>
  ${standalone?'':`<div class="card sub"><b style="color:var(--ink)">Install on your phone.</b> iPhone: open this site in Safari, tap Share → Add to Home Screen. Android: open it in Chrome, tap ⋮ → Install app.</div>`}`;
}

/* ---------- CSV import ---------- */
function parseCSV(text){
  const rows=[]; let row=[], f='', q=false;
  for(let i=0;i<text.length;i++){ const c=text[i];
    if(q){ if(c==='"'){ if(text[i+1]==='"'){ f+='"'; i++; } else q=false; } else f+=c; }
    else if(c==='"') q=true; else if(c===','){ row.push(f); f=''; } else if(c==='\n'||c==='\r'){ if(c==='\r'&&text[i+1]==='\n') i++; row.push(f); rows.push(row); row=[]; f=''; } else f+=c; }
  if(f!==''||row.length){ row.push(f); rows.push(row); }
  return rows.filter(r=>r.some(x=>x.trim()!==''));
}
async function importCSV(file){
  const rows=parseCSV(await file.text()); const head=(rows.shift()||[]).map(h=>h.trim().toLowerCase());
  const col=n=>head.findIndex(h=>h.startsWith(n));
  const ci={date:col('date'),type:col('type'),cat:col('category'),acct:col('account'),to:col('to account'),amt:col('amount'),note:col('note')};
  if(ci.date<0||ci.amt<0||ci.type<0){ toast('That file doesn’t look like a Kharcha export.'); return; }
  const byName={}; Object.values(CAT).forEach(c=>byName[c.name.toLowerCase()]=c.id);
  const accs=accounts().map(a=>({...a})); let newAcc=false;
  const accId=name=>{ name=(name||'').trim()||'Bank account'; let a=accs.find(x=>x.name.toLowerCase()===name.toLowerCase()); if(!a){ a={id:'a'+Math.random().toString(36).slice(2,8),name,kind:'bank',opening:0}; accs.push(a); newAcc=true; } return a.id; };
  const out=[];
  for(const r of rows){
    const date=(r[ci.date]||'').trim(); const type=(r[ci.type]||'').trim().toLowerCase(); const amt=Math.abs(parseFloat((r[ci.amt]||'').replace(/[,₹\s]/g,'')));
    if(!/^\d{4}-\d{2}-\d{2}$/.test(date) || !['expense','income','transfer'].includes(type) || !(amt>0)) continue;
    const catName=(r[ci.cat]||'').trim().toLowerCase();
    out.push({id:newId(), type, amt, cat: type==='transfer'?null:(byName[catName] || (type==='income'?'otherin':'other')), acct:accId(r[ci.acct]), to: type==='transfer'?accId(r[ci.to]):null, note:(r[ci.note]||'').trim(), date, at:Date.now()});
  }
  if(!out.length){ toast('No entries found in that file.'); return; }
  SH={kind:'import', rows:out, accs, newAcc};
  const ds=out.map(t=>t.date).sort();
  root().innerHTML=`<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-label="Import"><div class="sh-head"><button class="xbtn" data-act="close" aria-label="Close">${ic('X')}</button><div style="font-weight:800;font-size:17px">Import ${out.length} entries?</div></div>
    <div class="sh-body"><div class="sub">From ${shortDay(ds[0])} to ${shortDay(ds[ds.length-1])}. Importing the same file twice creates duplicates.</div><button class="btn wide" data-act="doimport">Import ${out.length} entries</button></div></div></div>`;
}

/* ---------- sheets ---------- */
let SH=null;
const root=()=>document.getElementById('sheetRoot');
function closeSheet(){ SH=null; root().innerHTML=''; }
function openTxn(opts){
  const last = store.get('k_acct'); const accs=accounts();
  const defAcct = accs.find(a=>a.id===last) ? last : accs[0].id;
  SH = Object.assign({kind:'txn', mode:'add', id:null, type:'expense', amt:'', cat:null, acct:defAcct, to:(accs.find(a=>a.id!==defAcct)||accs[0]).id, note:'', date:todayS(), at:null, origKey:null, confirmDel:false}, opts||{});
  renderTxnSheet();
}
function renderTxnSheet(){
  const s=SH, accs=accounts();
  const cats = s.type==='income'?INC:EXP;
  const accOpts = sel => accs.map(a=>`<option value="${a.id}" ${a.id===sel?'selected':''}>${esc(a.name)}</option>`).join('');
  const html = `<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-label="${s.mode==='add'?'Add':'Edit'} transaction">
    <div class="sh-head"><button class="xbtn" data-act="close" aria-label="Close">${ic('X')}</button>
      <div class="seg">${['expense','income','transfer'].map(t=>`<button data-act="ttype" data-v="${t}" class="${s.type===t?'on':''}">${t[0].toUpperCase()+t.slice(1)}</button>`).join('')}</div>
      ${s.mode==='edit'?`<button class="xbtn" data-act="del" aria-label="Delete" style="${s.confirmDel?'background:var(--neg);color:#fff':'color:var(--neg)'}">${ic('Trash2')}</button>`:''}</div>
    ${s.confirmDel?`<div class="sub" style="text-align:center;color:var(--neg);font-weight:700">Tap the bin again to delete this entry</div>`:''}
    <div class="amt"><small>${s.type==='expense'?'EXPENSE':s.type==='income'?'INCOME':'TRANSFER'} · INR</small><div class="v num ${s.amt?'':'zero'}" id="amtv">${fmtAmt(s.amt)}</div></div>
    <div style="padding:0 16px">
      <div class="meta">
        <label class="chipf">${ic('CalendarDays')}<span>${shortDay(s.date)}</span><input type="date" id="f_date" value="${s.date}" max="2100-12-31" aria-label="Date"></label>
        ${s.date!==todayS()?`<button class="chipf" data-act="dtoday">Today</button>`:`<button class="chipf" data-act="dyest">Yesterday</button>`}
        <label class="chipf">${ic(ACC_ICON[accById(s.acct).kind]||'Wallet')}<span>${s.type==='transfer'?'From ':''}${esc(accById(s.acct).name)}</span><select id="f_acct" aria-label="Account">${accOpts(s.acct)}</select></label>
        ${s.type==='transfer'?`<label class="chipf">${ic('ArrowLeftRight')}<span>To ${esc(accById(s.to).name)}</span><select id="f_to" aria-label="To account">${accOpts(s.to)}</select></label>`:''}
      </div>
    </div>
    <div class="sh-mid" id="shmid">
      <input class="note" id="f_note" placeholder="Add a note (optional)" value="${esc(s.note)}" maxlength="120" autocomplete="off">
      ${s.type==='transfer' ? `<div class="sub" style="text-align:center;margin-top:14px">Moves money between your accounts. It doesn’t count as spending or income.</div>`
        : `<div class="cats">${cats.map(([id])=>{const c=CAT[id];return `<button class="cat ${s.cat===id?'on':''}" data-act="pcat" data-v="${id}" style="--c:${c.c}"><span class="ic">${ic(c.icon)}</span>${esc(c.name)}</button>`;}).join('')}</div>`}
    </div>
    <div class="keys">${['1','2','3','4','5','6','7','8','9','.','0','⌫'].map(k=>`<button data-act="key" data-v="${k}" class="num" aria-label="${k==='⌫'?'Delete digit':k}">${k==='⌫'?ic('Delete'):k}</button>`).join('')}
      <button class="save" data-act="savetx" id="savebtn">${s.mode==='add'?'Save':'Save changes'}</button></div>
  </div></div>`;
  const mid=document.getElementById('shmid'); const sc = mid?mid.scrollTop:0;
  root().innerHTML=html; document.getElementById('shmid').scrollTop=sc;
  updSave();
}
function fmtAmt(a){ if(!a) return '₹0'; const [i,d]=a.split('.'); return '₹'+nf.format(+i||0)+(d!==undefined?'.'+d:''); }
function canSave(){ const v=parseFloat(SH.amt); if(!(v>0)) return false; if(SH.type==='transfer') return SH.acct!==SH.to; return !!SH.cat; }
function updSave(){ const b=document.getElementById('savebtn'); if(b){ b.disabled=!canSave(); if(SH.type==='transfer'&&SH.acct===SH.to&&parseFloat(SH.amt)>0) b.textContent='Pick two different accounts'; else b.textContent = SH.mode==='add'?'Save':'Save changes'; if(SH.type!=='transfer'&&!SH.cat&&parseFloat(SH.amt)>0) b.textContent='Pick a category'; } const v=document.getElementById('amtv'); if(v){ v.textContent=fmtAmt(SH.amt); v.classList.toggle('zero',!SH.amt);} }
function keyIn(k){
  let a=SH.amt;
  if(k==='⌫') a=a.slice(0,-1);
  else if(k==='.'){ if(!a.includes('.')) a=(a||'0')+'.'; }
  else { if(a.includes('.') && a.split('.')[1].length>=2) return; if(a.replace('.','').length>=10) return; a = (a==='0'?'':a)+k; }
  SH.amt=a; updSave();
}
function saveTxn(){
  if(!canSave()) return;
  const s=SH; const t={id:s.id||newId(), type:s.type, amt:Math.round(parseFloat(s.amt)*100)/100, cat:s.type==='transfer'?null:s.cat, acct:s.acct, to:s.type==='transfer'?s.to:null, note:s.note.trim(), date:s.date, at:s.at||Date.now()};
  const key=t.date.slice(0,7);
  if(s.mode==='edit' && s.origKey && s.origKey!==key) modifyMonth(s.origKey, m=>{ delete m.txns[t.id]; });
  modifyMonth(key, m=>{ m.txns[t.id]=t; });
  store.set('k_acct', t.acct);
  closeSheet();
  toast(s.mode==='add' ? `Saved ${money(t.amt)} · ${shortDay(t.date)}` : 'Changes saved');
}
function editTxn(id, ym){
  const t = S.months[ym] && S.months[ym].txns && S.months[ym].txns[id]; if(!t) return;
  openTxn({mode:'edit', id:t.id, type:t.type, amt:String(t.amt), cat:t.cat, acct:t.acct, to:t.to||accounts()[0].id, note:t.note||'', date:t.date, at:t.at, origKey:ym});
}

function openBudget(catId){
  const ym=S.ym, bf=budgetFor(ym), b=bf?bf.b:{total:0,cats:{}};
  const isTotal = catId==='__total';
  const cur = isTotal ? (b.total||0) : ((b.cats||{})[catId]||0);
  const c = isTotal ? null : CAT[catId];
  const spentNow = isTotal ? totals(txnsOf(ym)).exp : (byCat(txnsOf(ym),'expense')[catId]||0);
  const prevYM=addMonth(ym,-1), prevSpent = isTotal ? totals(txnsOf(prevYM)).exp : (byCat(txnsOf(prevYM),'expense')[catId]||0);
  SH={kind:'budget', catId};
  const suggest = [];
  if(prevSpent>0) suggest.push([Math.ceil(prevSpent/100)*100, `${ymLabel(prevYM).slice(0,3)} spend ${money(prevSpent)}`]);
  if(isTotal && !cur) suggest.push([134000,'₹1,34,000']);
  root().innerHTML = `<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-label="Budget">
    <div class="sh-head"><button class="xbtn" data-act="close" aria-label="Close">${ic('X')}</button>
      ${c?`<span class="ic" style="--c:${c.c}">${ic(c.icon)}</span>`:''}<div style="flex:1;min-width:0"><div style="font-weight:800;font-size:17px">${isTotal?'Monthly budget':esc(c.name)}</div><div class="sub">${ymLong(ym)} ${ym.slice(0,4)} · spent ${money(spentNow)} so far</div></div></div>
    <form class="sh-body" id="budform">
      <div class="field"><label for="f_bud">BUDGET FOR ${ymLong(ym).toUpperCase()} (₹)</label><input class="hero num" id="f_bud" inputmode="decimal" autocomplete="off" value="${cur||''}" placeholder="0"></div>
      ${suggest.length?`<div class="hint">${suggest.map(([v,l])=>`<button type="button" class="chipf" data-act="bsug" data-v="${v}">${l}</button>`).join('')}</div>`:''}
      <div class="sub">${isTotal?'Applies to this month and carries forward to later months until you change it.':'Changing a budget here only affects '+ymLong(ym)+' and later months that haven’t been set.'}</div>
      <button class="btn wide" type="submit">Save budget</button>
      ${cur?`<button class="btn wide danger" type="button" data-act="bclear">Remove ${isTotal?'monthly':'this'} budget</button>`:''}
    </form></div></div>`;
  const inp=document.getElementById('f_bud'); setTimeout(()=>{ try{inp.focus(); inp.select();}catch(e){} },60);
}
function saveBudget(val){
  const ym=S.ym, catId=SH.catId, bf=budgetFor(ym);
  const base = clone(bf?bf.b:{total:0,cats:{}}); if(!base.cats) base.cats={};
  if(catId==='__total') base.total = val; else { if(val>0) base.cats[catId]=val; else delete base.cats[catId]; }
  modifyMonth(ym, m=>{ m.budget=base; });
  closeSheet(); toast(val>0?`Budget saved for ${ymLabel(ym)}`:'Budget removed');
}

function openAccount(id){
  const isNew = id==='__new'; const a = isNew ? {id:'a'+Date.now().toString(36), name:'', kind:'bank', opening:0} : accById(id);
  const used = !isNew && allTxns().some(t=>t.acct===id||t.to===id);
  SH={kind:'acct', id:a.id, isNew, confirmDel:false};
  root().innerHTML = `<div class="scrim" data-act="scrim"><div class="sheet" role="dialog" aria-label="Account">
    <div class="sh-head"><button class="xbtn" data-act="close" aria-label="Close">${ic('X')}</button><div style="font-weight:800;font-size:17px">${isNew?'New account':'Edit account'}</div></div>
    <form class="sh-body" id="accform">
      <div class="field"><label for="f_an">NAME</label><input id="f_an" value="${esc(a.name)}" placeholder="e.g. HDFC Savings" maxlength="40" required></div>
      <div class="field"><label for="f_ak">TYPE</label><select id="f_ak">${Object.entries(ACC_KIND).map(([k,l])=>`<option value="${k}" ${a.kind===k?'selected':''}>${l}</option>`).join('')}</select></div>
      <div class="field"><label for="f_ao">STARTING BALANCE (₹)</label><input id="f_ao" inputmode="decimal" value="${a.opening||''}" placeholder="0"></div>
      <div class="sub">The balance before your first entry here. For a credit card, enter what you owe as a negative number, e.g. -12000.</div>
      <button class="btn wide" type="submit">Save account</button>
      ${!isNew && accounts().length>1 ? (used?`<div class="sub">This account has entries, so it can’t be deleted.</div>`:`<button class="btn wide danger" type="button" data-act="adel">Delete account</button>`):''}
    </form></div></div>`;
}

async function exportCSV(){
  const rows=[['Date','Type','Category','Account','To account','Amount (INR)','Note']];
  allTxns().sort((a,b)=>a.date.localeCompare(b.date)).forEach(t=>rows.push([t.date,t.type,t.type==='transfer'?'':(CAT[t.cat]||CAT.other).name,accById(t.acct).name,t.to?accById(t.to).name:'',t.type==='expense'?-t.amt:t.amt,t.note||'']));
  const csv=rows.map(r=>r.map(v=>{ v=String(v); return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v; }).join(',')).join('\n');
  try{ await DL.save({filename:`kharcha-transactions-${todayS()}.csv`, data:csv}); toast('Export saved'); }
  catch(e){ if(e&&e.code!=='declined') toast('Couldn’t export. Try again.'); }
}

let tt=null;
function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.hidden=false; clearTimeout(tt); tt=setTimeout(()=>t.hidden=true,2400); }

/* ---------- events ---------- */
document.addEventListener('click', e=>{
  if(e.target.id==='f_date' && e.target.showPicker){ try{ e.target.showPicker(); }catch(_){} }
  const el=e.target.closest('[data-act]'); if(!el) return;
  const a=el.dataset.act, v=el.dataset.v;
  if(a==='scrim'){ if(e.target===el) closeSheet(); return; }
  switch(a){
    case 'tab': S.tab=v; store.set('k_tab',v); window.scrollTo(0,0); render(); break;
    case 'mprev': S.ym=addMonth(S.ym,-1); S.calDay=null; render(); break;
    case 'mnext': S.ym=addMonth(S.ym,1); S.calDay=null; render(); break;
    case 'day': S.calDay = S.calDay===v ? null : v; render(); break;
    case 'ov': S.ovType=v; render(); break;
    case 'add': openTxn({date: (S.tab==='calendar' && S.calDay) ? S.calDay : (S.ym===curYM()?todayS():`${S.ym}-01`)}); break;
    case 'addon': openTxn({date:v}); break;
    case 'edit': editTxn(el.dataset.id, el.dataset.ym); break;
    case 'close': closeSheet(); break;
    case 'ttype': SH.type=v; SH.cat=null; SH.confirmDel=false; renderTxnSheet(); break;
    case 'pcat': SH.cat=v; document.querySelectorAll('.cat').forEach(c=>c.classList.toggle('on',c.dataset.v===v)); updSave(); break;
    case 'key': keyIn(v); break;
    case 'dtoday': SH.date=todayS(); renderTxnSheet(); break;
    case 'dyest': { const d=new Date(); d.setDate(d.getDate()-1); SH.date=ymd(d); renderTxnSheet(); break; }
    case 'savetx': saveTxn(); break;
    case 'del':
      if(!SH.confirmDel){ SH.confirmDel=true; renderTxnSheet(); }
      else { const {id,origKey}=SH; modifyMonth(origKey, m=>{ delete m.txns[id]; }); closeSheet(); toast('Entry deleted'); }
      break;
    case 'bud': openBudget(v); break;
    case 'bsug': document.getElementById('f_bud').value=v; break;
    case 'bclear': saveBudget(0); break;
    case 'keepbud': { const bf=budgetFor(S.ym); if(bf){ const b=clone(bf.b); modifyMonth(S.ym,m=>{m.budget=b;}); toast(`Budget saved for ${ymLabel(S.ym)}`);} break; }
    case 'acc': openAccount(el.dataset.id); break;
    case 'adel': {
      if(!SH.confirmDel){ SH.confirmDel=true; el.textContent='Tap again to delete'; break; }
      const next=clone(S.settings||{}); next.accounts=accounts().filter(x=>x.id!==SH.id).map(x=>({...x})); saveSettings(next); closeSheet(); toast('Account deleted'); break; }
    case 'export': exportCSV(); break;
    case 'sync': syncNow().then(render); break;
    case 'signout': SB.auth.signOut(); break;
    case 'authmode': S.authMode = S.authMode==='signup'?'signin':'signup'; S.authMsg=''; render(); break;
    case 'doimport': { const {rows,accs,newAcc}=SH; if(newAcc) saveSettings({accounts:accs}); rows.forEach(t=>{ L.txns[t.id]={...t,updated_at:nowIso(),deleted:false}; queue('txns',t.id,L.txns[t.id]); }); commit(); closeSheet(); toast(`Imported ${rows.length} entries`); break; }
  }
});
document.addEventListener('change', e=>{
  if(e.target.id==='f_import' && e.target.files[0]){ importCSV(e.target.files[0]); e.target.value=''; return; }
  if(!SH) return;
  const id=e.target.id;
  if(id==='f_date' && e.target.value){ SH.date=e.target.value; renderTxnSheet(); }
  if(id==='f_acct'){ SH.acct=e.target.value; renderTxnSheet(); }
  if(id==='f_to'){ SH.to=e.target.value; renderTxnSheet(); }
});
document.addEventListener('input', e=>{ if(SH && e.target.id==='f_note') SH.note=e.target.value; });
document.addEventListener('submit', e=>{
  e.preventDefault();
  if(e.target.id==='authform'){ doAuth(); return; }
  if(e.target.id==='budform'){ const v=parseFloat(String(document.getElementById('f_bud').value).replace(/[,₹\s]/g,'')); saveBudget(v>0?Math.round(v*100)/100:0); }
  if(e.target.id==='accform'){
    const name=document.getElementById('f_an').value.trim(); if(!name){ toast('Give the account a name.'); return; }
    const kind=document.getElementById('f_ak').value; const opening=parseFloat(String(document.getElementById('f_ao').value).replace(/[,₹\s]/g,''))||0;
    const list=accounts().map(x=>({...x})); const i=list.findIndex(x=>x.id===SH.id);
    const rec={id:SH.id,name,kind,opening};
    if(i>=0) list[i]=rec; else list.push(rec);
    const next=clone(S.settings||{}); next.accounts=list; saveSettings(next); closeSheet(); toast('Account saved');
  }
});
document.addEventListener('keydown', e=>{
  if(!SH) return;
  if(e.key==='Escape'){ closeSheet(); return; }
  if(SH.kind!=='txn' || ['INPUT','SELECT','TEXTAREA'].includes(document.activeElement && document.activeElement.tagName)) return;
  if(/^[0-9.]$/.test(e.key)){ keyIn(e.key); e.preventDefault(); }
  else if(e.key==='Backspace'){ keyIn('⌫'); e.preventDefault(); }
  else if(e.key==='Enter'){ saveTxn(); e.preventDefault(); }
});

boot();
