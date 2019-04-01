import { Component, OnInit } from '@angular/core';

import{RandFortuneService} from '../../services/rand-fortune.service'
import { Fortune } from 'src/app/Fortune';
import { UserCarryService } from 'src/app/services/user-carry.service';
import { loggedInUser } from 'src/app/loggedInUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userCarryService: UserCarryService, private RandFortuneService: RandFortuneService) {}
  loggedInUser: loggedInUser;
    private randFortune ="";

  ngOnInit(): void {
    this.userCarryService.getcurrentUser().subscribe((ourUser) => {
      this.loggedInUser = ourUser;
      console.log(this.loggedInUser);
    });
  }
  
  generateFortune(){
    this.RandFortuneService.getRandFortune().subscribe((randomFortune) =>{
      this.randFortune = randomFortune[0].message;
    });
  }

}
