let i=0
let usuario = "jerry"
let jerry = "./img/jerry.gif"
let tom = "./img/tom.gif"
function juegaCompu() {
    turno = Math.floor(Math.random() * 9);
    salir = false;
    
    do {
        console.log((turno));
        if (valor[turno].childElementCount == 0) {
            let gif = document.createElement('img');
            valor[turno].classList.add("tom")
            i++;
            setTimeout(function () {
                gif.src = "./img/tom.gif"
            }, 1000);
            gif.style.height = '80px';
            valor[turno].appendChild(gif);
            salir= true
        } else {
            turno = Math.floor(Math.random() * 9);
            salir = false
        }
    }
    while (!salir);
}
/*function cambiarjugador() {
    if (usuario=="jerry") {
     usuario="turno";
    }else {
        usuario= "jerry";
    }
    
}*/

function ganar(personaje) {
    console.log(valor[0].classList[1]);
    //revisa primera fila  
    if (valor[0].classList[1] === personaje && valor[1].classList[1] === personaje && valor[2].classList[1] === personaje) {
       // alert(personaje + "gano")
        return true;
    }
    // revisa segunda fila
    else if (valor[3].classList[1] === personaje && valor[4].classList[1] === personaje && valor[5].classList[1] === personaje) {
        //alert(personaje + "gano")
        return true;
    }
    //revisa tercera fila
    else if (valor[6].classList[1] === personaje && valor[7].classList[1] === personaje && valor[8].classList[1] === personaje) {
        //alert(personaje + "gano")
        return true;
    }
    //revisa primera columna
    else if (valor[0].classList[1] === personaje && valor[3].classList[1] === personaje && valor[6].classList[1] === personaje) {
        //alert(personaje + "gano")
        return true;
    }
    //revisa segunda columna
    else if (valor[1].classList[1] === personaje && valor[4].classList[1] === personaje && valor[7].classList[1] === personaje) {
        //alert(personaje + "gano")
        return true;
    }
    // revisa tercera columna
    else if (valor[2].classList[1] === personaje && valor[5].classList[1] === personaje && valor[8].classList[1] === personaje) {
       // alert(personaje + "gano")
        return true;
    }
    // revisa primera diagonal
    else if (valor[0].classList[1] === personaje && valor[4].classList[1] === personaje && valor[8].classList[1] === personaje) {
        //alert(personaje + "gano")
        return true;
    }
    //revisa segunda linea
    else if (valor[2].classList[1] === personaje && valor[4].classList[1] === personaje && valor[6].classList[1] === personaje) {
       // alert(personaje + "gano")
        return true;
    }
return false;

}

let valor = document.getElementsByClassName("gato")

for (let index = 0; index < valor.length; index++) {
    
    valor[index].addEventListener("click", function () {
        let gif;
        if (valor[index].childElementCount == 0) {
            gif = document.createElement("img")
            if (usuario == "jerry") {
                gif.src = "./img/jerry.gif";
                valor[index].classList.add("jerry")
                i++;
            }/*else{
                gif.src= "./img/tom.gif"
                valor[index].classList.add("tom")
            }
            cambiarjugador();*/
        } else {
            alert("este espacio esta lleno")
        }
        gif.style.marginLeft = "3rem"
        gif.style.height = "80px";
        valor[index].appendChild(gif);
        console.log("indext",index);
        if (ganar("jerry")) {
            alert(" jerry gano perra")
            console.log("hola")
        }
        console.log("teextrañopor=",i)
        if (i<9) {
            juegaCompu()
            console.log("juegaCompu");
            if (ganar("tom")) {
                alert("tom gano perra")
                console.log("teextraño")
                
            }
        }
    });

}
