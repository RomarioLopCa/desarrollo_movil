/**
 * Created by romarin on 25/08/15.
 */


function init() {
    var p = document.getElementById("p01");
    alert(p.innerHTML);

    p.innerHTML = "Nuevo parrafo";
    p.setAttribute("class", "parrafo")
}

window.onload = init;