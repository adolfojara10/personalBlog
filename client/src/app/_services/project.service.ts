import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../_models/post';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = "https://localhost:6001/api/"

  constructor(private http: HttpClient) { }

  create(post: any) {
    //return this.http.post(this.baseUrl + "posts/createpost", post, this.getHttpOptions());
    return this.http.post(this.baseUrl + "projects/createProject", post);
  }

  getPostId(id:number){
    return this.http.get<Post>(this.baseUrl + "projects/" + id);
  }

  getPostTitle(title:string){
    return this.http.get<Post>(this.baseUrl + "projects/title/" + title);
  }

  getAllPosts(){
    return this.http.get<Post[]>(this.baseUrl + "projects")
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
