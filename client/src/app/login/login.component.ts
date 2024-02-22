import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: any = {};

  constructor(protected accountService: AccountService, private router: Router,
    private toaster: ToastrService) { }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        //console.log(response);
        //this.loggedIn = true;
        this.router.navigateByUrl("/create-post");
      },
      error: error => {
        console.error(error);
        this.toaster.error(error.error)
      }
    });
  }
}
