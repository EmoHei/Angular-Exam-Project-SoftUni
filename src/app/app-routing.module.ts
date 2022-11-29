import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginAndRegisterComponent } from './auth/components/login-and-register/login-and-register.component';
import { ProfileComponent } from './auth/components/profile/profile.component';

import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  { path: 'auth', component: AuthComponent, children:[
    {path:'login',component: LoginAndRegisterComponent},
    { path: 'profile', component: ProfileComponent }
  ] },
  
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: {
      title: 'Not-Found'
    }
  },

  
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
