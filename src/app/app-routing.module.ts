import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import {FortuneOfTheDayComponent} from './components/fortune-of-the-day/fortune-of-the-day.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
 {path: 'profile', component: ProfileComponent},
 {path: 'dashboard', component: DashboardComponent},
 {path: '**', pathMatch: 'full', redirectTo: '', component:FortuneOfTheDayComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
