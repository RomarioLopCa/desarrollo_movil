/**
 window.onload = function(){
        var p = document.getElementById("p01");
        alert(p.innerHTML);
    };
 */

function init() {
    var p = document.getElementById("p03");
    //alert(p.innerHTML);
    p.innerHTML = "Nuevo parrafo para p";
    p.setAttribute("class", "parrafo");
    p.style.display = "none";

}
window.onload = init;


function toggle(boton) {
    var p = boton.parentNode.parentNode.getElementsByTagName("p");

    if (p[0].style.display == "block") {
        p[0].style.display = "none";
        boton.innerHTML = "Detalles";
    } else {

        boton.innerHTML = "Ocultar";
        p[0].style.display = "block";
    }
}


