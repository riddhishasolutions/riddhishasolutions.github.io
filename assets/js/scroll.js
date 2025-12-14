document.addEventListener('scroll',()=>{
document.querySelectorAll('.fade').forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-120){
el.classList.add('show')
}})
})