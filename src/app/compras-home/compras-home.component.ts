import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item.models';
@Component({
  selector: 'app-compras-home',
  templateUrl: './compras-home.component.html',
  styleUrls: ['./compras-home.component.css']
})
export class ComprasHomeComponent implements OnInit {
  @Input() compras: Item;
  
  constructor() { }

  ngOnInit() {
  }

}
