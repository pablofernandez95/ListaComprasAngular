import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComprasHomeComponent } from './compras-home/compras-home.component';
import { ComprasListaComponent } from './compras-lista/compras-lista.component';
import { FooterComponent } from './footer/footer.component';
import { OfertasComponent } from './ofertas/ofertas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComprasHomeComponent,
    ComprasListaComponent,
    FooterComponent,
    OfertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
