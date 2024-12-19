import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full', // Ensure this matches the entire URL
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        {
          enableTracing: false, // <-- debugging purposes only
          preloadingStrategy: PreloadAllModules,
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
