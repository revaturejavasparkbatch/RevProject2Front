import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginViewComponent } from './components/login-view/login-view.component';
import { HomeComponent } from './components/home/home.component';

import {MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalviewComponent } from './components/modalview/modalview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    HomeComponent,
    CreateAccountComponent,
    ModalviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginViewComponent]
})
export class AppModule { }
