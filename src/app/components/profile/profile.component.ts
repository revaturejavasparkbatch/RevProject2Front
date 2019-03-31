import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  fortunes: String[] = ["hi", "bye"];

  goDash() {
    this.route.navigateByUrl("/dashboard");
  }

  logout(){
    this.route.navigateByUrl("/");
  }
}
