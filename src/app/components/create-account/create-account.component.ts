import { Component, OnInit } from '@angular/core';
import { PostUserService } from '../../services/post-user.service';
import {User} from '../../User';

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
      fName: fN,
      lName: lN,
      email: em,
      password: pass
    }
    
    console.log(user);

    this.postUserService.addUser(user).subscribe((response) => {
      console.log('response from post is ', response);
    });

  } 
}
