import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/_models/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  @ViewChild("editForm") editForm: NgForm | undefined;
  project: Project | undefined;
  images: GalleryItem[] = [];
  imageUrls: string[] = [

  ];


  constructor(private projectService: ProjectService, private route: ActivatedRoute,
    private toaster: ToastrService
  ) {

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

  updateProject(){
        
    this.projectService.updateProject(this.editForm?.value).subscribe({
      next : _ => {
      this.toaster.success("Profile updated succesfully"),
      this.editForm?.reset(this.project)
      }
    });

  }
}