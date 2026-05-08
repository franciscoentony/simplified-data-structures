'use strict'
// --- CLASSE DA FILA CIRCULAR ---
// Esta classe encapsula a lógica pura da estrutura de dados.
export class FilaCircular {
  constructor(tamanho) {
    this.max = tamanho;
  }

  // Calcula a próxima posição circular
  proximaPosicao(pos) {
    return (pos + 1) % this.max;
  }

  // Calcula a posição do REAR (último elemento ocupado)
  posicaoRear(tail) {
    return tail === 0 ? this.max - 1 : tail - 1;
  }
}