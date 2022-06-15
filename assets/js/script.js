document.addEventListener('DOMContentLoaded', function(){
    
    let counter_c = localStorage.getItem('carrinho') // contador para o carrinho
    let counter_m1 = 0 // contador para indicar a quantidade da massa1.
    let counter_m2 = 0 // contador para indicar a quantidade da massa2.
    let counter_p = 0 // contador para indicar a quantidade de pães. 
    let counter_q = 0 // contador para indicar a quantidade de queijo.

    let botao = document.querySelectorAll('button')
    let contador = document.createElement('p')
    contador = document.createElement('p')
    let carrinho = document.querySelector('.img_carrinho')
    let header = document.querySelector('header')
    let mais = document.querySelector('.mais')
    let menos = document.querySelector('.menos')
    let mais2 = document.querySelector('.mais2')
    let menos2 = document.querySelector('.menos2')

    header.appendChild(contador)
    contador.innerHTML = counter_c 
    contador.classList.add('carrinho_c')
    
    for(b of botao){
        b.addEventListener('click',function(event){
            t = event.currentTarget
            if(t == mais){
                counter_c ++
            }
            else if(t == mais2){
                counter_m1 ++
            }

            
            else{
                if (counter_c > 0 && t == menos){
                    counter_c --
                }
                else if(counter_m1 > 0 && t == menos2){
                    counter_m1 --
                }

                
            }
            contador.innerHTML = counter_c + counter_m1 
            localStorage.setItem('carrinho', contador.innerHTML)
        })
    }
 
})