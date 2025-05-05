/*
Usando la Clase automotor del ejercicio 1, implementar la clase Registro Automotor, con métodos para:
● Agregar un auto
● Buscar un auto por patente
● Eliminar o actualizar autos existentes
*/

import { Auto } from "../Ejercicio 1/Auto";

export class RegistroAutomotor {
    private auto : Auto[];

    public constructor ( ){
        this.auto = []
    }

    public agregAuto(auto : Auto) : void {
        this.auto.push(auto);
        console.log (`El auto con la patente ${auto.patente} se agregó correctamente.\n`)
    }

public buscarPatente(patente : string) : Auto | undefined {
    const autoEncontrado = this.auto.find(auto => auto.patente === patente);
    if (autoEncontrado) {
        console.log(`La patente ${autoEncontrado.patente} fue encontrada con éxito.`);
        autoEncontrado.info();
        return autoEncontrado;
    } else {
        console.log(`No se encontró la patente ${patente}.`);
        return undefined;
    }
}

    public eliminarAuto(patente: string) : void {
    for (let i = 0; i < this.auto.length; i++) {
        if (this.auto[i].patente === patente) {
            this.auto.splice(i, 1); 
            console.log(`El auto con la patente ${patente} se eliminó.\n`);
            return;
        }
    } console.log(`La patente ${patente} no está en el registro.\n`);
}


    public actualizarAuto(patente: string, autoActualizado: Auto) : void  {
        for (let i = 0; i < this.auto.length; i++) {
            if (this.auto[i].patente === patente) {
                this.auto[i] = autoActualizado;
                console.log(`Se actualizaron los datos del auto con la patente ${patente}.\n`);
                return;
            }
        } console.log(`No se pudo actualizar porque el número de patente ${patente} no existe.\n`);
    }

    public mostrarRegistro() : void {
        console.log ("Los autos guardados en el Registro Automotor son: \n");
        this.auto.forEach (auto => auto.info());
    }

}

const autoA= new Auto("Peugeot","207", 1994, "ABC123");
const autoB= new Auto("Ford","Focus", 2013, "DFG456");
const autoC= new Auto("Fiat","Cronos", 2024, "HIJ789");
const autoD = new Auto ("Ford" , "Mustang" , 2025, "AF058NC")

const registro = new RegistroAutomotor();

// registro.mostrarRegistro();

// registro.agregAuto(autoA);
// registro.agregAuto(autoB);
// registro.agregAuto(autoC);
// registro.agregAuto(autoD);

// registro.mostrarRegistro();

// registro.buscarPatente ("DFG456");

// registro.eliminarAuto ("HIJ789");

// registro.mostrarRegistro();

// registro.actualizarAuto ("ABC123", autoD);
// registro.mostrarRegistro();



























