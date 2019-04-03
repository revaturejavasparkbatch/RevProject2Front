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
  
  
  constructor(private postUserService: PostUserService, private route: Router) { }

  ngOnInit() {
  }

  private errorMessage = "";
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
      if (response.email != null) {
        window.localStorage.setItem("id", JSON.stringify(response.id));
        window.localStorage.setItem("fName", JSON.stringify(response.fName));
        window.localStorage.setItem("lName", JSON.stringify(response.lName));
        window.localStorage.setItem("email", JSON.stringify(response.email));
        this.route.navigateByUrl("/dashboard");
      }
    });

  } 
}
