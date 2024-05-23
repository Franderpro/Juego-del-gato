let nombre = document.getElementById("nombre")
let correo = document.getElementById("correo")
let password = document.getElementById("password")
registroUser = [];
function registrar() {
    registroUser = JSON.parse(localStorage.getItem("registro")) || [];
    encontrado = registroUser.find(usuario => usuario.nombre == nombre.value && usuario.correo == correo.value && usuario.password==password.value)
    if (encontrado != undefined) {
        alert("este usuario ya esta registrado")
        return;
    }
    if (nombre != "" && correo != "" && password != "") {
        data = {
            nombre: nombre.value,
            correo: correo.value,
            password: password.value
        }
        registroUser.push(data)

        localStorage.setItem(("registro"), JSON.stringify(registroUser))
        window.location.href = "login.html"
    }

}