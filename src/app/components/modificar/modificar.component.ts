import { Component } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
  searchQuery: string = '';

  editar() {
    // Lógica para editar el formulario
  }

  nombre: string = '';
  apellido: string = '';
  correoElectronico: string = '';
  cedula: string = '';

  onSearchInputChange(value: string) {
    this.searchQuery = value;

  }
}