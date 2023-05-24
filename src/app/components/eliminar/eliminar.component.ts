import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css'],
})
export class EliminarComponent {
  searchQuery: string = '';

  editar() {
    // Lógica para editar el formulario
  }

  nombre: string = '';
  apellido: string = '';
  correoElectronico: string = '';
  cedula: string = '';
  fechaNacimiento: Date | null = null;
  disponibilidadHorario: boolean = false;

  onSearchInputChange(value: string) {
    this.searchQuery = value;

  }
}