"use strict";
/*
Usando la Clase persona del Ejercicio 2 y la clase Cubilete del ejercicio anterior, implementar un juego de Generala. Esta Generala solo va a considerar puntos por obtener la siguientes marcas:
• Escalera : 20 puntos
• Full: 30 puntos
• Poker: 40 puntos
• Generala: 50 puntos
En cada juego, cada jugador tiene 3 tiros y gana el jugador que tenga más puntos. En caso de que los 3 tiros ningún jugador haya hecho una marca, se declara empate. Implementar un método de desempate a su elección.
En caso de ser necesario, modificar la clase persona para agregarle más atributos
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generala = void 0;
var DadoCubilete_1 = require("../Ejercicio 12/DadoCubilete");
var Generala = /** @class */ (function () {
    function Generala(jugadores) {
        this.jugadores = jugadores;
        this.cubilete = new DadoCubilete_1.Cubilete();
    }
    Generala.prototype.contarPuntosDados = function (valores) {
        valores.sort();
        var tieneUno = false;
        var tieneDos = false;
        var tieneTres = false;
        var tieneCuatro = false;
        var tieneCinco = false;
        var contador = [0, 0, 0, 0, 0, 0]; // Array para contar cuantas veces aparece cada número
        for (var i = 0; i < valores.length; i++) {
            contador[valores[i] - 1]++;
            if (valores[i] === 1)
                tieneUno = true;
            if (valores[i] === 2)
                tieneDos = true;
            if (valores[i] === 3)
                tieneTres = true;
            if (valores[i] === 4)
                tieneCuatro = true;
            if (valores[i] === 5)
                tieneCinco = true;
        }
        var cantidadValores = contador.filter(function (cantidad) { return cantidad > 0; }); // Filtra jugadas con valores existentes
        if (tieneUno && tieneDos && tieneTres && tieneCuatro && tieneCinco)
            return 20; // Escalera
        if (cantidadValores.includes(3) && cantidadValores.includes(2))
            return 30; // Full
        if (cantidadValores.includes(4))
            return 40; // Poker
        if (cantidadValores.includes(5))
            return 50; // Generala
        return 0; // No salio ninguna jugada
    };
    Generala.prototype.jugarGenerala = function () {
        var _this = this;
        console.log("\nEmpezar a jugar a la Generala!");
        var maxPuntos = 0;
        var ganador = null;
        this.jugadores.forEach(function (jugador) {
            var puntosJugador = 0;
            console.log("\nTurno de ".concat(jugador["nombre"], ":"));
            for (var i = 1; i <= 3; i++) {
                console.log("Tiro ".concat(i, ": "));
                _this.cubilete.lanzarTodosDados();
                var valoresDados = _this.cubilete.usarValoresDados();
                console.log("Valores obtenidos: " + valoresDados);
                var puntos = _this.contarPuntosDados(valoresDados);
                if (puntos > 0) {
                    puntosJugador = puntos;
                    break; // Si hay una marca, el jugador no necesita más intentos
                }
            }
            jugador.sumarPuntos(puntosJugador);
            console.log("\nTotal puntos de ".concat(jugador["nombre"], ": ").concat(puntosJugador));
            if (puntosJugador > maxPuntos) {
                maxPuntos = puntosJugador;
                ganador = jugador;
            }
        });
    };
    Generala.prototype.mostrarPuntajeFinal = function () {
        console.log("\Puntaje final: ");
        this.jugadores.forEach(function (jugador) {
            console.log("".concat(jugador.nombre, ": ").concat(jugador.darPuntajeFinales(), " puntos."));
        });
        var ganador = this.jugadores.reduce(function (max, jugador) {
            return jugador.darPuntajeFinales() > max.darPuntajeFinales() ? jugador : max;
        });
        console.log("\nEl ganador es ".concat(ganador.nombre, " con ").concat(ganador.darPuntajeFinales(), " puntos."));
    };
    return Generala;
}());
exports.Generala = Generala;
