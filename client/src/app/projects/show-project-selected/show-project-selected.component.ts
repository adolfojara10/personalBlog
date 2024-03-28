import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-show-project-selected',
  standalone: true,
  templateUrl: './show-project-selected.component.html',
  styleUrls: ['./show-project-selected.component.css'],
  imports: [
    CommonModule,
    GalleryModule
    //TabsModule
  ]
})
export class ShowProjectSelectedComponent implements OnInit {
  project: Project | undefined;
  images: GalleryItem[] = [];
  imageUrls: string[] = [

  ];


  constructor(private projectService: ProjectService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadProject();
  }

  loadProject() {
    const id = this.route.snapshot.paramMap.get("id");

    if (!id) return;
    this.projectService.getPostId(parseInt(id)).subscribe({
      next: project => {
        this.project = project;
        this.getImages();
        console.log(this.project);

      }
    })
  }

  getImages() {
    if (!this.project) return;
        
    for (const photo of this.project.photos) {
      this.images.push(new ImageItem({ src: photo.url, thumb: photo.url }));
      this.images.push(new ImageItem({ src: photo.url, thumb: photo.url }));

      // this.imageUrls.push(photo.url);
      // this.imageUrls.push(photo.url);

      this.imageUrls.push(photo.url);
      this.imageUrls.push(photo.url);
    }
  }
}
