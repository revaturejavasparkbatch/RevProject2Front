import { Component, OnInit } from '@angular/core';
import { FotDServiceService } from '../../services/fot-dservice.service';
import { Fortune } from 'src/app/Fortune';

@Component({
  selector: 'app-fortune-of-the-day',
  templateUrl: './fortune-of-the-day.component.html',
  styleUrls: ['./fortune-of-the-day.component.css']
})

export class FortuneOfTheDayComponent implements OnInit {
  fortune: Fortune[];
  todaysFortune: String;

  constructor(private FotDServiceService: FotDServiceService) { }

  ngOnInit() {
      this.FotDServiceService.getFotd().subscribe((randomFortune) => {
        this.fortune = randomFortune;
        this.todaysFortune = this.fortune[0].message;
        console.log(this.fortune);
        });
    }

  showModal = false;
  showLogin = false;

  toggleModal = () => {
    this.showModal = !this.showModal;
  }
  
  toggleLogin = () => {
    this.showLogin = !this.showLogin;
  }

  }


