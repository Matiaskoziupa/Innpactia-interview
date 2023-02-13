import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { PublicoComponent } from './COMPONENTES/publico/publico.component';
import { PrivadoComponent } from './COMPONENTES/privado/privado.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path:"", redirectTo: "/publico", pathMatch:"full"},
  {path:"publico", component: PublicoComponent},
  {path:"privado", component: PrivadoComponent},
  {path:"inicio", component: InicioComponent, canActivate: [AuthGuard]},
  {path:"add", component: AgregarComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
