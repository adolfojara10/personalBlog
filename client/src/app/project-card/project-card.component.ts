import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../_models/project';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit{
  
  @Input() project: Project | undefined;
  currentUser$: Observable<User | null> = of(null);

  constructor(protected accountService: AccountService, private router: Router) {

  }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

}
