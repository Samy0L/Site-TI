const menu=document.querySelector('.menu-toggle');const links=document.querySelector('.nav-links');if(menu){menu.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex';links.style.position='absolute';links.style.top='68px';links.style.left='14px';links.style.right='14px';links.style.padding='16px';links.style.background='#fffdf9';links.style.border='1px solid #dce5e9';links.style.borderRadius='16px';links.style.flexDirection='column';links.style.boxShadow='0 20px 40px rgba(9,38,61,.12)'})}
// Live fundraising is intentionally zero until real contributions are entered.
const fundraising={raised:0,goal:20000};
const percent=fundraising.goal?fundraising.raised/fundraising.goal*100:0;
document.querySelector('#raised').textContent=`${fundraising.raised.toLocaleString('ro-RO')} €`;
document.querySelector('#percent').textContent=`${percent.toFixed(0)}%`;
document.querySelector('#progress').style.width=`${percent}%`;
