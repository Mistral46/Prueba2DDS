//llenar 5 inputs con números del 1 al 13
//generar boton que permita repartir cartas entre 1 y 13
//para cada jugador
//generar boton resultado según jerarquía

const LineBreak = () => {
    var br = document.createElement('br')
    body.appendChild(br)
}
var body = document.body
//5 inputs por jugador
var player1 = document.createElement('label')
player1.id = "Player_1"
player1.innerHTML ="Player 1 :"
body.appendChild(player1)
LineBreak()

for(let i=0;i<=4;i++){
    var inputP1 = document.createElement('input')
    inputP1.id= `input1_${i}`
    inputP1.className='input1'
    inputP1.setAttribute('type','number')
    inputP1.value=0
    body.appendChild(inputP1)
    LineBreak()
}
//5 inputs jugador 2
var player2=document.createElement('label')
player2.id='Player_2'
player2.innerHTML='Player 2 :'
body.appendChild(player2)
LineBreak()

for(let i=0;i<=4;i++){
    var inputP2 = document.createElement('input')
    inputP2.id= `input2_${i}`
    inputP2.className='input2'
    inputP2.setAttribute('type','number')
    inputP2.value=0
    body.appendChild(inputP2)
    LineBreak()
}
// Resultados
var resultados=document.createElement('label')
resultados.id = 'resultado'
resultados.innerHTML='Resultado :'
body.appendChild(resultados)
LineBreak()

//Boton repartir
var btnRepartir1=document.createElement('button')
btnRepartir1.id='botonRepartirP1'
btnRepartir1.innerHTML='Repartir al Player 1'
btnRepartir1.onclick = ()=>RepartirCartas(1)
body.appendChild(btnRepartir1)

var btnRepartir2=document.createElement('button')
btnRepartir2.id='botonRepartirP2'
btnRepartir2.innerHTML='Repartir al Player 2'
btnRepartir2.onclick = ()=>RepartirCartas(2)
body.appendChild(btnRepartir2)

// Boton Calcular
var btn_calcular = document.createElement('button')
btn_calcular.id='btn-calcular'
btn_calcular.innerHTML='Calcular Ganador'
btn_calcular.onclick = () => calcular ()
divPS.appendChild(btn_calcular)
LineBreak()

// puntajes
var puntaje1= document.createElement('label')
puntaje1.id='puntaje1'
puntaje1.innerHTML=''
body.appendChild(puntaje1)
LineBreak()
var puntaje2= document.createElement('label')
puntaje2.id='puntaje2'
puntaje2.innerHTML=''
body.appendChild(puntaje2)

var inputs1=[]
var inputs2=[]
var juego1=0
var juego2=0
divPS.innerHTML = ''
//Rellenar inputs
RepartirCartas=(player) =>{
    inputs1=[]
    inputs2=[]

    if (player ==1){
        for(let i=0;i<=4;i++){
            do{
                carta=Math.round(Math.random()*10)+1
            }while(carta>12)
            document.getElementById(`input1_${i}`).value=carta
        }
        var juego1=document.querySelectorAll('.input1')
        juego1.forEach(element => {
            juego1=juego1+parseInt(element.value)
            inputs1.push(carta)
        });
    }
    if(player==2){
        for(let i=0;i<=4;i++){
            do{
                carta=Math.round(Math.random()*10)+1
            }while(carta>12)
            document.getElementById(`input2_${i}`).value=carta
        }
    var juego2=document.querySelectorAll('.input2')
    juego2.forEach(element=>{
        juego2=juego2+parseInt(element.value)
        inputs2.push(carta)
    });
    }
    if(juego1%2==0 ){
        resultados.innerHTML='Resultado : Jugador 1 Gana con un par'
    }
    if(juego1%3==0 ){
        resultados.innerHTML='Resultado : Jugador 1 Gana con un trio'
    }
    if(juego2%2==0){
        resultados.innerHTML='Resultado : Jugador 2 Gana con un par'
    }
    if(juego2%3==0){
        resultados.innerHTML='Resultado : Jugador 2 Gana con un trio'
    }

}
calcular = () =>{
    for(let i=0;i<=4;i++){
        document.getElementById(`entrada2_${i}`).value=carta
        document.getElementById(`entrada1_${i}`).value=carta
    }
}