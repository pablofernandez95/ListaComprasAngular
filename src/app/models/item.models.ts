export class Item {
    domicilio:string;
    item:string;
    cantidad:number;

    constructor(d:string, i:string,c:number){
        this.domicilio = d;
        this.item = i;
        this.cantidad = c;
    }
}