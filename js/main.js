const root=document.documentElement;
const heroHeading=document.querySelector('.hero-v2 h1');
if(heroHeading){const title=document.createElement('p');title.className='project-title';title.innerHTML='<span>Proiectul</span>Cățeluș cu părul creț';heroHeading.before(title)}
window.addEventListener('load',()=>setTimeout(()=>root.classList.add('loaded'),250));
const menu=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Închide':'Meniu'});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='Meniu'}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const counter=document.querySelector('[data-count]');
if(counter){const countObserver=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)return;let start=0;const tick=()=>{start+=4;counter.textContent=Math.min(start,100);if(start<100)requestAnimationFrame(tick)};tick();countObserver.disconnect()},{threshold:.5});countObserver.observe(counter)}

// Actualizează aceste două valori când este confirmată o contribuție.
const fundraising={raised:0,goal:20000};
const fundingPercent=fundraising.goal?Math.min(100,fundraising.raised/fundraising.goal*100):0;
const money=value=>value.toLocaleString('ro-RO')+' €';
document.querySelector('#raised').textContent=money(fundraising.raised);
document.querySelector('#goal').textContent=money(fundraising.goal);
document.querySelector('#percent').textContent=Math.round(fundingPercent)+'%';
document.querySelector('#remaining').textContent='Mai sunt necesari '+money(Math.max(0,fundraising.goal-fundraising.raised));
document.querySelector('#progress').style.width=fundingPercent+'%';
document.querySelector('.progress-track').setAttribute('aria-valuenow',String(fundraising.raised));
