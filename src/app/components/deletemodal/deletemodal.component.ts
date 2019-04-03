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

  constructor(private delService: DeleteuserService, private router: Router) { }

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

  completeDel(){
    console.log("are we even in completeDel() ??? ");
    window.location.href = "http://localhost:4200/";
  }

  deleteUser(password: string, pass2: string){
    console.log(this.deleteThisUser.id);
    console.log(this.deleteThisUser.email);

    if (!(password === pass2)){
      this.errorMessage = "Your passwords did not match. Please try again.";
    } else {
      if (password === pass2  && password === JSON.parse(window.localStorage.getItem("password"))) {
        this.delService.deleteUser(this.deleteThisUser).subscribe((deleted) => {
          console.log("user was deleted");
          this.errorMessage = "Account deleted... redirecting you now.";
          setTimeout(() => this.router.navigateByUrl("/"), 3000);
      });
    } else {
        this.errorMessage = "You input the incorrect password associate with the account."
      }
    }
  }

}
