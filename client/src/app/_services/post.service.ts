import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = "https://localhost:6001/api/"

  constructor(private http: HttpClient) { }

  create(post: any) {
    return this.http.post(this.baseUrl + "posts/createpost", post);
  }

}
