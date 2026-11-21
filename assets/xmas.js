(function(){
var END=new Date('2026-12-31T23:59:59+05:30').getTime();
if(Date.now()>=END)return;                       /* offer over: normal site */
var B=document.body;B.classList.add('xmas');
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var bulbs='';for(var i=0;i<30;i++)bulbs+='<i style="animation-delay:'+(i%6*.3)+'s"></i>';
B.insertAdjacentHTML('afterbegin','<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="i-flake" viewBox="0 0 24 24"><path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7"/></symbol></svg><div class="xbar"><div class="xin"><svg class="i"><use href="#i-flake"/></svg><b>Merry Christmas!</b><span>Christmas offer ends 31 Dec 2026. Prices return to regular afterwards.</span><span class="xt" data-mini>--</span><a href="packages.html">View offer</a></div><div class="lights" aria-hidden="true">'+bulbs+'</div></div>');
var cd='<div class="cd"><div class="cdh"><svg class="i"><use href="#i-flake"/></svg>Christmas offer ends in</div><div class="cdg"><div><b data-u="d">0</b><span>Days</span></div><div><b data-u="h">00</b><span>Hours</span></div><div><b data-u="m">00</b><span>Minutes</span></div><div><b data-u="s">00</b><span>Seconds</span></div></div><small>Ends 31 Dec 2026, 11:59 PM Sri Lanka time</small></div>';
var cta=document.querySelector('.hx2-cta'),ph=document.querySelector('.phead');
if(cta)cta.insertAdjacentHTML('beforebegin',cd);else if(ph)ph.insertAdjacentHTML('afterend',cd);
function pad(n){return n<10?'0'+n:''+n}
function tick(){var t=END-Date.now();if(t<=0){location.reload();return}
 var d=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),m=Math.floor(t%36e5/6e4),s=Math.floor(t%6e4/1e3);
 [].forEach.call(document.querySelectorAll('[data-u]'),function(e){var u=e.getAttribute('data-u');e.textContent=u==='d'?d:pad(u==='h'?h:u==='m'?m:s)});
 [].forEach.call(document.querySelectorAll('[data-mini]'),function(e){e.textContent=d+'d '+pad(h)+'h '+pad(m)+'m '+pad(s)+'s'})}
tick();setInterval(tick,1000);
/* hero: Christmas photo + animated tree */
var hero=document.getElementById('hero'),bg=document.querySelector('.hx2-bg');
if(hero){
 if(bg){var o=bg.src;bg.onerror=function(){bg.onerror=null;bg.src=o};bg.src='https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1800&q=70'}
 hero.insertAdjacentHTML('beforeend','<svg class="xtree" viewBox="0 0 120 150" aria-hidden="true"><polygon points="60,10 95,60 25,60" fill="#1f8a4c"/><polygon points="60,35 105,95 15,95" fill="#23a05a"/><polygon points="60,65 115,130 5,130" fill="#2bb866"/><rect x="52" y="130" width="16" height="20" fill="#8b5a2b"/><polygon points="60,0 63,8 72,8 65,13 68,22 60,17 52,22 55,13 48,8 57,8" fill="#ffd66b"/><circle class="bl" cx="60" cy="48" r="4" fill="#ff4d5e"/><circle class="bl" cx="45" cy="78" r="4" fill="#ffd66b"/><circle class="bl" cx="76" cy="82" r="4" fill="#5aa9ff"/><circle class="bl" cx="30" cy="112" r="4" fill="#ff4d5e"/><circle class="bl" cx="60" cy="104" r="4" fill="#fff"/><circle class="bl" cx="92" cy="114" r="4" fill="#ffd66b"/></svg>');
}
/* snowfall */
if(!reduce){
 var c=document.createElement('canvas');c.id='snow';B.appendChild(c);var x=c.getContext('2d'),W,H,fl=[];
 function rs(){W=c.width=innerWidth;H=c.height=innerHeight}rs();addEventListener('resize',rs);
 for(var k=0;k<Math.min(90,Math.floor(innerWidth/16));k++)fl.push({x:Math.random()*W,y:Math.random()*H,r:1+Math.random()*3,s:.4+Math.random()*1.1,d:Math.random()*6.28});
 (function f(){x.clearRect(0,0,W,H);x.fillStyle='rgba(255,255,255,.95)';x.strokeStyle='rgba(120,150,200,.4)';x.lineWidth=1;
  for(var i=0;i<fl.length;i++){var p=fl[i];p.y+=p.s;p.d+=.01;p.x+=Math.sin(p.d)*.5;if(p.y>H+5){p.y=-5;p.x=Math.random()*W}if(p.x>W+5)p.x=-5;if(p.x<-5)p.x=W+5;x.beginPath();x.arc(p.x,p.y,p.r,0,6.28);x.fill();x.stroke()}
  requestAnimationFrame(f)})();
}
})();
