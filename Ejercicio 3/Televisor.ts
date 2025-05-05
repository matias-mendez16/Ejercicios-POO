/*
Implementar la clase Televisor con todos los atributos y métodos, incluido la funcionalidad mute
*/

export class Televisor {
    private marca : string;
    private canal : number = 1;
    private volumen : number = 0;
    private prendido : boolean = false;
    private muteado : boolean = false

    public constructor (marca : string){
        this.marca = marca
    }

    public prenderTv() : void {
        this.prendido = !this.prendido
        this.prendido ? console.log (`Televisor ${this.marca} prendido.`) : console.log (`Televisor ${this.marca} apagado.\n`)
    }

    public muteOnOff() : void {
        if (this.volumen < 0)
            this.muteado = true
    }

    public info() : void {
        if (this.prendido === false){
            return
        }else {
            console.log(`
                ----------------------------------
                    Canal: ${this.canal}
                    Volumen: ${this.volumen}
                    Mute: ${this.muteado}
                ----------------------------------
                `)
        }
    }

    public subirCanal() : void {
        if (this.canal === 99){
            this.canal = 1
        } else {
            this.canal +=1
        }
    }

    public bajarCanal() : void {
        if (this.canal === 1){
            this.canal = 99
        } else {
            this.canal -=1
        }
    }

    public selecCanal(numCanal: number) : void {
        if (numCanal > 0 && numCanal <= 99){
            this.canal = numCanal
        }
    }

    public subirVolumen() : void {
        if (this.volumen > 100){
            if (this.muteado = true){
                this.muteado = false
            }
        } else {
            if (this.muteado = true){
                this.muteado = false
            }
            this.volumen += 1
        }
    }

    public bajarVolumen() : void {
        if (this.volumen > 0){
            this.volumen -= 1
        } else {
            this.muteado = true
        }
    }
}

// const tv1 = new Televisor ("Noblex")
// const tv2 = new Televisor ("Sanyo")

// tv1.prenderTv();
// tv1.subirCanal();
// tv1.subirCanal();
// tv1.subirVolumen();
// tv1.subirVolumen();
// tv1.subirVolumen();
// tv1.info();
// tv1.selecCanal(98)
// tv1.subirCanal();
// tv1.subirCanal();
// tv1.info();
// tv1.prenderTv();
// tv1.info();

// tv2.prenderTv();
// tv2.bajarCanal();
// tv2.bajarVolumen();
// tv2.info();
// tv2.prenderTv();
// tv2.info();
