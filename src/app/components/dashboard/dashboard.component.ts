import { Component, OnInit } from '@angular/core';
import { UserCarryService } from 'src/app/services/user-carry.service';
import { loggedInUser } from 'src/app/loggedInUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userCarryService: UserCarryService) {}
  loggedInUser: loggedInUser;

  ngOnInit(): void {
    this.userCarryService.getcurrentUser().subscribe((ourUser) => {
      this.loggedInUser = ourUser;
      console.log(this.loggedInUser);
    });
  }

}
