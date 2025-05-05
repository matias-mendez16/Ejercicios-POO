/*
    Index donde se importan la clase Televisor y la clase Decodificacor
*/

import { Televisor } from "../Ejercicio 3/Televisor";
import { Decodificador } from "./Decodificador";

const tv1 = new Televisor ("Noblex")
const tv2 = new Televisor ("Sanyo")
const tv3 = new Televisor ("Samsung con decodificador Decopro");
const decopro = new Decodificador (tv3, "Decopro")

tv1.prenderTv();
tv1.subirCanal();
tv1.subirCanal();
tv1.subirVolumen();
tv1.subirVolumen();
tv1.subirVolumen();
tv1.info();
tv1.selecCanal(98)
tv1.subirCanal();
tv1.subirCanal();
tv1.info();
tv1.prenderTv();
tv1.info();

tv2.prenderTv();
tv2.bajarCanal();
tv2.bajarVolumen();
tv2.info();
tv2.prenderTv();
tv2.info();


tv3.prenderTv();
tv3.info();
decopro.subirCanalDeco();
decopro.subirCanalDeco();
decopro.subirCanalDeco();
decopro.subirCanalDeco();
tv3.info()
decopro.bajarCanalDeco();
decopro.bajarCanalDeco();
tv3.info();
decopro.subirVolDeco();
decopro.subirVolDeco();
decopro.subirVolDeco();
decopro.subirVolDeco();
decopro.subirVolDeco();
decopro.subirVolDeco();
tv3.info();
decopro.bajarVolDeco();
decopro.bajarVolDeco();
tv3.info();
decopro.bajarVolDeco();
decopro.bajarVolDeco();
decopro.bajarVolDeco();
decopro.bajarVolDeco();
decopro.bajarVolDeco();
tv3.info();
decopro.subirVolDeco();
decopro.subirVolDeco();
decopro.subirVolDeco();
decopro.subirVolDeco();
decopro.subirVolDeco();
decopro.subirVolDeco();
tv3.info();
tv3.prenderTv();
tv3.info();