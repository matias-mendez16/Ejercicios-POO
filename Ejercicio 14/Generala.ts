/*
Usando la Clase persona del Ejercicio 2 y la clase Cubilete del ejercicio anterior, implementar un juego de Generala. Esta Generala solo va a considerar puntos por obtener la siguientes marcas:
• Escalera : 20 puntos
• Full: 30 puntos
• Poker: 40 puntos
• Generala: 50 puntos
En cada juego, cada jugador tiene 3 tiros y gana el jugador que tenga más puntos. En caso de que los 3 tiros ningún jugador haya hecho una marca, se declara empate. Implementar un método de desempate a su elección.
En caso de ser necesario, modificar la clase persona para agregarle más atributos
*/

import { Persona } from "../Ejercicio 2/Persona";
import { Cubilete } from "../Ejercicio 12/DadoCubilete";

export class Generala {
    private jugadores : Persona [];
    private cubilete : Cubilete;

    constructor (jugadores : Persona []) {
        this.jugadores = jugadores;
        this.cubilete = new Cubilete ();
    }

    contarPuntosDados(valores: number[]): number {
        valores.sort();

        let tieneUno = false;
        let tieneDos = false;
        let tieneTres = false;
        let tieneCuatro = false;
        let tieneCinco = false;
    
        let contador = [0, 0, 0, 0, 0, 0];  // Array para contar cuantas veces aparece cada número
        for (let i = 0; i < valores.length; i++) {
            contador[valores[i] - 1]++; 
                if (valores[i] === 1) tieneUno = true;
                if (valores[i] === 2) tieneDos = true;
                if (valores[i] === 3) tieneTres = true;
                if (valores[i] === 4) tieneCuatro = true;
                if (valores[i] === 5) tieneCinco = true;
        }

        const cantidadValores = contador.filter(cantidad => cantidad > 0);  // Filtra jugadas con valores existentes

        if (tieneUno && tieneDos && tieneTres && tieneCuatro && tieneCinco) return 20;  // Escalera
        if (cantidadValores.includes(3) && cantidadValores.includes(2)) return 30;  // Full
        if (cantidadValores.includes(4)) return 40;  // Poker
        if (cantidadValores.includes(5)) return 50;  // Generala
    
        return 0; // No salio ninguna jugada
    }

    jugarGenerala(): void {
        console.log("\nEmpezar a jugar a la Generala!");
        let maxPuntos = 0;
        let ganador: Persona | null = null;

        this.jugadores.forEach(jugador => {
            let puntosJugador = 0;
            console.log(`\nTurno de ${jugador["nombre"]}:`);

            for (let i = 1; i <= 3; i++) {
                console.log(`Tiro ${i}: `);
                this.cubilete.lanzarTodosDados();
                const valoresDados = this.cubilete.usarValoresDados();
                console.log("Valores obtenidos: " + valoresDados);

                const puntos = this.contarPuntosDados(valoresDados);
                if (puntos > 0) {
                    puntosJugador = puntos;
                    break; // Si hay una marca, el jugador no necesita más intentos
                }
            }

            jugador.sumarPuntos(puntosJugador);
            console.log(`\nTotal puntos de ${jugador["nombre"]}: ${puntosJugador}`);

            if (puntosJugador > maxPuntos) {
                maxPuntos = puntosJugador;
                ganador = jugador;
            }
        });
    }

    mostrarPuntajeFinal(): void {
        console.log("\Puntaje final: ");
    
        this.jugadores.forEach(jugador => {
            console.log(`${jugador.nombre}: ${jugador.darPuntajeFinales()} puntos.`);
        });
        const ganador = this.jugadores.reduce((max, jugador) => 
            jugador.darPuntajeFinales() > max.darPuntajeFinales() ? jugador : max
        );
    
        console.log(`\nEl ganador es ${ganador.nombre} con ${ganador.darPuntajeFinales()} puntos.`);
    }
    
}
