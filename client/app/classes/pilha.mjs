export class Pilha {
    constructor() {
        this.itens = [];
    }
    // Push = Adiciona um elemento ao topo
    push(elemento) {
        this.itens.push(elemento);
    }
    // Pop = Remove elemento do topo
    pop() {
        return this.itens.pop();
    }
    // Apenas vizualiza o topo sem remover
    peek() {
        return this.itens[this.itens.length - 1];
    }
    // Verifica se está vazia
    isEmpty() {
        return this.itens.length == 0;
    }
    // Retorna o tamanho da pilha
    size() {
        return this.itens.length;
    }
    getDados() {
        return [...this.itens]
    }
}