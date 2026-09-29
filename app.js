const periods={
  '7d':{revenue:'R$ 48,2 mil',clients:'132',tasks:'89%',response:'18 min'},
  '30d':{revenue:'R$ 184,7 mil',clients:'418',tasks:'94%',response:'21 min'},
  '90d':{revenue:'R$ 526,4 mil',clients:'1.204',tasks:'91%',response:'24 min'}
};
document.querySelectorAll('[data-period]').forEach(button=>button.onclick=()=>{
  document.querySelectorAll('[data-period]').forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  const data=periods[button.dataset.period];
  Object.entries(data).forEach(([key,value])=>document.querySelector('[data-metric="'+key+'"]').textContent=value);
});
document.querySelectorAll('[data-task]').forEach(button=>button.onclick=()=>{
  button.classList.toggle('done');
  button.textContent=button.classList.contains('done')?'Concluída':'Concluir';
});
document.querySelector('[data-menu]')?.addEventListener('click',()=>document.querySelector('.sidebar').classList.toggle('open'));
