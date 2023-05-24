import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  nombre: string = '';
  apellido: string = '';
  edad: string = '';
  cedula: string = '';

  registrar() {
    console.log('Datos registrados:', {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      cedula: this.cedula
    });
  }
}
