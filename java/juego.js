let i = 0
let usuario = "jerry"
let jerry = "./img/jerry.gif"
let tom = "./img/tom.gif"
let ganadas=0;
let jugador = document.getElementById("jugador");
jugador.innerHTML = "juega jerry"
document.getElementById("jugador").innerHTML = "juega jerry";
let partidas = document.getElementById("partidas")
let partidas2 = document.getElementById("partidas2")
let partidas3 = document.getElementById("partidas3")
let registroUser= [];
//se obtiene los datos de las partidas ganadas
let ganadortom= localStorage.getItem("ganadortom")
partidas2.innerHTML = ganadortom;
let ganadorJerry= localStorage.getItem("ganadorJerry")
partidas.innerHTML = ganadorJerry;
let empates= localStorage.getItem("empates")
partidas3.innerHTML = empates;
//esta funcion hace que la compu juege
function juegaCompu() {
    turno = Math.floor(Math.random() * 9);// genera turnos aleatorios
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
            jugador.innerHTML = "juega tom"
            valor[turno].appendChild(gif);
            salir = true
        } else {
            turno = Math.floor(Math.random() * 9);
            salir = false
        }
    }
    while (!salir);
}
// valida los ganes
function ganar(personaje) {
    //revisa primera fila  
    if (valor[0].classList[1] === personaje && valor[1].classList[1] === personaje && valor[2].classList[1] === personaje) {
        setTimeout(() => {
            limpiar()
        }, 3000);
        return true;
    }
    // revisa segunda fila
    else if (valor[3].classList[1] === personaje && valor[4].classList[1] === personaje && valor[5].classList[1] === personaje) {
        setTimeout(() => {
            limpiar()
        }, 3000);
        return true;
    }
    //revisa tercera fila
    else if (valor[6].classList[1] === personaje && valor[7].classList[1] === personaje && valor[8].classList[1] === personaje) {
        setTimeout(() => {
            limpiar()
        }, 3000);
        return true;
    }
    //revisa primera columna
    else if (valor[0].classList[1] === personaje && valor[3].classList[1] === personaje && valor[6].classList[1] === personaje) {
        setTimeout(() => {
            limpiar()
        }, 3000);

        return true;
    }
    //revisa segunda columna
    else if (valor[1].classList[1] === personaje && valor[4].classList[1] === personaje && valor[7].classList[1] === personaje) {
        setTimeout(() => {
            limpiar()
        }, 3000);

        return true;
    }
    // revisa tercera columna
    else if (valor[2].classList[1] === personaje && valor[5].classList[1] === personaje && valor[8].classList[1] === personaje) {
        setTimeout(() => {
            limpiar()
        }, 3000);

        return true;
    }
    // revisa primera diagonal
    else if (valor[0].classList[1] === personaje && valor[4].classList[1] === personaje && valor[8].classList[1] === personaje) {
        setTimeout(() => {
            limpiar()
        }, 3000);

        return true;
    }
    //revisa segunda linea
    else if (valor[2].classList[1] === personaje && valor[4].classList[1] === personaje && valor[6].classList[1] === personaje) {
        setTimeout(() => {
            limpiar()
        }, 3000);
        return true;
    }
    return false;
}

let valor = document.getElementsByClassName("gato")
//for que recorre todos los espacion para asignarles una posicion
for (let index = 0; index < valor.length; index++) {
    valor[index].addEventListener("click", function () {
        let gif;
        let jugar = true
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
        valor[index].appendChild(gif);
        setTimeout(() => {
            jugador.innerHTML = "juega jerry"
        }, 1000);
        if (ganar("jerry")) {
            ganadas=Number(ganadorJerry)
            ganadas++ 
            
            localStorage.setItem("ganadorJerry",ganadas)
            alert(" jerry gano perdedor")
            setTimeout(() => {
               window.location.reload()
            }, 1000);
                
            return;
        }
        if (i < 9) {
            console.log("hola");
            juegaCompu()
            if (ganar("tom")) {
                ganadas=Number(ganadortom)
                ganadas++
                localStorage.setItem("ganadortom",ganadas)
               
                alert("tom gano perdedor")
                setTimeout(() => {
                    window.location.reload()
                 }, 1000);
            }
        }
        else{
            ganadas=Number(empates)
            ganadas++
            localStorage.setItem("empates",ganadas)
            alert("empate")
            setTimeout(() => {
                window.location.reload()
             }, 1000);
        }
    });
}
//recorre todos los espaacios y me los vacia
function limpiar() {
    if ("ganadorJerry"!="" && "ganadortom"!="" && "empates"!="") {
        localStorage.removeItem("ganadorJerry");
        partidas.innerHTML=""
        localStorage.removeItem("ganadortom");
        partidas2.innerHTML=""
        localStorage.removeItem("empates");
        //localStorage.removeItem("registro"); 
        partidas3.innerHTML=""
        window.location.href = "login.html"
    }
        
}