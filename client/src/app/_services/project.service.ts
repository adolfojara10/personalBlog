import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../_models/post';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = "https://localhost:6001/api/"

  constructor(private http: HttpClient) { }

  create(project: any) {
    //return this.http.post(this.baseUrl + "posts/createpost", post, this.getHttpOptions());
    return this.http.post(this.baseUrl + "projects/createProject", project);
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

  updateProject(project: Project){
    console.log(project);
    
    return this.http.put(this.baseUrl + "projects", project);

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
