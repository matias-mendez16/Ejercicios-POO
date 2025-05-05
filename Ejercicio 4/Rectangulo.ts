/*
Crea una clase llamada Rectangulo que represente. Esta clase debe tener:
• Un constructor que reciba dos parámetros: ancho y altura.
• Métodos para calcular el área y el perímetro del rectángulo.
• El método calcular_area() debe retornar el área del rectángulo (ancho * altura).
• El método calcular_perimetro() debe retornar el perímetro del rectángulo (2 * (ancho + altura)).
Una vez definida la clase Rectangulo, crea una instancia de esta clase con un ancho de 5 unidades y una altura de 10 unidades. Luego, utiliza los métodos de la clase para calcular el área y el perímetro del rectángulo creado e imprime los resultados
*/

class Rectangulo {
    private ancho : number;
    private altura : number;

    public constructor (ancho: number, altura : number){
        this.ancho = ancho
        this.altura = altura
    }

    public calcularArea() : number {
    return (this.ancho*this.altura)

    }

    public calcularPerimetro() : number {
        return (2*(this.ancho+this.altura))
    }

    public mostrarCalculoArea() : void {
        console.log (`El área del rectángulo es: ${this.calcularArea()}\n`)
    }

    public mostrarCalculoPerimetro() : void {
        console.log (`El perímetro del rectángulo es: ${this.calcularPerimetro()}\n`)
    }
}

const primerRectangulo = new Rectangulo (5,10);

primerRectangulo.mostrarCalculoArea();
primerRectangulo.mostrarCalculoPerimetro();
