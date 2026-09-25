document.addEventListener('DOMContentLoaded',()=>{
  const m=document.querySelector('.menu'),n=document.querySelector('.mobile-nav');
  if(m&&n)m.onclick=()=>n.classList.toggle('open');
  const c=document.querySelector('.mobile-call');
  if(c){const f=()=>c.classList.toggle('show',scrollY>260);addEventListener('scroll',f,{passive:true});f()}
  const icons={
    Instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
    Facebook:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.7.3-1 1-1Z"/></svg>',
    Google:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.4a4.6 4.6 0 0 1-2 3v2.6h3.3c1.9-1.8 2.9-4.4 2.9-7.5Z"/><path d="M12 22c2.7 0 5-.9 6.7-2.3l-3.3-2.6c-.9.6-2.1 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2H3v2.7A10 10 0 0 0 12 22Z" opacity=".85"/><path d="M6.4 13.9A6 6 0 0 1 6 12c0-.7.1-1.3.4-1.9V7.4H3A10 10 0 0 0 3 16.6l3.4-2.7Z" opacity=".7"/><path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A9.7 9.7 0 0 0 12 2a10 10 0 0 0-9 5.4l3.4 2.7C7.2 7.7 9.4 5.9 12 5.9Z" opacity=".55"/></svg>',
    Nextdoor:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5c1.7 0 2.7 1 3.6 2.3L9 9.9V6h4v4l1.4-2.2C15.3 6.5 16.3 5.5 18 5.5c2.4 0 4 1.8 4 4.5h-3c0-1-.4-1.5-1-1.5-.6 0-1 .4-1.5 1.2L13 15v4H9v-4l-3.5-5.3C5 8.9 4.6 8.5 4 8.5c-.6 0-1 .5-1 1.5H0c0-2.7 1.6-4.5 4-4.5Z"/></svg>'
  };
  document.querySelectorAll('.social[aria-label]').forEach(el=>{const k=el.getAttribute('aria-label');if(icons[k])el.innerHTML=icons[k]});
  document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const b=f.querySelector('button[type=submit]');if(b){b.textContent='Request received';b.disabled=true}alert('Demo form only. Connect this form to your CRM, email provider, or scheduling workflow before launch.')}));
});
