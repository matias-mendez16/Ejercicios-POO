"use strict";
/*
Implementar  una clase llamada Libro que contenga los siguientes atributos: ISBN, Título, Autor, Número de páginas. La clase debe tener un método para cargar un libro pidiendo los datos al  usuario y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el número de páginas.Crear dos o tres instancias de la Clase e implementar ambos métodos
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var rls = require("readline-sync");
var Libro = /** @class */ (function () {
    function Libro() {
        this.ISBN = "";
        this.titulo = "";
        this.autor = "";
        this.numPagina = 0;
        this.activo === true;
    }
    Libro.prototype.cargarLibro = function () {
        this.ISBN = rls.question("\nIngrese el ISBN del libro que desea cargar: ");
        this.titulo = rls.question("\nIngrese el tiutlo del libro que desea cargar: ");
        this.autor = rls.question("\nIngrese el autor del libro que desea cargar: ");
        this.numPagina = rls.questionInt("\nIngrese la cantidad de paginas que contiene el libro que desea cargar: ");
        this.activo === true;
    };
    Libro.prototype.infoLibro = function () {
        console.log("\n------------------------------------------------------------------------------");
        console.log("Informaci\u00F3n del libro ".concat(this.titulo, "."));
        console.log("El n\u00FAmero de ISBN es: ".concat(this.ISBN, "."));
        console.log("El nombre del autor es: ".concat(this.autor, "."));
        console.log("La cantidad de p\u00E1ginas del libro es: ".concat(this.numPagina, "."));
        if (this.activo === true) {
            console.log("El libro que busca est\u00E1 disponible.");
        }
        else {
            console.log("El libro que busca NO est\u00E1 disponible.");
        }
        console.log("------------------------------------------------------------------------------\n");
    };
    return Libro;
}());
exports.Libro = Libro;
