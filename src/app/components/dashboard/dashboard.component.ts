import { Component, OnInit } from '@angular/core';
import{RandFortuneService} from '../../services/rand-fortune.service'
import { Fortune } from 'src/app/Fortune';
import { UserCarryService } from 'src/app/services/user-carry.service';
import { loggedInUser } from 'src/app/loggedInUser';
import { GetUserFortunesService } from '../../services/get-user-fortunes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userCarryService: UserCarryService, private RandFortuneService: RandFortuneService, private getUserFortuneService: GetUserFortunesService) {}
  loggedInUser: loggedInUser;

  private randFortune ="";
  private randFortuneId = "" ;
  private fortuneNums = null;
  ngOnInit(): void {
    this.userCarryService.getcurrentUser().subscribe((ourUser) => {
      this.loggedInUser = ourUser;
      console.log(this.loggedInUser);
    });
    this.getUserFortuneService.getFortunes(this.loggedInUser.id).subscribe((userFortunes) => {
      this.fortuneNums = userFortunes;
    });
  }
  
  generateFortune(){
    this.RandFortuneService.getRandFortune(this.fortuneNums).subscribe((randomFortune) =>{
      this.randFortune = randomFortune[0].message;
      this.randFortuneId = randomFortune[0].id;

    });
  }

}
