(function(){
window.lucide&&lucide.createIcons();
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
// intro word highlight on scroll
var it=document.getElementById('intro-text');
if(it){var html='';it.childNodes.forEach(function(n){var em=n.nodeType===1;(n.textContent||'').split(/(\s+)/).forEach(function(w){html+=/^\s+$/.test(w)||!w?w:'<span class="w'+(em?' em':'')+'">'+w+'</span>'})});it.innerHTML=html;
var ws=[].slice.call(it.querySelectorAll('.w'));
var upd=function(){var r=it.getBoundingClientRect(),p=reduce?1:Math.min(1,Math.max(0,(innerHeight*.85-r.top)/(r.height+innerHeight*.35)));var k=Math.round(p*ws.length);ws.forEach(function(w,i){w.classList.toggle('on',i<k)})};
addEventListener('scroll',upd,{passive:true});upd();}
// domains rail
var rail=document.getElementById('dom-rail'),pv=document.getElementById('rail-prev'),nx=document.getElementById('rail-next');
if(rail){var st=function(){pv.disabled=rail.scrollLeft<4;nx.disabled=rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-4};var step=function(d){var c=rail.querySelector('.dom-card');rail.scrollBy({left:d*(c.offsetWidth+14),behavior:'smooth'})};
pv.addEventListener('click',function(){step(-1)});nx.addEventListener('click',function(){step(1)});rail.addEventListener('scroll',st,{passive:true});addEventListener('resize',st);st();}
// accordion
document.querySelectorAll('#acc .acc-q').forEach(function(b){b.addEventListener('click',function(){var i=b.parentElement,o=i.classList.contains('open');document.querySelectorAll('#acc .acc-i').forEach(function(x){x.classList.remove('open');x.querySelector('.acc-q').setAttribute('aria-expanded','false')});if(!o){i.classList.add('open');b.setAttribute('aria-expanded','true')}})});
// process progress
var steps=document.getElementById('steps'),prog=document.getElementById('steps-prog');
if(steps){var rows=[].slice.call(steps.querySelectorAll('.step-row'));var su=function(){var r=steps.getBoundingClientRect(),mid=innerHeight*.55,h=Math.min(r.height-16,Math.max(0,mid-r.top));prog.style.height=h+'px';rows.forEach(function(row){row.classList.toggle('lit',row.getBoundingClientRect().top+20<mid)})};addEventListener('scroll',su,{passive:true});su();}
})();
