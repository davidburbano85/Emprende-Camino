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
    const numeroTelefono = '3135249496'; // Reemplaza con tu número de teléfono
    const urlWhatsApp = `https://wa.me/${3135249496}`;
    window.open(urlWhatsApp, '_blank');
  }
}
