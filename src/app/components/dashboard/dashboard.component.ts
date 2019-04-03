import { Component, OnInit } from '@angular/core';
import{RandFortuneService} from '../../services/rand-fortune.service'
import { completeFortune } from 'src/app/completeFortune';
import { UserCarryService } from 'src/app/services/user-carry.service';
import { loggedInUser } from 'src/app/loggedInUser';
import { GetUserFortunesService } from '../../services/get-user-fortunes.service';
import {FavFortuneService} from 'src/app/services/fav-fortune.service';
import { LogoutService } from 'src/app/services/logout.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Router, private userCarryService: UserCarryService, private RandFortuneService: RandFortuneService,
     private getUserFortuneService: GetUserFortunesService, private favFortuneService: FavFortuneService,
     private logoutService:LogoutService ) {}
  loggedInUser: loggedInUser;
  private luckNum = null;
  randFortune = "";
  private randFortuneId = "" ;
  private fortuneNums = null;
  showFavButton = false;

  ngOnInit(): void {
    console.log(JSON.parse(window.localStorage.getItem("fName")));

    this.loggedInUser = this.userCarryService.getcurrentUser();
    console.log(this.loggedInUser);
    
    this.getUserFortuneService.getFortunes(parseInt(window.localStorage.getItem("id"))).subscribe((userFortunes) => {
      this.fortuneNums = userFortunes;
    });
  }
  
  generateFortune(){
    this.RandFortuneService.getRandFortune(this.fortuneNums).subscribe((randomFortune) =>{
      this.randFortune = randomFortune[0].message;
      this.randFortuneId = randomFortune[0].id;

    });
    this.showFavButton = true;
    this.luckNum = Math.floor((1 + (Math.random()*998)));
  }
  favFortune(){
    let fortune:completeFortune = {id:this.randFortuneId, user:this.loggedInUser, luckyNum:this.luckNum};
    this.favFortuneService.favAFortune(fortune).subscribe((putResponse) =>{
      console.log(putResponse);
    });
    this.randFortune="";
    this.randFortuneId ="";
    this.showFavButton = false;
    this.luckNum= null;
  }
  loggingout(){
    this.logoutService.logout();
  }
  goPro(){
    this.route.navigateByUrl('/profile');
  }

}
