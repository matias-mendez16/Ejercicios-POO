"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dado_1 = require("../Ejercicio 7/Dado");
var DadoCubilete_1 = require("./DadoCubilete");
// Probando la clase Dado
var dado1 = new Dado_1.Dado();
var cubilete1 = new DadoCubilete_1.Cubilete();
dado1.mostrarValorDado();
dado1.lanzarUnDado();
dado1.mostrarValorDado();
cubilete1.mostrarValorDado();
cubilete1.lanzarTodosDados();
cubilete1.mostrarValorDado();
cubilete1.lanzarAlgunosDados([1, 2, 6]);
cubilete1.mostrarValorDado();
