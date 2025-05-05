/*
Usando la clase libro del ejercicio 5, simular el funcionamiento de un sistema para gestionar una colección de libros, permitiendo realizar las operaciones básicas: alta, baja, modificación y consulta.
La clase Gestor de Libros debe permitir realizar las siguientes acciones:
• Insertar un libro: agregar un nuevo libro a la colección.
• Consultar un libro: buscar un libro y mostrar sus datos.
• Modificar un libro: cambiar los datos de un libro ya existente (por ejemplo: autor, año, etc.).
• Eliminar un libro: realizar una baja lógica, es decir, el libro no se borra definitivamente, sino que se marca como inactivo o dado de baja.
    Consideraciones importantes:
• Antes de realizar cualquier operación (incluso insertar), se debe verificar si el libro ya existe en la colección.
• El estado de cada libro (activo o dado de baja) debe formar parte de la clase Libro,

*/

import {Libro} from "../Ejercicio 5/Libro"
import * as rls from "readline-sync"

export class GestorLibros {
    private libros: Libro[];

    constructor() {
        this.libros = [];
    }

    private buscarLibroPorISBN(ISBN: string): Libro | undefined {
        return this.libros.find(libro => libro["ISBN"] === ISBN);
    }

    insertarLibro(): void {
        let nuevoLibro = new Libro();
        nuevoLibro.cargarLibro();

        if (this.buscarLibroPorISBN(nuevoLibro["ISBN"])) {
            console.log("\nEl libro ya existe en la colección.");
        } else {
            this.libros.push(nuevoLibro);
            console.log("\nLibro agregado correctamente.");
        }
    }

    consultarLibro(): void {
        let ISBN = rls.question("\nIngrese el ISBN del libro a consultar: ");
        let libroEncontrado = this.buscarLibroPorISBN(ISBN);

        if (libroEncontrado) {
            libroEncontrado.infoLibro();
        } else {
            console.log("\nEl libro no se encuentra en la colección.");
        }
    }

    modificarLibro(): void {
        let ISBN = rls.question("\nIngrese el ISBN del libro a modificar: ");
        let libroEncontrado = this.buscarLibroPorISBN(ISBN);

        if (libroEncontrado) {
            libroEncontrado.cargarLibro();
            console.log("\nLibro modificado correctamente.");
        } else {
            console.log("\nEl libro no se encuentra en la colección.");
        }
    }

    eliminarLibro(): void {
        let ISBN = rls.question("\nIngrese el ISBN del libro a eliminar: ");
        let libroEncontrado = this.buscarLibroPorISBN(ISBN);

        if (libroEncontrado) {
            libroEncontrado["activo"] = false;
            console.log("\nEl libro ha sido marcado como dado de baja.");
        } else {
            console.log("\nEl libro no se encuentra en la colección.");
        }
    }
}
