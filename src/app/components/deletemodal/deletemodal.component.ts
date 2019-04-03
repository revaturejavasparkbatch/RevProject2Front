import { Component, OnInit } from '@angular/core';
import { loggedInUser } from '../../loggedInUser';
import { DeleteuserService } from 'src/app/services/deleteuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.css']
})
export class DeletemodalComponent implements OnInit {

  constructor(private delService: DeleteuserService, private route: Router) { }

  ngOnInit() {
  }

  deleteThisUser: loggedInUser = {
    id: JSON.parse(window.localStorage.getItem("id")),
    email: JSON.parse(window.localStorage.getItem("email")),
    fName: "",
    lName: "",
    password: ""
  }

  errorMessage: string = "";

  deleteUser(password: string, pass2: string){
    console.log(this.deleteThisUser.id);
    console.log(this.deleteThisUser.email);

    if (!(password === pass2)){
      this.errorMessage = "Your passwords did not match. Please try again.";
    } else {
      if (password === pass2  && password === JSON.parse(window.localStorage.getItem("password"))) {
        this.errorMessage = "";
        this.delService.deleteUser(this.deleteThisUser).subscribe((deleted) => {
            console.log("user was deleted");
            setTimeout(()=>{   
              this.errorMessage = "Your account was deleted. Redirecting you to the homepage now..";
         }, 10000);
            this.route.navigateByUrl("/");
        });
      } else {
        this.errorMessage = "You input the incorrect password associate with the account."
      }
    }
  }
}
