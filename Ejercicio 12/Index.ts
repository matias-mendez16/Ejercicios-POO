

import { Dado } from "../Ejercicio 7/Dado";
import { Cubilete } from "./DadoCubilete";

const dado1 = new Dado();
const cubilete1 = new Cubilete();

dado1.mostrarValorDado();
dado1.lanzarUnDado();
dado1.mostrarValorDado();

cubilete1.mostrarValorDado();
cubilete1.lanzarTodosDados();
cubilete1.mostrarValorDado();
cubilete1.lanzarAlgunosDados([1, 2, 6]);
cubilete1.mostrarValorDado();
