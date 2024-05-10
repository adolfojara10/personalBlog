import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../_models/post';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { PostService } from '../_services/post.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  @ViewChild("editForm") editForm: NgForm | undefined;
  post: Post | undefined;
  images: GalleryItem[] = [];
  imageUrls: string[] = [

  ];


  constructor(private postService: PostService, private route: ActivatedRoute, private toaster: ToastrService) {

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

  updatePost(){
    this.postService.updatePost(this.editForm?.value).subscribe({
      next: _ =>{
        this.toaster.success("Profile updated succesfully"),
        this.editForm?.reset(this.post)
      }
    })
    
  }


}
