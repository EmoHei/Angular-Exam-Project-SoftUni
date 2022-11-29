import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginAndRegisterComponent } from './components/login-and-register/login-and-register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    LoginAndRegisterComponent,
    LogoutComponent,
    ProfileComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
  
  ]
})
export class AuthModule { }
