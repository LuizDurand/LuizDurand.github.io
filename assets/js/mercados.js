document.addEventListener('DOMContentLoaded', function(){
    let num = localStorage.getItem('carrinho')
    let header = document.querySelector('header')
    let qnt = document.createElement('p')
    header.appendChild(qnt)
    qnt.innerHTML = num
    qnt.classList.add('qnt')
    localStorage.clear()
})