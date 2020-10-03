import { Component, OnInit, HostBinding } from '@angular/core';
import { Item } from '../models/item.models';

@Component({
  selector: 'app-compras-lista',
  templateUrl: './compras-lista.component.html',
  styleUrls: ['./compras-lista.component.css']
})
export class ComprasListaComponent implements OnInit {
  //@HostBinding('class.form-control') background = 'red';
  compras:Item[];

  constructor() {
    this.compras= [];

  }

  ngOnInit() {
  }

  agregarItem(domicilio:string, item:string, cantidad:number):boolean{
    this.compras.push(new Item(domicilio,item,cantidad));
    console.log(this.compras);
    return false;
  }

}
