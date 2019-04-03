import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private route: Router) { }
        logout(){
          window.localStorage.setItem("id", null);
          window.localStorage.setItem("fName", null);
          window.localStorage.setItem("lName", null);
          window.localStorage.setItem("email", null);
          this.route.navigateByUrl("/");
        }
}
