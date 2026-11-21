
(function(){
var sprite=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="i-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></symbol>
<symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></symbol>
<symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></symbol>
<symbol id="i-chat" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z"/></symbol>
<symbol id="i-x" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></symbol>
<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></symbol>
<symbol id="i-down" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></symbol>
<symbol id="i-dash" viewBox="0 0 24 24"><path d="M5 12h14"/></symbol>
<symbol id="i-wallet" viewBox="0 0 24 24"><path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></symbol>
<symbol id="i-file" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8M8 17h5"/></symbol>
<symbol id="i-box" viewBox="0 0 24 24"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/></symbol>
<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></symbol>
<symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></symbol>
<symbol id="i-db" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></symbol>
<symbol id="i-tag" viewBox="0 0 24 24"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></symbol>
<symbol id="i-lock" viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></symbol>
<symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol></defs></svg>`, dockHtml=`<div class="dock" id="dock" role="region" aria-label="Selected plan" aria-live="polite">
  <div class="lab"><span style="color:var(--mut)">Selected plan</span><b id="dockName"></b></div>
  <a class="btn wa" id="dWa" target="_blank" rel="noopener" href="#"><svg class="i"><use href="#i-chat"/></svg>WhatsApp</a>
  <a class="btn ghost" id="dMail" href="#"><svg class="i"><use href="#i-mail"/></svg>Email</a>
  <a class="btn ghost" id="dTel" href="#"><svg class="i"><use href="#i-phone"/></svg>Call</a>
  <button class="x" id="dClear" type="button" aria-label="Clear selection"><svg class="i"><use href="#i-x"/></svg></button>
</div>
<dialog id="dlg" aria-labelledby="dtitle"></dialog>`;
document.body.insertAdjacentHTML('afterbegin',sprite);
var cur=location.pathname.split('/').pop()||'index.html';
var navs=[['index.html','Home'],['packages.html','Packages'],['about.html','About'],['terms.html','Terms'],['contact.html','Contact']];
document.getElementById('hdr').innerHTML='<header class="nav"><a class="brand" href="index.html"><span class="logo"><img src="https://pixelforgestudioprabhath.netlify.app/logo.png" alt="" onerror="this.remove()">P</span><span class="t">Pixel Forge Studio</span></a>'+
 '<nav class="links" id="links" aria-label="Main">'+navs.map(function(n){return '<a href="'+n[0]+'"'+(cur===n[0]?' aria-current="page"':'')+'>'+n[1]+'</a>'}).join('')+'<a href="https://pixelforgestudioprabhath.netlify.app/" target="_blank" rel="noopener">Main website</a></nav>'+
 '<div style="display:flex;gap:8px;align-items:center"><a class="btn wa" id="navWa" href="#" target="_blank" rel="noopener"><svg class="i"><use href="#i-chat"/></svg>WhatsApp</a><button class="menu" id="menuBtn" type="button" aria-label="Menu" aria-expanded="false"><svg class="i"><use href="#i-menu"/></svg></button></div></header>';
document.getElementById('ftr').innerHTML='<footer><div class="wrap fl"><strong>Powered by Pixel Forge Studio</strong><span><a href="index.html">Home</a> &nbsp;·&nbsp; <a href="packages.html">Packages</a> &nbsp;·&nbsp; <a href="about.html">About</a> &nbsp;·&nbsp; <a href="terms.html">Terms &amp; Conditions</a> &nbsp;·&nbsp; <a href="terms.html">Privacy</a> &nbsp;·&nbsp; <a href="contact.html">Contact</a> &nbsp;·&nbsp; <a href="https://pixelforgestudioprabhath.netlify.app/" target="_blank" rel="noopener">Main Studio Website</a> &nbsp;·&nbsp; <a href="tel:+94714056318">+94 71 405 6318</a> &nbsp;·&nbsp; <a href="mailto:prabhathkelum55@gmail.com">prabhathkelum55@gmail.com</a></span></div></footer>';
if(document.getElementById('cards'))document.body.insertAdjacentHTML('beforeend',dockHtml);
var mb=document.getElementById('menuBtn');mb.addEventListener('click',function(){var o=document.getElementById('links').classList.toggle('open');mb.setAttribute('aria-expanded',o)});

var PHONE='94714056318', MAIL='prabhathkelum55@gmail.com';
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, A=window.anime&&!reduce;
var plans=[
 {id:'mini',name:'Mini Web',tag:'Starter',g:'g1',price:2500,ref:4500,fee:1000,from:false,pages:'Up to 3 pages',who:'Small businesses and personal services.',
  feats:['Up to 3 pages','Responsive design','Business information','WhatsApp contact button','Map / location link','Social media links','Basic SEO setup','Custom 404 page','Free hosting option where compatible and permitted']},
 {id:'biz',name:'Business Web',tag:'Popular',g:'g2',price:4500,ref:8500,fee:1000,from:false,pages:'Up to 5 pages',who:'Professional business websites.',
  feats:['Up to 5 pages','Everything in Mini Web','Professional UI design','Contact form','Image gallery','Services / products section','Embedded map where appropriate','Basic SEO setup','Social media integration','Compatible free hosting option']},
 {id:'plus',name:'Business Plus',tag:'Admin included',g:'g3',price:12500,ref:15000,fee:1500,from:false,pages:'Up to 8 pages',who:'Websites that need a database and an admin area.',
  feats:['Up to 8 pages','PHP + MySQL backend where appropriate','Admin dashboard','Secure admin login','Content management','Add / edit / archive records','Image upload management','Database integration','Search and filtering','Responsive admin panel','Backup setup suited to your hosting']},
 {id:'custom',name:'Custom Web',tag:'Tailored',g:'g4',price:17000,ref:20000,fee:2000,from:true,pages:'Scope agreed in writing',who:'Custom web applications and advanced requirements.',
  feats:['Custom UI / UX','Custom database structure','Advanced admin dashboard','Multiple user roles where agreed','Custom functionality and workflows','API integrations where agreed','Advanced search and filters','Backup and recovery setup','Deployment and configuration']}
];
var W='fill="#fff"',B='fill="#1d5bff"',G='fill="#cfd9ee"';
var art={
 mini:'<svg viewBox="0 0 100 90"><rect x="22" y="6" width="62" height="78" rx="9" '+W+'/><rect x="32" y="18" width="30" height="7" rx="3.5" '+B+'/><rect x="32" y="33" width="42" height="5" rx="2.5" '+G+'/><rect x="32" y="44" width="36" height="5" rx="2.5" '+G+'/><rect x="32" y="60" width="28" height="14" rx="6" fill="#16a34a"/></svg>',
 biz:'<svg viewBox="0 0 100 90"><rect x="8" y="14" width="64" height="70" rx="9" fill="#ffffffaa"/><rect x="22" y="6" width="68" height="76" rx="9" '+W+'/><rect x="30" y="16" width="34" height="7" rx="3.5" '+B+'/><rect x="30" y="30" width="22" height="20" rx="5" fill="#c8b8ff"/><rect x="56" y="30" width="26" height="20" rx="5" fill="#9cc4ff"/><rect x="30" y="58" width="52" height="5" rx="2.5" '+G+'/><rect x="30" y="68" width="38" height="5" rx="2.5" '+G+'/></svg>',
 plus:'<svg viewBox="0 0 100 90"><rect x="6" y="8" width="90" height="74" rx="10" '+W+'/><rect x="6" y="8" width="24" height="74" rx="10" '+B+'/><rect x="38" y="48" width="9" height="26" rx="3" fill="#9cc4ff"/><rect x="52" y="36" width="9" height="38" rx="3" '+B+'/><rect x="66" y="26" width="9" height="48" rx="3" fill="#ff9d57"/><rect x="38" y="16" width="44" height="6" rx="3" '+G+'/></svg>',
 custom:'<svg viewBox="0 0 100 90"><g stroke="#1d5bff" stroke-width="2.5" fill="none" stroke-linecap="round"><path d="M24 24 52 46 78 22M52 46v26M24 24v36"/></g><circle cx="24" cy="24" r="11" '+W+'/><circle cx="78" cy="22" r="11" '+W+'/><circle cx="52" cy="46" r="13" '+B+'/><circle cx="52" cy="73" r="9" '+W+'/><circle cx="24" cy="62" r="9" '+W+'/></svg>'
};
var notIncluded=['Domain registration and renewal','Paid hosting and email services','Extra pages, redesigns and new features (quoted separately)'];
var mode='once', sel=null;
var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var ic=function(n){return '<svg class="i"><use href="#i-'+n+'"/></svg>'};
var lkr=function(n){return 'LKR '+n.toLocaleString('en-US')};
var priceOf=function(p){return (mode==='once'?(p.from?'From ':''):(p.from?'From ':''))+lkr(mode==='once'?p.price:p.fee)};
var msg=function(p){return "Hello, I'm interested in the "+p.name+' package ('+(p.from?'from ':'')+lkr(p.price)+'). Could you tell me the next steps?'};
var wa=function(p){return 'https://wa.me/'+PHONE+'?text='+encodeURIComponent(p?msg(p):"Hello, I'm interested in starting a project with you!")};
var mail=function(p){return 'mailto:'+MAIL+'?subject='+encodeURIComponent(p?'Project enquiry: '+p.name+' package':'Project enquiry')+'&body='+encodeURIComponent((p?msg(p):'Hello, I would like to discuss a project.')+'\n\nMy name:\nMy business:\n')};
var tel='tel:+'+PHONE.replace(/^94/,'94');

/* generic contact links */
$('#navWa').href=wa(); $$('[data-c]').forEach(function(a){var t=a.dataset.c;a.href=t==='wa'?wa():t==='mail'?mail():tel});

/* render cards */
var box=$('#cards');
if(box){
box.innerHTML=plans.map(function(p){
  var shown=p.feats.slice(0,6), rest=p.feats.length-shown.length;
  return '<article class="card rv" data-id="'+p.id+'"><div class="top '+p.g+'"><span class="tag">'+p.tag+'</span><div class="art">'+art[p.id]+'</div><div><div class="ref">Was '+lkr(p.ref)+'</div><div class="price" data-p="'+p.id+'"></div><small class="unit" style="color:var(--mut);font-size:.8rem"></small></div></div>'+
  '<div class="body"><p class="for">'+p.who+'</p><button class="btn" data-sel="'+p.id+'" type="button" aria-pressed="false">Select plan</button><button class="lnk" data-view="'+p.id+'" type="button">View details</button>'+
  '<ul>'+shown.map(function(f){return '<li>'+ic('check')+f+'</li>'}).join('')+'</ul>'+(rest?'<span class="more">+ '+rest+' more included</span>':'')+'</div></article>';
}).join('');

function paint(animate){
  $$('.ref').forEach(function(r){r.style.visibility=mode==='once'?'visible':'hidden'});
  plans.forEach(function(p){var el=$('[data-p="'+p.id+'"]'); el.textContent=priceOf(p); el.nextElementSibling.textContent=mode==='once'?(p.from?'starting price, final quote after scope':'starting price, in LKR'):'per month after the free first month'; if(p.from&&mode==='monthly')el.nextElementSibling.textContent='per month, starting price';});
  if(animate&&A)anime({targets:'.price',translateY:[10,0],opacity:[0,1],duration:420,easing:'easeOutCubic'});
}
paint(false);

/* segmented toggle */
var seg=$$('.seg button'), bg=$('#pillbg');
function movePill(){var b=$('.seg button[aria-pressed=true]');bg.style.left=b.offsetLeft+'px';bg.style.width=b.offsetWidth+'px'}
seg.forEach(function(b){b.addEventListener('click',function(){mode=b.dataset.mode;seg.forEach(function(x){x.setAttribute('aria-pressed',x===b)});movePill();paint(true);if(sel)refresh()})});
addEventListener('resize',movePill);document.fonts&&document.fonts.ready.then(movePill);movePill();

/* selection + dock */
var dock=$('#dock');
function refresh(){
  var p=plans.find(function(x){return x.id===sel});
  $$('.card').forEach(function(c){var on=c.dataset.id===sel;c.classList.toggle('on',on);var b=$('[data-sel]',c);b.setAttribute('aria-pressed',on);b.innerHTML=on?ic('check')+'Selected':'Select plan';b.className='btn'+(on?'':'');});
  if(!p){dock.classList.remove('show');return}
  $('#dockName').textContent=p.name+' - '+priceOf(p)+(mode==='once'?'':' / month');
  $('#dWa').href=wa(p);$('#dMail').href=mail(p);$('#dTel').href=tel;dock.classList.add('show');
}
function choose(id){sel=id;refresh();if(A){var c=$('.card[data-id="'+id+'"]');anime({targets:c,scale:[1,1.025,1],duration:380,easing:'easeOutQuad',complete:function(){c.style.transform=''}})}}
$('#dClear').addEventListener('click',function(){sel=null;refresh()});

/* details dialog */
var dlg=$('#dlg');
function openPlan(id){
  var p=plans.find(function(x){return x.id===id});
  dlg.innerHTML='<div class="dh top '+p.g+'" style="border-radius:0;animation:none"><button class="x" type="button" data-close aria-label="Close">'+ic('x')+'</button><span class="tag">'+p.tag+'</span><h3 id="dtitle">'+p.name+'</h3><div class="ref">Previous reference price: '+lkr(p.ref)+'</div><div class="price">'+(p.from?'From ':'')+lkr(p.price)+' <small>starting price</small></div><small style="color:var(--ink)">Maintenance: '+(p.from?'from ':'')+lkr(p.fee)+' / month, first month free</small></div>'+
  '<div class="db"><p>'+p.who+' <strong>'+p.pages+'.</strong></p><div class="two"><div><h4>What is included</h4><ul>'+p.feats.map(function(f){return '<li>'+ic('check')+f+'</li>'}).join('')+'</ul></div>'+
  '<div><h4>Not included</h4><ul>'+notIncluded.map(function(f){return '<li class="no">'+ic('dash')+f+'</li>'}).join('')+'</ul><h4 style="margin-top:18px">Payment</h4><ul><li>'+ic('check')+'50% advance before work starts</li><li>'+ic('check')+'50% before final handover</li></ul></div></div>'+
  (p.from?'<p style="color:var(--mut);font-size:.9rem">Custom Web is a starting price. The final price depends on the written scope and quotation.</p>':'')+
  '<p style="font-size:.85rem;color:var(--mut)">Please read the <a href="terms.html" data-close style="color:var(--acc)">full Terms &amp; Conditions</a> before you start.</p><div><h4>Contact us about this plan</h4><div class="ct"><a class="btn wa" target="_blank" rel="noopener" href="'+wa(p)+'">'+ic('chat')+'WhatsApp</a><a class="btn ghost" href="'+mail(p)+'">'+ic('mail')+'Email</a><a class="btn ghost" href="'+tel+'">'+ic('phone')+'Call</a></div></div>'+
  '<button class="btn" type="button" data-pick="'+p.id+'">Select '+p.name+'</button></div>';
  dlg.showModal();
  if(A)anime({targets:dlg,translateY:[24,0],opacity:[0,1],duration:380,easing:'easeOutCubic'});
}
dlg.addEventListener('click',function(e){
  if(e.target===dlg||e.target.closest('[data-close]'))return dlg.close();
  var pk=e.target.closest('[data-pick]');if(pk){choose(pk.dataset.pick);dlg.close()}
});
box.addEventListener('click',function(e){
  var s=e.target.closest('[data-sel]'),v=e.target.closest('[data-view]');
  if(s)choose(s.dataset.sel);if(v)openPlan(v.dataset.view);
});

}
var tl=$('#tiles');if(tl)tl.innerHTML=plans.map(function(p){return '<a class="tile rv" href="packages.html"><b>'+p.name+'</b><div class="pr">'+(p.from?'From ':'')+lkr(p.price)+'</div><span>'+p.pages+' · maintenance '+(p.from?'from ':'')+lkr(p.fee)+' / month</span></a>'}).join('');
/* terms and conditions */
var terms=[
 ['wallet','Payment policy',[
  '50% advance payment before development begins.',
  'The remaining 50% is due after completion and before final handover or deployment, as set out in your signed agreement.',
  'The first month of maintenance is free after deployment. Monthly maintenance charges begin from the second month.',
  'Each payment is recorded separately and is confirmed by the studio before it is marked as paid.',
  'Prices, quotations and payments are in Sri Lankan Rupees (LKR) unless your agreement states otherwise.',
  'Domain registration and renewal, paid hosting, email services, SMS, OTP, API fees and other paid third-party services are charged separately.']],
 ['file','Agreement and project start',[
  'Work starts only after the agreement is accepted and the advance payment is confirmed, unless the studio approves and records an exception.',
  'Process: you send a request, we review it and prepare a quotation, then create an agreement covering scope, package, price, payment terms, maintenance, domain and hosting responsibilities, backup policy, revision limits and delivery estimate.',
  'You read the agreement, give your consent and enter your name as an electronic signature.',
  'You receive a copy of the accepted agreement. Any material change needs a new version and renewed acceptance.']],
 ['box','Package limits',[
  'Page limits and included features are exactly as listed for each package.',
  'We do not offer unlimited revisions, pages, support or content changes.',
  'Extra pages, major redesigns, new features, integrations and additional development need a separate quotation.',
  'Maintenance covers only the agreed limited work, not new development.',
  'Custom Web and Custom maintenance are starting prices. The final price depends on the written scope and quotation.']],
 ['clock','Maintenance and late payment',[
  'Maintenance is part of the agreed service contract.',
  'On the due date you receive a payment reminder. After 7 days you receive a second reminder and are told about the grace period.',
  'After 14 days overdue, maintenance updates and support may be suspended temporarily, after we notify you.',
  'After 30 days overdue, the maintenance agreement is reviewed or ended according to the signed terms.',
  'We never delete your website because of unpaid maintenance, and we never take ownership of your domain or website files.',
  'Reminders, suspension dates and communications are recorded.']],
 ['globe','Domain and hosting',[
  'Domain registration and renewal are separate from package prices. We prefer to register domains in your name, using a registrar account and email you control, and we can help with registration, DNS and deployment.',
  'You own your domain and your business data.',
  'Hosting costs are separate unless a written quotation says otherwise.',
  'Free hosting is optional and depends on the provider limits, uptime, terms and technical compatibility. Not every free host supports PHP, MySQL, scheduled tasks, outbound email, external backups or commercial projects, so we check the provider terms before using one for paid work.',
  'If hosting or domain fees go unpaid, the provider may suspend or expire those services under its own terms, and we will notify you in advance. While maintenance is suspended, your site can stay online if hosting and domain are paid and the provider allows it.',
  'Hosting passwords are never stored in plain text.']],
 ['db','Backups and recovery',[
  'Backups of website files and database are set up as far as your hosting and storage provider allow, with schedule and retention based on those capabilities.',
  'Backups are kept in private storage, and restoring from them is tested periodically where supported.',
  'We do not promise uptime or backup recovery beyond what the hosting or storage provider and a tested setup can support.']],
 ['tag','Branding and ownership',[
  'A "Powered by Pixel Forge Studio" credit appears on a delivered client website only if it is disclosed in the quotation or agreement and you agree to it first.',
  'The studio does not claim ownership of client websites or domains through branding.']],
 ['lock','Privacy',[
  'We collect only the information needed to quote, build and support your project.',
  'You can ask us to correct your information and ask about data retention.',
  'Card details and sensitive payment credentials are never stored.']]
];
var tg=$('#tgrid');if(tg)tg.innerHTML=terms.map(function(t){return '<article class="tc rv"><h3><span>'+ic(t[0])+'</span>'+t[1]+'</h3><ul>'+t[2].map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></article>'}).join('');

/* rotating word */
var words=['small businesses','online shops','local services','growing brands'],wi=0,rot=$('#rot');
if(rot&&!reduce)setInterval(function(){
  if(A)anime({targets:rot,opacity:0,translateY:-10,duration:220,easing:'easeInQuad',complete:function(){wi=(wi+1)%words.length;rot.textContent=words[wi];anime({targets:rot,opacity:[0,1],translateY:[10,0],duration:260,easing:'easeOutQuad'})}});
},2800);

/* hero tilt */
var mock=$('#mock');
if(mock&&!reduce&&matchMedia('(hover:hover)').matches)addEventListener('mousemove',function(e){
  var x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);
  mock.style.transform='rotateY('+(-12+x*10)+'deg) rotateX('+(6-y*8)+'deg)';
});

/* scroll reveal */
var rv=$$('.rv');
if(A&&'IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){io.unobserve(en.target);anime({targets:en.target,opacity:[0,1],translateY:[18,0],duration:550,easing:'easeOutCubic',complete:function(){en.target.style.transform='';en.target.style.opacity=1}})}})},{threshold:.12});
  rv.forEach(function(el){io.observe(el)});
}else rv.forEach(function(el){el.style.opacity=1});

var hm=document.getElementById('hxMenu');
if(hm){hm.addEventListener('click',function(){var o=document.getElementById('hxLinks').classList.toggle('open');hm.setAttribute('aria-expanded',o)});
 var hero=document.getElementById('hero');
 var onS=function(){document.body.classList.toggle('past',scrollY>hero.offsetHeight-90)};addEventListener('scroll',onS,{passive:true});onS();}
})();
