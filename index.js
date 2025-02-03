let tempo = 0; // Tempo em segundos
let intervaloTimer = null;

// Elementos do DOM
const displayTimer = document.getElementById("timer-display");
const botaoAdicionar = document.getElementById("add-time");
const botaoIniciar = document.getElementById("play");
const botaoPausar = document.getElementById("pause");
const botaoReiniciar = document.getElementById("reiniciar");
const widget = document.getElementById("widget");

// Sumir
function sumirButtons(){
    botaoAdicionar.style.opacity = "0"
    botaoIniciar.style.opacity = "0"
    botaoPausar.style.opacity = "0"
    botaoReiniciar.style.opacity = "0"
}

// formatar 
function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${String(minutos).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
}

// atualizar 
function atualizarDisplay() {
    displayTimer.textContent = formatarTempo(tempo);
}

// Adicionar 
botaoAdicionar.addEventListener("click", () => {
    tempo += 30;
    atualizarDisplay();
});

// Reiniciar 
botaoReiniciar.addEventListener("click", () => {
    tempo = 0;
    atualizarDisplay();
});

// Iniciar
botaoIniciar.addEventListener("click", () => {
    sumirButtons()
    if (!intervaloTimer) {
        intervaloTimer = setInterval(() => {
            if (tempo > 0) {
                tempo--;
                atualizarDisplay();
            } else {
                clearInterval(intervaloTimer);
                intervaloTimer = null;
                botaoAdicionar.style.opacity = "1"
                botaoIniciar.style.opacity = "1"
                botaoPausar.style.opacity = "1"
                botaoReiniciar.style.opacity = "1"
            }
        }, 1000);
    }
});

// Pausar 
botaoPausar.addEventListener("click", () => {
    clearInterval(intervaloTimer);
    intervaloTimer = null;
});

// visibilidade
// function alternarVisibilidade() {
//     widget.style.opacity = widget.style.opacity === "0" ? "1" : "0";
// }

// Inicializar o display
atualizarDisplay();

// Configurar visibilidade
// setInterval(() => {
//     alternarVisibilidade();
// }, 10000);
