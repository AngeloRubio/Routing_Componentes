import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent {
  nombre: string = '';
  apellido = '';
  edad = '';
  cedula = '';

  registrar() {
    console.log('Datos registrados:', {
      nombre: this.nombre,
      apellido: this.apellido,
    });
  }
}
