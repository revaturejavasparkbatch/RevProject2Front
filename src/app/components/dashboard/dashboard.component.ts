import { Component, OnInit } from '@angular/core';
import{RandFortuneService} from '../../services/rand-fortune.service'
import { Fortune } from 'src/app/Fortune';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private RandFortuneService: RandFortuneService) { }
  private randFortune ="";
  ngOnInit() {
  }
  generateFortune(){
    this.RandFortuneService.getRandFortune().subscribe((randomFortune) =>{
      this.randFortune = randomFortune[0].message;
    });
  }

}
