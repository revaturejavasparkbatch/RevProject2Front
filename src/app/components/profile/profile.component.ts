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

  luckynumstr = "";
  userFirstName: String = JSON.parse(window.localStorage.getItem("fName"));

  tweet: string = "tweetomgplease";
  completeF: completeFortune[] = [];

  deleteThisFortune: completeFortune =  {
      id: "",
        user: {
        id: 0,
        email: "",
        fName: "",
        lName: "",
        password: ""
      },
    luckyNum: 0
    };

  userIdNum: number;
  storageUser: loggedInUser;
  hide: boolean = true;
  splitArr: string[] = [];

  private fortuneUrl = "http://fortunecookieapi.herokuapp.com/v1/fortunes/";

  ngOnInit(): void {
    console.log(parseInt(window.localStorage.getItem("id")));

    
    this.loggedInUserProf = this.userCarryService.getcurrentUser();
    console.log(this.loggedInUserProf);

    this.getUserFortuneService.getFortunes(parseInt(window.localStorage.getItem("id"))).subscribe((userObjects) => {
      console.log(userObjects);
      this.completeF = userObjects;
      console.log(this.completeF);
        for(let fort of userObjects){
          this.luckynumstr+= (String)(fort.luckyNum) + " ";
          this.fortuneNum.push(fort.id);
          this.getUserFortuneService.getUserFortunes(this.fortuneUrl+fort.id).subscribe((ourFortunes) => {
            ourFortunes.luckyNum = fort.luckyNum;
            this.fortune.push(ourFortunes);
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
  
  deleteFortune(fortuneId: string){
    this.deleteThisFortune.user.id = this.loggedInUserProf.id;
    console.log(fortuneId);
    //document.getElementById(fortuneId).setAttribute("hidden","true");
    //document.getElementById(fortuneId).remove();
    for(let i = 0; i<this.fortune.length; i++){
      if(this.fortune[i].id == fortuneId){
        this.fortune.splice(i,1);
      }
    
    }

    console.log(this.fortune);
    this.deleteThisFortune.id = fortuneId;


    this.deleteFortuneService.deleteFortune(this.deleteThisFortune).subscribe((deletedFort) => {
      console.log(deletedFort);
      // location.reload();

    })
  }

  goDash() {
    this.route.navigateByUrl("/dashboard");
  }

  logout(){
    this.logoutService.logout();
  }
}
