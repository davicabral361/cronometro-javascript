var segundos = 0;
var atualizarCronometroIntervalo;

function atualizarCronometro() {
segundos++;
document.getElementById("cronometro").innerHTML = segundos;
}

atualizarCronometroIntervalo = setInterval(atualizarCronometro, 1000);

function pausarCronometro() {
if (atualizarCronometroIntervalo) {
clearInterval(atualizarCronometroIntervalo);
atualizarCronometroIntervalo = null;
document.getElementById("botaoPausa").innerHTML = "Continuar";
} else {
atualizarCronometroIntervalo = setInterval(atualizarCronometro, 1000);
document.getElementById("botaoPausa").innerHTML = "Pausar";
}
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoPausa").addEventListener("click", pausarCronometro);
  });
