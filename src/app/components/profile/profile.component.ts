import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserFortunesService } from '../../services/get-user-fortunes.service';
import { Fortune } from 'src/app/Fortune';
import { loggedInUser } from '../../loggedInUser';
import { UserCarryService } from 'src/app/services/user-carry.service';
import { MatDividerModule } from '@angular/material/divider';
import { completeFortune } from 'src/app/completeFortune';
import { DeleteFortuneService } from 'src/app/services/delete-fortune.service';
import { getMatFormFieldPlaceholderConflictError } from '@angular/material';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  constructor(private route: Router, private getUserFortuneService: GetUserFortunesService, private userCarryService: UserCarryService, private deleteFortuneService: DeleteFortuneService) { }

  fortune: Fortune[] = [];
  fortuneMess: String[] = [];
  loggedInUser: loggedInUser;
  fortuneNum: String[] = [];
  userFirstName: String = "";
  deleteThisFortune: completeFortune =  {
      id: "",
        user: {
        id: 0,
        email: "",
        fName: "",
        lName: "",
        password: "",
      },
    luckyNum: 0
    };

  userIdNum: number;

  private fortuneUrl = "http://fortunecookieapi.herokuapp.com/v1/fortunes/";

  ngOnInit(): void {
    var storageUser: string = window.localStorage.getItem("saved");
    console.log("this is da storageUser from localStorage " + (storageUser));
    this.userCarryService.getcurrentUser().subscribe((ourUser) => {
      this.loggedInUser = ourUser;
      console.log(this.loggedInUser);

    this.getUserFortuneService.getFortunes(this.loggedInUser.id).subscribe((userObjects) => {
      console.log(userObjects);
      this.userFirstName = userObjects[0].user.fName;
        for(let fort of userObjects){
          this.fortuneNum.push(fort.id);
          this.getUserFortuneService.getUserFortunes(this.fortuneUrl+fort.id).subscribe((ourFortunes) => {
            this.fortune.push(ourFortunes);
            console.log(this.fortune);
          });
        }
      });
  });

  }

  deleteFortune(fortuneId: String){
    this.deleteThisFortune.user.id = this.loggedInUser.id;
    console.log(fortuneId);
    this.deleteThisFortune.id = fortuneId;

    this.deleteFortuneService.deleteFortune(this.deleteThisFortune).subscribe((deletedFort) => {
      console.log(deletedFort + "was deleted!!! POG");
      this.route.navigateByUrl("/profile");
    })
  }

  goDash() {
    this.route.navigateByUrl("/dashboard");
  }

  logout(){
    this.route.navigateByUrl("/");
  }
}
