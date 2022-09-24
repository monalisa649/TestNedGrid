import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './modules/add/add.component';
import { AuthGuard } from './modules/auth.guard';
import { EditComponent } from './modules/edit/edit.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login',component: LoginComponent},
  {path: 'add',component: AddComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id',component: EditComponent, canActivate: [AuthGuard]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
