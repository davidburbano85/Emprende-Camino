import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { PedidosComponent } from './pedidos/pedidos.component';
import { TrabajaComponent } from './trabaja/trabaja.component';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, InicioComponent, PedidosComponent, TrabajaComponent, HeaderComponent]
})
export class AppComponent {
  title = 'y';
}
