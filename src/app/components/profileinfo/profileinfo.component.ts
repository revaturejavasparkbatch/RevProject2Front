import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.css']
})
export class ProfileinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  firstName = JSON.parse(window.localStorage.getItem("fName"));
  lastName = JSON.parse(window.localStorage.getItem("lName"));
  userEmail = JSON.parse(window.localStorage.getItem("email"));

}
