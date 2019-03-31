import { Component, OnInit, Input } from '@angular/core';
import { userLogin } from '../../userLogin';
import { LoginService} from '../../services/login.service';
import { User } from 'src/app/User';
import { Router } from '@angular/router';

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
  
  constructor(private loginServ: LoginService, private route: Router) { }

  ngOnInit() {
  }

  userLogin: {email: string; password: string};

  redirectUrl: string = "http://localhost:4200/dashboard";

  addLoginInfo(em: string, pass: string): void {
    let userLogin = {
      email: em,
      password: pass
    }

  console.log(userLogin);

  this.loginServ.loginUser(userLogin).subscribe((response) => {
      console.log('response from post is ', response);
      if (response.email != null) {
          this.route.navigateByUrl("/dashboard");
        }
    });

  }
}
