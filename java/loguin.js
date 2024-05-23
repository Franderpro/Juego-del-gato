let nombre= document.getElementById("nombre")
let correo= document.getElementById("correo")
let password= document.getElementById("password")


registroUser=JSON.parse(localStorage.getItem("registro")) || [];
function inicio() {
    



    let valores = registroUser[0]
    
    const llaves= Object.values(valores ); 


    console.log(llaves)
 

   let encontrado= llaves.map(usuario=> usuario[0]==nombre.value && usuario[1]==correo.value && usuario[2]==password.value);
   if (encontrado) {
    window.location.href = "juego.html"
    
   }


}
