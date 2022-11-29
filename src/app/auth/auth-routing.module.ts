import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
// import { LogoutComponent } from './logout/logout.component';



const routes: Routes = [
 {
  path:'auth',
  children:[
    // {path:'login',component: LoginAndRegisterComponent},
    // {path: 'logout', component:LogoutComponent}
  ]
 }
 
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }