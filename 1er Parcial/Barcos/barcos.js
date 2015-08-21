/**
 * Created by romarin on 20/08/15.
 */


boardSize = 3;
board = new Array(boardSize);


window.onload = function () {
    boardSize = parseInt(prompt("Ingresa el tamaño del tablero (sólo números)"));
    drawPoints();

    for (var n = 0; n < boardSize; n++) {
        board[n] = new Array(boardSize);
    }

    var drawing = "<table border='1'>";
    for (var i = 0; i < boardSize; i++) {
        drawing += "<tr>";
        for (var j = 0; j < boardSize; j++) {
            drawing += "<td id='" + i + "," + j + "' style=' padding: 20px  '></td>";
            board[i][j] = 0;
        }
        drawing += "</tr>"
    }
    drawing += "</table";
    document.getElementById("board").innerHTML = drawing;

    for (var i = 0; i < boardSize; i++) {
        var x = Math.floor((Math.random() * boardSize ));
        var y = Math.floor((Math.random() * boardSize));

        if (board[x][y] == 1) {
            i--;
        } else {
            board[x][y] = 1;
        }
    }

};

gameWin = 0;
shots = 0;

function shot() {

    var coordinate = document.getElementById("coords");
    var x = parseInt(coordinate.value.split(" ")[0]);
    var y = parseInt(coordinate.value.split(" ")[1]);

    if (x >= boardSize || y >= boardSize || isNaN(x) || isNaN(y)) {
        message("Números del 0 al " + (boardSize - 1), "gray");
    } else {
        if (board[x][y] != 0) {
            if (board[x][y] == 3) {
                message("Este barco ya está muerto", "purple");
            } else {
                board[x][y] += 1;
                if (board[x][y] == 3) {
                    gameWin += 1;
                    document.getElementById(x + "," + y).innerHTML = 'X';
                    message("Mataste al barco", "red");

                } else {
                    document.getElementById(x + "," + y).innerHTML = '*';
                    message("Le diste al barco", "orange");
                }
                shots += 1;

            }
        } else {
            message("Fallaste JAJA", "blue");
            document.getElementById(x + "," + y).innerHTML = '0';
            shots += 1;
        }
    }

    coordinate.value = "";
    coordinate.focus();
    drawPoints();

    if (gameWin == boardSize) {
        alert("GANASTE!!")
    }
}

function drawPoints() {
    document.getElementById("destroyed_ships").innerHTML = gameWin;
    document.getElementById("shots_done").innerHTML = shots;
    document.getElementById("ships_left").innerHTML = boardSize - gameWin;
    console.log("Puntuación: " + gameWin + ", Displaros hechos: " + shots);
}

function message(str, color) {
    var msg = document.getElementById("message");
    var result = str.fontcolor(color);
    msg.innerHTML = result;
}