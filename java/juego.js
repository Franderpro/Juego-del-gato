let usuario = "jerry"
let jerry = "./img/giphy.gif"
let tom = "./img/tom.gif"
function juegaCompu() {
     turno = Math.floor(Math.random() * 9);
     salir= false;
    do {
        console.log(valor[turno].childElementCount);
        if (valor[turno].childElementCount == 0) {     
        let gif = document.createElement('img');
        if (usuario == 'Jerry') {
            setTimeout(function () {
                gif.src = "./img/giphy.gif";
            },1000);
            
        } else {
            setTimeout(function () {
                gif.src =  "./img/tom.gif"
            }, 1000);
            
            
        }
        
        gif.style.height = '80px';
       
        valor[turno].appendChild(gif);
          
        cambiarjugador()
        ganar("jerry")
        ganar("tom")
        salir=true
       
      } else {
        turno = Math.floor(Math.random() * 9);
        
        salir=true
      }
    } 
    while(salir)

    
        
    //turno = Math.floor(Math.random() * 9);
    while (valor[turno].childElementCount == 0);
  }



/*function cambiarjugador() {
    if (usuario=="jerry") {
     usuario="turno";
    }else {
        usuario= "jerry";
    }
    
}*/

function ganar(personaje) {    
    //revisa primera fila  
        if(valor[0].classList[1]===personaje && valor[1].classList[1] ===personaje && valor[2].classList[1] ===personaje){
            alert(personaje + "gano")
        }
        // revisa segunda fila
        else if (valor[3].classList[1]===personaje && valor[4].classList[1] ===personaje && valor[5].classList[1] ===personaje) {
            alert(personaje + "gano")
        }
        //revisa tercera fila
        else if (valor[6].classList[1]===personaje && valor[7].classList[1] ===personaje && valor[8].classList[1] ===personaje) {
            alert(personaje + "gano")
        }
        //revisa primera columna
        else if (valor[0].classList[1]===personaje && valor[3].classList[1] ===personaje && valor[6].classList[1] ===personaje) {
            alert(personaje + "gano")
        }
        //revisa segunda columna
        else if (valor[1].classList[1]===personaje && valor[4].classList[1] ===personaje && valor[7].classList[1] ===personaje) {
            alert(personaje + "gano")
        }
        // revisa tercera columna
        else if (valor[2].classList[1]===personaje && valor[5].classList[1] ===personaje && valor[8].classList[1] ===personaje) {
            alert(personaje + "gano")
        }
        // revisa primera diagonal
        else if (valor[0].classList[1]===personaje && valor[4].classList[1] ===personaje && valor[8].classList[1] ===personaje) {
            alert(personaje + "gano")
        }
        //revisa segunda linea
        else if (valor[2].classList[1]===personaje && valor[4].classList[1] ===personaje && valor[6].classList[1] ===personaje) {
            alert(personaje + "gano")
        }
        
}

let valor = document.getElementsByClassName("gato")
for (let index = 0; index < valor.length; index++) {
    valor[index].addEventListener("click",function () {     
        let gif;
        if (valor[index].childElementCount == 0) {
            gif = document.createElement("img")
            
    
            if (usuario=="jerry") {
              gif.src = "./img/giphy.gif";
              valor[index].classList.add("jerry")
            }/*else{
                gif.src= "./img/tom.gif"
                valor[index].classList.add("tom")
            }
            cambiarjugador();*/
           
        }else{
            alert("este espacio esta lleno")
        }
        gif.style.marginLeft="3rem"
        gif.style.height="80px";
        valor[index].appendChild(gif);
        
        ganar("jerry");
        juegaCompu();
    });
    
}
