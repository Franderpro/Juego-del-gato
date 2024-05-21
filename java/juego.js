let i=0
let usuario = "jerry"
let jerry = "./img/jerry.gif"
let tom = "./img/tom.gif"
let jugador = document.getElementById("jugador");
jugador.innerHTML= "juega jerry"

document.getElementById("jugador").innerHTML="juega jerry";
function juegaCompu() {
   
    turno = Math.floor(Math.random() * 9);
    salir = false;  
    do {
        if (valor[turno].childElementCount == 0) {
            let gif = document.createElement('img');
            valor[turno].classList.add("tom")
            i++;
            setTimeout(function () {
                gif.src = "./img/tom.gif"
            }, 1000);
            gif.style.height = '80px';
            jugador.innerHTML= "juega tom" 
            valor[turno].appendChild(gif);
            salir= true
        } else {
            turno = Math.floor(Math.random() * 9);
            salir = false 
        }
        
    }
    while (!salir);
    
}
function ganar(personaje) {
    
    //revisa primera fila  
    if (valor[0].classList[1] === personaje && valor[1].classList[1] === personaje && valor[2].classList[1] === personaje) {      
        limpiar()
        return true;
        

    }
    // revisa segunda fila
    else if (valor[3].classList[1] === personaje && valor[4].classList[1] === personaje && valor[5].classList[1] === personaje) {       
        limpiar()
        return true;
    }
    //revisa tercera fila
    else if (valor[6].classList[1] === personaje && valor[7].classList[1] === personaje && valor[8].classList[1] === personaje) {      
        limpiar()
        return true;
    }
    //revisa primera columna
    else if (valor[0].classList[1] === personaje && valor[3].classList[1] === personaje && valor[6].classList[1] === personaje) {        
        limpiar()
        return true;
    }
    //revisa segunda columna
    else if (valor[1].classList[1] === personaje && valor[4].classList[1] === personaje && valor[7].classList[1] === personaje) {       
        limpiar()
        return true;
    }
    // revisa tercera columna
    else if (valor[2].classList[1] === personaje && valor[5].classList[1] === personaje && valor[8].classList[1] === personaje) { 
        limpiar()
        return true;
    }
    // revisa primera diagonal
    else if (valor[0].classList[1] === personaje && valor[4].classList[1] === personaje && valor[8].classList[1] === personaje) {
        limpiar()
        return true;
    }
    //revisa segunda linea
    else if (valor[2].classList[1] === personaje && valor[4].classList[1] === personaje && valor[6].classList[1] === personaje) {
        limpiar()
        return true;
    }
return false;
}
let valor = document.getElementsByClassName("gato")
//for que recorre todos los espacion para asignarles una posicion
for (let index = 0; index < valor.length; index++) { 
    valor[index].addEventListener("click", function () {
        let gif;
        if (valor[index].childElementCount == 0) {
            gif = document.createElement("img")
            if (usuario == "jerry") {
                gif.src = "./img/jerry.gif";
               
                valor[index].classList.add("jerry")
                i++;   
            }   
        } else {    
            alert("este espacio esta lleno")
        }
        gif.style.marginLeft = "3rem"
        gif.style.height = "80px";

        console.log("JERRY ADENTRO")
       
        valor[index].appendChild(gif);
         
        setTimeout(() => {
            jugador.innerHTML= "juega jerry" 
        }, 1000);

        
        console.log("indext",index);
        if (ganar("jerry")) {
            alert(" jerry gano perdedor")  
        }
        if (i<9) {
            juegaCompu()
            if (ganar("tom")) {
                alert("tom gano perdedor")
            }
           
        }  
    });
}
//recorre todos los espaacios y me los vacia
function limpiar() {
    for (let index = 0; index < valor.length; index++) {
        valor[index].innerHTML = "";
        
    }
}