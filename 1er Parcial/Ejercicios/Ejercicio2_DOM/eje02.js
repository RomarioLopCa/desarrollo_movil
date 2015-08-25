/**
 * Created by romarin on 25/08/15.
 */


function init() {
    //Se selecciona el elemento con id=p01
    var p = document.getElementById("p01");
    //alert(p.innerHTML);

    //Se le agrega la clase parrafo al objeto p
    p.innerHTML = "Nuevo parrafo";
    p.setAttribute("class", "parrafo")


    //Seleccionamos todos los elementos con tag p (parrafo)
    var ps = document.getElementsByTagName("p");
    //Ocultamos todos los parrafos
    for (var i = 0; i < ps.length; i++) {
        ps[i].style.display = "none";
    }

    //Seleccionamos todos los elementos con tag button (boton)
    var buttons = document.getElementsByTagName('button');

    //Esta parte se utiliza si es que no le añadimos a los tags
    //de button el atributo onclick=toggle(this)
    //Le añadimos las funciones on click a todos los botones
    //for (var i = 0; i < buttons.length; i++) {
    //    buttons[i].onclick = function () {
    //        toggle(this)
    //    };
    //}
}

window.onload = init;

function toggle(btn) {
    //Seleccionamos al elemento p
    var p = btn.parentNode.parentNode.getElementsByTagName("p")[0];

    //Comprobamos si está desplegado (block) u oculta (none)
    if (p.style.display == "block") {
        p.style.display = "none";
        btn.innerHTML = "Detalles";
    } else {
        p.style.display = "block";
        btn.innerHTML = "Ocultar";
    }
}