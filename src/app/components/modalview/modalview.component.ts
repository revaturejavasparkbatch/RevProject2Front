import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modalview',
  templateUrl: './modalview.component.html',
  styleUrls: ['./modalview.component.css']
})
export class ModalviewComponent implements OnInit {
  @Input() show = false;
  @Input() customClass = '';
  @Input() closeCallback = () => (false);
  
  constructor() { }

  ngOnInit() {
  }

}
