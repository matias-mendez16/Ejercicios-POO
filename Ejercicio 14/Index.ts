import { Persona } from "../Ejercicio 2/Persona";
import { Generala } from "./Generala";

const jugador1 = new Persona("Matías", "Méndez", 30, "calle 14", 123456789);
const jugador2 = new Persona("Agustina", "Ramundo", 25, "calle 12", 987654321);

const juego = new Generala([jugador1, jugador2]);

juego.jugarGenerala();
juego.mostrarPuntajeFinal();