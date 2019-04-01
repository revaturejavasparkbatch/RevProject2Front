import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserFortunesService } from '../../services/get-user-fortunes.service';
import { Fortune } from 'src/app/Fortune';
import { loggedInUser } from '../../loggedInUser';
import { UserCarryService } from 'src/app/services/user-carry.service';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  constructor(private route: Router, private getUserFortuneService: GetUserFortunesService, private userCarryService: UserCarryService) { }

  fortune: Fortune[] = [];
  fortuneId: string[] = [];
  loggedInUser: loggedInUser;
  fortuneNum: number;

  private fortuneUrl = "http://fortunecookieapi.herokuapp.com/v1/fortunes/";

  ngOnInit(): void {
    this.userCarryService.getcurrentUser().subscribe((ourUser) => {
      this.loggedInUser = ourUser;
      console.log(this.loggedInUser);

    this.getUserFortuneService.getFortunes(this.loggedInUser.id).subscribe((userFortunes) => {
        for(let fort of userFortunes){
          this.getUserFortuneService.getUserFortunes(this.fortuneUrl+fort.id).subscribe((ourFortunes) => {
            this.fortuneId.push(ourFortunes.message);
          });
        }
      });
  });

  }

  goDash() {
    this.route.navigateByUrl("/dashboard");
  }

  logout(){
    this.route.navigateByUrl("/");
  }
}
