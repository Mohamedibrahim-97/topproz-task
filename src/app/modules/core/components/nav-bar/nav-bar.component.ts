import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/shared/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  userToken : any = localStorage.getItem('userToken');

constructor(public router : Router, private userService: UserService) {}

ngOnInit(){
  if(this.userToken) {
    this.userService.userToken.next(this.userToken)
  }
  this.userService.userToken.subscribe((token)=> {
    this.userToken = token;
  } )
}

  logOut() {
    localStorage.removeItem('userToken');
    this.userService.userToken.next(null);
    this.router.navigate(['auth/login']);

  }
}
