class Poligono {
    constructor(altura, largura) {
        this.nome = 'Polígono';
        this.altura = altura;
        this.largura = largura;
    }
}

class Quadrado extends Poligono {
    constructor(altura) {
        super(altura, altura);
        this.nome = 'Quadrado';
    }
}