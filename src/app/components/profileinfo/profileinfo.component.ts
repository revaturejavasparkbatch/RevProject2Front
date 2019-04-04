import { Component, OnInit } from '@angular/core';
import { loggedInUser } from '../../loggedInUser';
import { PostUserService } from 'src/app/services/post-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.css']
})
export class ProfileinfoComponent implements OnInit {

  constructor(private postUserServ: PostUserService, private route: Router) { }

  ngOnInit() {
  }

  firstName = JSON.parse(window.localStorage.getItem("fName"));
  lastName = JSON.parse(window.localStorage.getItem("lName"));
  userEmail = JSON.parse(window.localStorage.getItem("email"));
  userId = JSON.parse(window.localStorage.getItem("id"));
  userPass = JSON.parse(window.localStorage.getItem("password"));

  editedUser: loggedInUser = {
    id: 0,
    email: "",
    fName: "",
    lName: "",
    password: ""
  };

  profMessage: string = "";
  sucMessage = "Passwords matched. Redirecting you to profile home now...";
  errMessage = "The passwords you input did not match. Please try again.";

  completeUpdate(){
    window.location.href="http://localhost:4200/profile";
  }

  // All the logic for checking empty strings in profile edit & populating editedUser object with create values if so.
  editUser(fname: string, lname: string, email: string, pass: string, pass2: string){
    this.editedUser.id = this.userId;
    console.log(this.userPass + " this should be our password");

    if (fname == ""){
      this.editedUser.fName = this.firstName;
    } else {
      this.editedUser.fName = fname;
    }

    if (lname == ""){
      this.editedUser.lName = this.lastName;
    } else {
      this.editedUser.lName = lname;
    }

    if (email == "") {
      this.editedUser.email = this.userEmail;
    } else {
      this.editedUser.email = email;
    }

    if (pass == "" || pass == null){
      this.editedUser.password = this.userPass; 
    } else {
      if(!(pass === pass2)){
        this.profMessage = this.errMessage;
      } else {
        this.editedUser.password = pass;
        
        this.postUserServ.editUser(this.editedUser).subscribe((editResp) => {
          this.profMessage = this.sucMessage;
          setTimeout(this.completeUpdate, 4000);
        });
      }
    }

    console.log(this.editedUser);

    //updating localStorage before submitting update
    window.localStorage.setItem("id", JSON.stringify(this.editedUser.id));
    window.localStorage.setItem("fName", JSON.stringify(this.editedUser.fName));
    window.localStorage.setItem("lName", JSON.stringify(this.editedUser.lName));
    window.localStorage.setItem("email", JSON.stringify(this.editedUser.email));
    window.localStorage.setItem("password", JSON.stringify(this.editedUser.password));
  }
}
