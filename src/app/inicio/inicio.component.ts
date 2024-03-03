import { Component, Input, Output } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ContenidoComponent } from "../contenido/contenido.component";
import { SlidebarComponent } from "../slidebar/slidebar.component";
import { WidgetComponent } from "../widget/widget.component";
import { Widget2Component } from "../widget2/widget2.component";
import { PieComponent } from "../pie/pie.component";
import { TrabajaComponent } from "../trabaja/trabaja.component";
import { PedidosComponent } from "../pedidos/pedidos.component";
import { ContactosComponent } from '../contactos/contactos.component';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [HeaderComponent, ContenidoComponent, SlidebarComponent, WidgetComponent, Widget2Component, PieComponent, TrabajaComponent, PedidosComponent, ContactosComponent]
})
export class InicioComponent {
    //creamos las variables que despues tomaran el valor de los hijos
    recibirTrue=false//esta es de trabaja
    pedido=false
    contacto=false
    //creamos los metodos para recibir la info del hijo header
    //y le damos ese valor a las variables creadas arriba
   recibirCambio(recibidoHeader:boolean){
    this.recibirTrue=recibidoHeader
    // console.log('Valor de enviarTue recibido:', recibidoHeader)
   }
   recibePedido(pedidoRecibido:boolean){
    this.pedido=pedidoRecibido
   }
   recibeContacto(contactoRecibido:boolean){
    this.contacto=contactoRecibido
   }
}
