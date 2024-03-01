import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ContenidoComponent } from "../contenido/contenido.component";

import { InicioComponent } from '../inicio/inicio.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [InicioComponent, RouterLink, ContenidoComponent]
})
export class HeaderComponent {
  enviarTrabaja = false
  enviarPedidos=false
  enviarContacto=false
  @Output() enviarTrabajo= new EventEmitter();
  cambiarvalor(){
    this.enviarTrabaja=!this.enviarTrabaja
    this.enviarTrabajo.emit(this.enviarTrabaja)
  }



}
