// Floating background icons
const fl=document.getElementById('floaters');
const icons=['📊','📈','🗄️','🧠','🥧','〰️'];
const colors=['#c084fc','#22d3ee','#fb923c','#4ade80','#f472b6','#60a5fa'];
for(let i=0;i<14;i++){
  const s=document.createElement('span');s.className='fl';s.textContent=icons[i%icons.length];
  s.style.left=Math.random()*95+'%';s.style.top=Math.random()*90+'%';
  s.style.animationDuration=(6+Math.random()*8)+'s';s.style.animationDelay=(-Math.random()*8)+'s';
  fl.appendChild(s);
}
for(let i=0;i<30;i++){
  const d=document.createElement('span');d.className='dot';
  d.style.background=colors[i%colors.length];
  d.style.left=Math.random()*100+'%';d.style.top=Math.random()*100+'%';
  d.style.animationDuration=(5+Math.random()*8)+'s';d.style.animationDelay=(-Math.random()*8)+'s';
  fl.appendChild(d);
}
// Project filter
const btns=document.querySelectorAll('.filters button');
const projs=document.querySelectorAll('.proj');
btns.forEach(b=>b.addEventListener('click',()=>{
  btns.forEach(x=>x.classList.remove('active'));b.classList.add('active');
  const f=b.dataset.f;
  projs.forEach(p=>p.classList.toggle('hide',f!=='all'&&!p.dataset.cat.split(' ').includes(f)));
}));
// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.card,.box,h2').forEach(el=>{el.classList.add('rv');io.observe(el)});
document.getElementById('yr').textContent=new Date().getFullYear();
 