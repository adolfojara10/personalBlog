import { Component, Input } from '@angular/core';
import { Post } from '../_models/post';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post: Post | undefined;

  currentUser$: Observable<User | null> = of(null);

  constructor(protected accountService: AccountService, private router: Router) {

  }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

}
