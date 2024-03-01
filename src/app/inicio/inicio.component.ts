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
    recibirTrue=false
   recibirCambio(recibidoHeader:boolean){
    this.recibirTrue=recibidoHeader
    console.log('Valor de enviarTue recibido:', recibidoHeader)
   }
    
}
