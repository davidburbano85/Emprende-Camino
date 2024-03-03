import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  abrirWhatsApp(): void {
    const numeroTelefono = '3027732655'; // Reemplaza con tu número de teléfono
    const urlWhatsApp = `https://wa.me/${3027732655}`;
    window.open(urlWhatsApp, '_blank');
  }
}
