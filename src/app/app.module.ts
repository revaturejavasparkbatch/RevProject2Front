import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { CreateViewComponent } from './components/create-view/create-view.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { GenFortuneViewComponent } from './components/gen-fortune-view/gen-fortune-view.component';
import { FortuneOfTheDayComponent } from './components/fortune-of-the-day/fortune-of-the-day.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    CreateViewComponent,
    ProfileViewComponent,
    GenFortuneViewComponent,
    FortuneOfTheDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
