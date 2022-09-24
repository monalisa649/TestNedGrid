import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AddComponent } from './page/add/add.component';
import { AuthGuard } from './guards/auth.guard';
import { EditComponent } from './page/edit/edit.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login/login.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login',component: LoginComponent},
  { path: 'add',component: AddComponent, canActivate: [AuthGuard]},
  { path: 'edit/:id',component: EditComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
