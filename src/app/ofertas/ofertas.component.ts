import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
  ofertas=["Queso","Leche", "Yogurt"]
  constructor() { 
    this.ofertas=[];
  }

  ngOnInit() {
  }

}
