"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("../Ejercicio 2/Persona");
var Generala_1 = require("./Generala");
var jugador2 = new Persona_1.Persona("Agustina", "Ramundo", 25, "calle 12", 987654321);
var jugador1 = new Persona_1.Persona("Matías", "Méndez", 30, "calle 14", 123456789);
var juego = new Generala_1.Generala([jugador2, jugador1]);
juego.jugarGenerala();
juego.mostrarPuntajeFinal();
