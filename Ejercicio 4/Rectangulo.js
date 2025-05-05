/*1
Crea una clase llamada Rectangulo que represente. Esta clase debe tener:
• Un constructor que reciba dos parámetros: ancho y altura.
• Métodos para calcular el área y el perímetro del rectángulo.
• El método calcular_area() debe retornar el área del rectángulo (ancho * altura).
• El método calcular_perimetro() debe retornar el perímetro del rectángulo (2 * (ancho + altura)).
Una vez definida la clase Rectangulo, crea una instancia de esta clase con un ancho de 5 unidades y una altura de 10 unidades. Luego, utiliza los métodos de la clase para calcular el área y el perímetro del rectángulo creado e imprime los resultados
*/
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return (this.ancho * this.altura);
    };
    Rectangulo.prototype.calcularPerimetro = function () {
        return (2 * (this.ancho + this.altura));
    };
    Rectangulo.prototype.mostrarCalculoArea = function () {
        console.log("El \u00E1rea del rect\u00E1ngulo es: ".concat(this.calcularArea(), "\n"));
    };
    Rectangulo.prototype.mostrarCalculoPerimetro = function () {
        console.log("El per\u00EDmetro del rect\u00E1ngulo es: ".concat(this.calcularPerimetro(), "\n"));
    };
    return Rectangulo;
}());
var primerRectangulo = new Rectangulo(5, 10);
primerRectangulo.mostrarCalculoArea();
primerRectangulo.mostrarCalculoPerimetro();
