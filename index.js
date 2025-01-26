let tempo = 0; // Tempo em segundos
let intervaloTimer = null;

// Elementos do DOM
const displayTimer = document.getElementById("timer-display");
const botaoAdicionar = document.getElementById("add-time");
const botaoIniciar = document.getElementById("play");
const botaoPausar = document.getElementById("pause");
const botaoReiniciar = document.getElementById("reiniciar");

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

// Inicializar o display
atualizarDisplay();
