/*
Implementar  una clase llamada Libro que contenga los siguientes atributos: ISBN, Título, Autor, Número de páginas. La clase debe tener un método para cargar un libro pidiendo los datos al  usuario y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el número de páginas.Crear dos o tres instancias de la Clase e implementar ambos métodos
*/

import * as rls from "readline-sync"

export class Libro {
    public ISBN : string;
    private titulo : string;
    private autor : string;
    private numPagina : number;
    public activo : boolean;

    public constructor (){
        this.ISBN = "";
        this.titulo = "";
        this.autor = "";
        this.numPagina = 0;
        this.activo === true

    }

    
    cargarLibro() : void {
        this.ISBN = rls.question ("\nIngrese el ISBN del libro que desea cargar: ");
        this.titulo = rls.question ("\nIngrese el tiutlo del libro que desea cargar: ");
        this.autor = rls.question ("\nIngrese el autor del libro que desea cargar: ");
        this.numPagina = rls.questionInt ("\nIngrese la cantidad de paginas que contiene el libro que desea cargar: ");
        this.activo === true
    }

    infoLibro() : void {
        console.log (`\n------------------------------------------------------------------------------`)
        console.log (`Información del libro ${this.titulo}.`)
        console.log (`El número de ISBN es: ${this.ISBN}.`)
        console.log (`El nombre del autor es: ${this.autor}.`)
        console.log (`La cantidad de páginas del libro es: ${this.numPagina}.`)
        if (this.activo === true){
            console.log (`El libro que busca está disponible.`)
        }else {
            console.log (`El libro que busca NO está disponible.`)
        }
        console.log (`------------------------------------------------------------------------------\n`)
    }
}
