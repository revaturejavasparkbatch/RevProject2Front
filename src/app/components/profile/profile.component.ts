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
import { LogoutService } from 'src/app/services/logout.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  constructor(private route: Router, private getUserFortuneService: GetUserFortunesService, 
    private userCarryService: UserCarryService, private deleteFortuneService: DeleteFortuneService,
    private logoutService:LogoutService ) { }

  fortune: Fortune[] = [];
  fortuneMess: String[] = [];
  loggedInUserProf: loggedInUser;
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
  storageUser: loggedInUser;

  private fortuneUrl = "http://fortunecookieapi.herokuapp.com/v1/fortunes/";

  ngOnInit(): void {
    console.log(parseInt(window.localStorage.getItem("id")));

    
    this.loggedInUserProf = this.userCarryService.getcurrentUser();
    console.log(this.loggedInUserProf);

    this.getUserFortuneService.getFortunes(parseInt(window.localStorage.getItem("id"))).subscribe((userObjects) => {
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

  }

  showProfile = false;
  toggleProfile = () => {
    this.showProfile = !this.showProfile;
  }

  showDeleteMenu = false;
  toggleDelete = () => {
    this.showDeleteMenu = !this.showDeleteMenu;
  }
  
  deleteFortune(fortuneId: String){
    this.deleteThisFortune.user.id = this.loggedInUserProf.id;
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
    this.logoutService.logout();
  }
}
