const boton= document.getElementsByClassName("boton");
const div= document.getElementById("div");

function alerta(){
    alert("Hola!");
}


document.addEventListener("click", (event) => { 
    if (event.target === div && event.target !== boton.length) {
    funcion();
    }
});
function funcion(){
    document.getElementById("div").innerHTML = "Hola, Soy el Div!";
    
}
