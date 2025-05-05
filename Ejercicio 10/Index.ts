/*
    Index donde se importan la clase Auto y la clase RegistroAutomotor
*/

import { Auto } from "../Ejercicio 1/Auto";
import { RegistroAutomotor } from "./RegistroAutomotor";

const auto1= new Auto("Peugeot","207", 1994, "ABC123");
const auto2= new Auto("Ford","Focus", 2013, "DFG456");
const auto3= new Auto("Fiat","Cronos", 2024, "HIJ789");
const auto4 = new Auto ("Ford" , "Mustang" , 2025, "AA123ZZ")

const registro = new RegistroAutomotor();

auto1.acelerar();
auto1.frenar();
auto1.acelerar();
auto1.frenar();
auto1.acelerar();
auto1.info();

auto2.acelerar();
auto2.frenar();
auto2.frenar();
auto2.frenar();
auto2.frenar();
auto2.acelerar();
auto2.info();

auto3.acelerar();
auto3.acelerar();
auto3.acelerar();
auto3.frenar();
auto3.info();

registro.mostrarRegistro();

registro.agregAuto(auto1);
registro.agregAuto(auto2);
registro.agregAuto(auto3);
registro.agregAuto(auto4);

registro.mostrarRegistro();

registro.buscarPatente ("DFG456");

registro.eliminarAuto ("HIJ789");

registro.mostrarRegistro();

registro.actualizarAuto ("ABC123", auto4);
registro.mostrarRegistro();
