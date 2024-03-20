import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../_models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "https://localhost:6001/api/"

  constructor(private http: HttpClient) { }

  create(post: any) {
    //return this.http.post(this.baseUrl + "posts/createpost", post, this.getHttpOptions());
    return this.http.post(this.baseUrl + "posts/createpost", post);
  }

  getPostId(id:number){
    return this.http.get<Post>(this.baseUrl + "posts/" + id);
  }

  getPostTitle(title:string){
    return this.http.get<Post>(this.baseUrl + "posts/title/" + title);
  }

  getAllPosts(){
    return this.http.get<Post[]>(this.baseUrl + "posts")
  }

  // getHttpOptions() {
  //   const userString = localStorage.getItem("user");
  //   if (!userString) return;
  //   const user = JSON.parse(userString);
  //   return {
  //     headers: new HttpHeaders({
  //       Authorization: "Bearer " + user.token
  //     }

  //     )
  //   }
  // }

}
