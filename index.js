let tempo = 0; // Tempo em segundos
let intervaloTimer = null;

// Elementos do DOM
const displayTimer = document.getElementById("timer-display");
const botaoAdicionar = document.getElementById("add-time");
const botaoIniciar = document.getElementById("play");
const botaoPausar = document.getElementById("pause");
const botaoReiniciar = document.getElementById("reiniciar");
const widget = document.getElementById("widget");

// Função para formatar o tempo como MM:SS
function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${String(minutos).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
}

// Função para atualizar o display
function atualizarDisplay() {
    displayTimer.textContent = formatarTempo(tempo);
}

// Adicionar 30 segundos
botaoAdicionar.addEventListener("click", () => {
    tempo += 30;
    atualizarDisplay();
});

// Reiniciar o timer
botaoReiniciar.addEventListener("click", () => {
    tempo = 0;
    atualizarDisplay();
});

// Iniciar o timer
botaoIniciar.addEventListener("click", () => {
    if (!intervaloTimer) {
        intervaloTimer = setInterval(() => {
            if (tempo > 0) {
                tempo--;
                atualizarDisplay();
            } else {
                clearInterval(intervaloTimer);
                intervaloTimer = null;
                alert("Tempo esgotado!");
            }
        }, 1000);
    }
});

// Pausar o timer
botaoPausar.addEventListener("click", () => {
    clearInterval(intervaloTimer);
    intervaloTimer = null;
});

// Função para alternar a visibilidade do widget
function alternarVisibilidade() {
    widget.style.opacity = widget.style.opacity === "0" ? "1" : "0";
}

// Inicializar o display
atualizarDisplay();

// Configurar o ciclo de 3 segundos visível, 3 segundos invisível
setInterval(() => {
    alternarVisibilidade();
}, 10000);
