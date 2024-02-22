import { Component } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  post: any = {};

  constructor(private postService: PostService) {

  }

  createPost() {
    this.postService.create(this.post).subscribe({
      next: p => console.log(p),
      error: e => console.log(e)
    })
  }

}
