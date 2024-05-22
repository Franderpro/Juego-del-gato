let nombre= document.getElementById("nombre")
let correo= document.getElementById("correo")
let password= document.getElementById("password")
registroUser=[];
function inicio() {
    registroUser=JSON.parse(localStorage.getElementById("registro"+nombre.value))
    encontrado= registroUser.find(usuario=> usuario.nombre==nombre.value && usuario.correo==correo.value && usuario.password== password.value)
    if (encontrado) {
        alert("BIEN HECHO")
        localStorage.setItem("registro"+nombre.value,JSON.stringify(encontrado))
        
        window.location.href = "indext.html"

    }
    else if (inicio) {

        alert("ESTE USUARIO NO TIENE CUENTA")
    }
}
