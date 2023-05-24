import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Person {
  nombre: string;
  apellido: string;
  correoElectronico: string;
  ci: string;
  cargo: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  dataSource: MatTableDataSource<Person>;
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'correoElectronico',
    'cargo',
  ];

  constructor() {
    const personas: Person[] = [
      {
        nombre: 'Angelo',
        apellido: 'Pérez',
        correoElectronico: 'angelo@example.com',
        ci: '1234567890',
        cargo: 'Asesor',
      },
      {
        nombre: 'Josue',
        apellido: 'Ramirez',
        correoElectronico: 'josue@example.com',
        ci: '0987654321',
        cargo: 'Analista',
      },
      {
        nombre: 'Rubio',
        apellido: 'Vargas',
        correoElectronico: 'rubio@example.com',
        ci: '5678901234',
        cargo: 'Desarrollador',
      },
      {
        nombre: 'Mero',
        apellido: 'Ramos',
        correoElectronico: 'mero@example.com',
        ci: '4567890123',
        cargo: 'Desarrollador',
      },
      {
        nombre: 'Dayanna',
        apellido: 'Garcia',
        correoElectronico: 'dayanna@example.com',
        ci: '7890123456',
        cargo: 'Contadora',
      },
    ];

    this.dataSource = new MatTableDataSource(personas);
  }
}
