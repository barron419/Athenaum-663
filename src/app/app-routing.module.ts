import { AuthGuard } from './server/authGuard';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginFormComponent}
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routing = RouterModule.forRoot(appRoutes);
