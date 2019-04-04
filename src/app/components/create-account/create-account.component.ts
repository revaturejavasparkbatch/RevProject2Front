import { Component, OnInit } from '@angular/core';
import { PostUserService } from '../../services/post-user.service';
import { Router } from '@angular/router';
import { loggedInUser } from 'src/app/loggedInUser';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
  activeModal: boolean = false;
  public errorMsg = "Account creation failed, verify that all information is correct!"
  public successMsg = "Account successfully created! Redirecting..."
  public createRespMsg = "";
  private userloggedin : loggedInUser;
  constructor(private postUserService: PostUserService, private route: Router) { }

  ngOnInit() {
  }

  public errorMessage = "";
  add(fN: string, lN: string, em: string, pass: string): void {
    let user:loggedInUser = {
      id: null,
      fName: fN,
      lName: lN,
      email: em,
      password: pass
    }
    
    console.log(user);

    this.postUserService.addUser(user).subscribe((response) => {
      this.userloggedin = response;
      console.log(response);
      if (response.email != null) {
        window.localStorage.setItem("id", JSON.stringify(response.id));
        window.localStorage.setItem("fName", JSON.stringify(response.fName));
        window.localStorage.setItem("lName", JSON.stringify(response.lName));
        window.localStorage.setItem("email", JSON.stringify(response.email));
        window.localStorage.setItem("password", JSON.stringify(response.password));
        this.createRespMsg = this.successMsg;
        // setTimeout(()=> window.location.href="http://localhost:4200/dashboard", 3500);
        setTimeout(()=> this.route.navigateByUrl("/dashboard"), 3500);
      }
    },(error) => {
      this.createRespMsg = this.errorMsg;
      console.log(error);
    
    });

  } 
}
