const casilla= document.querySelectorAll('.recuadros')
const body = document.querySelector('body')
let player1=true
for(let i=0; i<casilla.length;i++){
  casilla[i].addEventListener('click', marcar)
}
function marcar(event){
const marcado = event.target
let turno= event.target.innerHTML
if(!turno.length){
  if(player1){
    marcado.classList.remove('recuadros')
    marcado.classList.add('recuadrosP1')
    event.target.innerText=' '
    player1=false
  }
  else{
    marcado.classList.remove('recuadros')
    marcado.classList.add('recuadrosP2')
    event.target.innerText='  '

    player1=true
  }
  identificar(0,1,2) 
  identificar(3,4,5)
  identificar(6,7,8)
  identificar(0,3,6)
  identificar(1,4,7)
  identificar(2,5,8)
  identificar(0,4,8)
  identificar(6,4,2)
}
}

function identificar(a,b,c){
 if( 
  casilla[a].innerHTML.length==2 &&
  casilla[b].innerHTML.length==2 &&
  casilla[c].innerHTML.length==2
 ) {
    body.innerHTML='El ganador es el Player 2' 

  }
if( 
    casilla[a].innerHTML.length==1 &&
    casilla[b].innerHTML.length==1 &&
    casilla[c].innerHTML.length==1
  ) {
    body.innerHTML='El ganador es el Player 1' 
  
  }


 }
