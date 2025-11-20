document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  btn && btn.addEventListener('click', ()=> nav.classList.toggle('open'));
  const io = new IntersectionObserver((entries)=> entries.forEach(e=> e.isIntersecting && e.target.classList.add('in')), {threshold: .12});
  document.querySelectorAll('.fade-up').forEach(el=> io.observe(el));
  document.querySelectorAll('.gallery img').forEach(img=>{
    img.addEventListener('click', ()=>{
      const src = img.dataset.src || img.src;
      const modal = document.createElement('div'); modal.className='lb-modal';
      modal.innerHTML = `<div class="lb-backdrop"></div><div class="lb-content"><img src="${src}" /><button class="lb-close">✕</button></div>`;
      document.body.appendChild(modal); document.body.style.overflow='hidden';
      modal.querySelector('.lb-close').addEventListener('click', ()=>{ modal.remove(); document.body.style.overflow='';});
      modal.querySelector('.lb-backdrop').addEventListener('click', ()=>{ modal.remove(); document.body.style.overflow='';});
    });
  });
});