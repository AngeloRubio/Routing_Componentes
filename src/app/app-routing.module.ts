import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ListaComponent } from './components/lista/lista.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';


const routes: Routes = [
  {
    path: 'buscar',
    component: BuscarComponent,
  },
  {
    path: 'eliminar',
    component: EliminarComponent,
  },
  {
    path: 'lista',
    component: ListaComponent,
  },
  {
    path: 'modificar',
    component: ModificarComponent,
  },
  {
    path: 'registrar',
    component: RegistrarComponent,
  },
  {
    path: '',
    component: RegistrarComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
