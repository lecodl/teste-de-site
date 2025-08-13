let saldo = 0;

const saldoEl = document.getElementById('saldo');
const addMoneyBtn = document.getElementById('addMoneyBtn');

addMoneyBtn.addEventListener('click', () => {
  saldo += 100;
  atualizarSaldo();
});

function atualizarSaldo() {
  saldoEl.textContent = saldo.toFixed(2);
}

// jogo 1 - cara ou coroa
function jogoCaraOuCoroa() {
  if (saldo < 50) {
    alert("Saldo insuficiente para apostar!");
    return;
  }
  saldo -= 50;

  const escolha = document.querySelector('input[name="caraCoroa"]:checked').value;
  const resultado = Math.random() < 0.5 ? "Cara" : "Coroa";
  const ganhou = escolha === resultado;
  if (ganhou) {
    saldo += 100;
  }

  atualizarSaldo();
  document.getElementById('resultado1').textContent = `Resultado: ${resultado} — Você ${ganhou ? "Ganhou!" : "Perdeu!"}`;
}

// jogo 2 - adivinhar um numero
function jogoAdivinheNumero() {
  if (saldo < 40) {
    alert("Saldo insuficiente para apostar!");
    return;
  }
  saldo -= 40;

  const aposta = Number(document.getElementById('numeroAposta').value);
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;
  const ganhou = aposta === numeroSorteado;

  if (ganhou) {
    saldo += 120;
  }

  atualizarSaldo();
  document.getElementById('resultado2').textContent = `Número sorteado: ${numeroSorteado} — Você ${ganhou ? "Ganhou!" : "Perdeu!"}`;
}

// jogo 3 - pedra, papel e tesoura
function jogoPedraPapelTesoura() {
  if (saldo < 30) {
    alert("Saldo insuficiente para apostar!");
    return;
  }
  saldo -= 30;

  const escolhaUsuario = document.querySelector('input[name="ppt"]:checked').value;
  const opcoes = ["Pedra", "Papel", "Tesoura"];
  const escolhaPC = opcoes[Math.floor(Math.random() * 3)];

  let resultadoMsg = "";
  let ganhou = false;

  if (escolhaUsuario === escolhaPC) {
    resultadoMsg = "Empate!";
    saldo += 30;
  } else if (
    (escolhaUsuario === "Pedra" && escolhaPC === "Tesoura") ||
    (escolhaUsuario === "Papel" && escolhaPC === "Pedra") ||
    (escolhaUsuario === "Tesoura" && escolhaPC === "Papel")
  ) {
    resultadoMsg = "Você ganhou!";
    ganhou = true;
    saldo += 60;
  } else {
    resultadoMsg = "Você perdeu!";
  }

  atualizarSaldo();
  document.getElementById('resultado3').textContent = `Computador escolheu ${escolhaPC} — ${resultadoMsg}`;
}
