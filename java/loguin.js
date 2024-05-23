let nombre= document.getElementById("nombre")
let correo= document.getElementById("correo")
let password= document.getElementById("password")
registroUser=[];
function inicio() {
    registroUser=JSON.parse(localStorage.getItem("registro"+nombre.value)) || [];
    encontrado= registroUser.find(usuario=> usuario.nombre==nombre.value && usuario.correo==correo.value && usuario.password==password.value)
    if (encontrado) {
        alert("BIEN HECHO")
        localStorage.setItem("registro"+nombre.value,JSON.stringify(encontrado))
        
        window.location.href = "juego.html"

    }
    else if (inicio) {

        alert("ESTE USUARIO NO TIENE CUENTA")
    }
}
