import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [HeaderComponent, InicioComponent],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent {

}
