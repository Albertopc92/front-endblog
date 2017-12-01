window.onload = function () {
    var contexto = cargaContextoCanvas('etiquetaCanvas');
    if (contexto) {

        contexto.fillStyle = '#494E52';
        contexto.beginPath();
        contexto.moveTo(4, 18);
        contexto.lineTo(15, 29); 
        contexto.lineTo(28, 17);
        contexto.lineTo(28, 5);
        contexto.lineTo(16, 5);
        contexto.lineTo(4, 18);
        contexto.closePath();
        contexto.fill();

    }
}

function cargaContextoCanvas(idCanvas) {
    var elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        var contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}