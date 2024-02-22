import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  loggedIn = false;
  @Input() loginFromAppComponent: any = false;

  @Output() cancelRegister = new EventEmitter();

  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {

  }



  logout() {
    this.loggedIn = false
    this.loginFromAppComponent = false;
    this.cancel();
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
