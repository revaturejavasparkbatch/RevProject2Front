import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  @Input() show = false;
  @Input() customClass = '';
  @Input() closeCallback = () => (false);
  
  activeModal: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
