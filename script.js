function calcularPosicaoFinal() {
    // Obter valores dos inputs
    const pontoPartida = parseInt(document.getElementById('pontoPartida').value);
    const pista1 = parseInt(document.getElementById('pista1').value);
    const pista2 = parseInt(document.getElementById('pista2').value);
    const pista3 = parseInt(document.getElementById('pista3').value);

    // Validar ponto de partida
    if (isNaN(pontoPartida) || pontoPartida < 0 || pontoPartida > 10) {
        alert("O ponto de partida deve ser um número entre 0 e 10!");
        return;
    }

    // Validar pistas
    if (isNaN(pista1) || isNaN(pista2) || isNaN(pista3)) {
        alert("Todas as pistas devem ser números!");
        return;
    }

    // Calcular posição final
    const posicaoFinal = pontoPartida + pista1 + pista2 + pista3;

    // Exibir resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Posição Final: ${posicaoFinal}`;

    // Adicionar animação
    resultadoElement.style.animation = 'none';
    resultadoElement.offsetHeight; // Trigger reflow
    resultadoElement.style.animation = 'pulse 0.5s';
}

// Adicionar animação CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
