import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post';
import { PostService } from '../_services/post.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { concatWith } from 'rxjs';
//import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-show-post-selected',
  standalone: true,
  templateUrl: './show-post-selected.component.html',
  styleUrls: ['./show-post-selected.component.css'],
  imports: [
    CommonModule,
    GalleryModule
    //TabsModule
  ]
})
export class ShowPostSelectedComponent implements OnInit {

  post: Post | undefined;
  images: GalleryItem[] = [];
  imageUrls: string[] = [

  ];


  constructor(private postService: PostService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadPost();
  }

  loadPost() {
    const id = this.route.snapshot.paramMap.get("id");

    if (!id) return;
    this.postService.getPostId(parseInt(id)).subscribe({
      next: post => {
        this.post = post;
        this.getImages();
        console.log(this.post);

      }
    })
  }

  getImages() {
    if (!this.post) return;
        
    for (const photo of this.post.photos) {
      this.images.push(new ImageItem({ src: photo.url, thumb: photo.url }));
      this.images.push(new ImageItem({ src: photo.url, thumb: photo.url }));

      // this.imageUrls.push(photo.url);
      // this.imageUrls.push(photo.url);

      this.imageUrls.push(photo.url);
      this.imageUrls.push(photo.url);
    }
  }


}
