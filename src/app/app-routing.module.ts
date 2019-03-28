import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './components/login-view/login-view.component';
import {CreateViewComponent} from './components/create-view/create-view.component';
import {ProfileViewComponent} from './components/profile-view/profile-view.component'
import {GenFortuneViewComponent} from './components/gen-fortune-view/gen-fortune-view.component';
import {FortuneOfTheDayComponent} from './components/fortune-of-the-day/fortune-of-the-day.component'
const routes: Routes = [
  {path: 'login', component: LoginViewComponent},
  {path: 'create', component: CreateViewComponent},
  {path: 'profile', component: ProfileViewComponent},
  {path: 'dashboard', component: GenFortuneViewComponent},
  {path: '**', pathMatch: 'full', redirectTo: '', component:FortuneOfTheDayComponent}

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
