import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './components/login-view/login-view.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'login', component: LoginViewComponent},
  {path: 'create', component: LoginViewComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
