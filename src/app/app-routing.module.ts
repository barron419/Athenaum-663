import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './server/authGuard';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'userList', component: UserListComponent},
  { path: 'addMovie', component: AddMovieComponent},
  { path: 'logout', component: LoginFormComponent}
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routing = RouterModule.forRoot(appRoutes);
