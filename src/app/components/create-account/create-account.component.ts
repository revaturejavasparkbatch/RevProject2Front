import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { PostUserService } from '../../services/post-user.service';
import {User} from '../../User';
import { fn } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
  activeModal: boolean = false;
  user: { firstName: string; lastName: string; email: string; password: string};
  
  constructor(private postUserService: PostUserService) { }

  ngOnInit() {
  }

  users: User[];

  add(fN: string, lN: string, em: string, pass: string): void {
    let user = {
      first: fN,
      last: lN,
      email: em,
      pass: pass
    }
    
    console.log(user);

    this.postUserService.addUser(user);
  } 
}
