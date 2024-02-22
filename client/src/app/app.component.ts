import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personalBlog';
  user: any = {};
  users: any;
  posts: any;

  model: any = {};
  loggedIn = false;

  constructor(private http: HttpClient, private accountService: AccountService) {

  }

  
  ngOnInit(): void {
    this.http.get("https://localhost:6001/api/users").subscribe({
      next: response => { this.users = response, this.user = this.users[0] },
      error: error => console.error(error),
      complete: () => console.log("completed")

    });

    this.http.get("https://localhost:6001/api/posts").subscribe({
      next: res => this.posts = res,
      error: error => console.error(error),
      complete: () => console.log("completed posts")
    });
  }


  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.loggedIn = true;
      },
      error: error => console.error(error)
    });
  }

  logoutEvent(event: boolean) {
    this.loggedIn = event;
  }


}
