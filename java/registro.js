let nombre= document.getElementById("nombre")
let correo= document.getElementById("correo")
let password= document.getElementById("password")
registroUser=[];
function registrar(){
    registroUser= JSON.parse(localStorage.getItem("registro"+nombre.value)) || [];
    encontrado= registroUser.find (usuario=> usuario.ID==ID.value &&  usuario.email==email.value)
if (encontrado!=undefined) {
    alert("este usuario ya esta registrado")
    return;
}
if (nombre !="" && correo !="" && password != "") {
   data={
    nombre: nombre.value,
    correo: correo.value,
    password: password.value
   } 
   registroUser.push(data)

        localStorage.setItem(("registro"+ nombre.value),JSON.stringify(registroUser))
        window.location.href= "login.html"
}

}