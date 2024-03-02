import { Component } from '@angular/core';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {
  //para abrir directamente comunicacion con whatsapp
  abrirWhatsApp(): void {
    const numeroTelefono = '3027732655'; // Reemplaza con tu número de teléfono
    const urlWhatsApp = `https://wa.me/${3027732655}`;
    window.open(urlWhatsApp, '_blank');
  }
}
