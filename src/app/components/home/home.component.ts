import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { LoginViewComponent } from '../login-view/login-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app-login-view';
  showModal = false;
  showLogin = false;

  toggleModal = () => {
    this.showModal = !this.showModal;
  }
  
  toggleLogin = () => {
    this.showLogin = !this.showLogin;
  }
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }


}
