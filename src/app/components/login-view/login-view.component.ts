import { Component, OnInit, Input } from '@angular/core';
import { userLogin } from '../../userLogin';
import { LoginService} from '../../services/login.service';
import { User } from 'src/app/User';
import { Router } from '@angular/router';
import { loggedInUser } from 'src/app/loggedInUser';
import { UserCarryService } from 'src/app/services/user-carry.service';

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
  
  constructor(private loginServ: LoginService, private route: Router, private userCarryService: UserCarryService) { }

  ngOnInit() {
  }

  userLogin: {email: string; password: string};
  loggedInUser: loggedInUser;

  addLoginInfo(em: string, pass: string): void {
    let userLogin = {
      email: em,
      password: pass
    }

  this.loginServ.loginUser(userLogin).subscribe((response) => {
      this.loggedInUser = response;
      if (response.email != null) {
          this.route.navigateByUrl("/dashboard");
        }
    });

  }
}
