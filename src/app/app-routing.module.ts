import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AddComponent } from './pages/add/add.component';
import { AuthGuard } from './guards/auth.guard';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { SesionGuard } from './guards/sesion.guard';

const routes: Routes = [

  { path:  '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login',component: LoginComponent, canActivate : [SesionGuard]},
  { path: 'add',component: AddComponent, canActivate: [AuthGuard]},
  { path: 'edit/:id',component: EditComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
