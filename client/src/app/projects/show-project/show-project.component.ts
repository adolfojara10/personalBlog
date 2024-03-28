import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit{
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {

  }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllPosts().subscribe({
      next: projects => this.projects = projects
    })
  }
}
