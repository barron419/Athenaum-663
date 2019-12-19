import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { AuthGuard } from './server/authGuard';
import { JwtInterceptorProvider } from './server/interceptor';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthGuard,
    JwtInterceptorProvider,
    AuthenticationService,
    UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
