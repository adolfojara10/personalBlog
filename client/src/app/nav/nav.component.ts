import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  //loggedIn = false;
  @Input() loginFromAppComponent: any = false;

  @Output() cancelRegister = new EventEmitter();

  
  currentUser$: Observable<User | null> = of(null);

  constructor(protected accountService: AccountService, private router: Router) {

  }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  /*
  getCurrentUser() {
    this.accountService.currentUser$.subscribe(
      {
        next: user => this.loggedIn = !!user,
        error: erroe => console.log(erroe)
      }
    )
  }*/



  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");
    //this.loggedIn = false
    //this.loginFromAppComponent = false;
    //this.cancel();
  }

  /*cancel() {
    this.cancelRegister.emit(false);
  }*/
}
