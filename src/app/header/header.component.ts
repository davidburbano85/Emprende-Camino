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
  /* variables  */
  enviarPedidos = false
  enviarTrabaja = false
  enviarContacto = false
  servicioActivo = true//esta desactiva el servicio del navbar para obligar a dar click a inicio


  /** esto es lo que se envia en las funciones 
     además es lo que va en el htmlpadre 
            <app-header (enviarTrabajo)="recibirCambio($event)"></app-header>
     ejemplo 
  */
  @Output() enviarTrabajo = new EventEmitter()
  @Output() enviarPedido = new EventEmitter()
  @Output() enviarContact = new EventEmitter()

  cambiarvalor() {
    this.enviarTrabaja = true
    //cuando se da clic en uno de estos link inmediatamente  se desactiva 
    //el servicio
    this.servicioActivo = false
    this.enviarTrabajo.emit(this.enviarTrabaja)//esto es lo que se envia al padre
  }

  Pedido() {
    this.enviarPedidos = true
    //cuando se da clic en uno de estos link inmediatamente  se desactiva 
    //el servicio
    this.servicioActivo = false
    this.enviarPedido.emit(this.enviarPedidos)

  }

  contacto() {
    this.enviarContacto = true
    //cuando se da clic en uno de estos link inmediatamente  se desactiva 
    //el servicio
    this.servicioActivo = false
    this.enviarContact.emit(this.enviarContacto)
  }

}
