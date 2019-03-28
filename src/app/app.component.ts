import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectFortune';
  showModal = false;
  showLogin = false;

  toggleModal = () => {
    this.showModal = !this.showModal;
  }
  
  toggleLogin = () => {
    this.showLogin = !this.showLogin;
  }
}
