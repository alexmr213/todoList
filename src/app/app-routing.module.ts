import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './effects';
import { AuthGuard } from './guards/auth.guard';
import { PrivateComponent } from './private/private.component';
import { LoginComponent } from './public/login/login.component';
import { RegistroComponent } from './public/registro/registro.component';


const routes: Routes = [
  { path: 'home'    , component: PrivateComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    EffectsModule.forRoot(EffectsArray)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
