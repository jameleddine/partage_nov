import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiUrl:string = "http://localhost:3000/"
  constructor(private http:HttpClient) { }
  getAllPosts(){
    return this.http.get(this.apiUrl+'posts');
  }
  getPostById(id){
    return this.http.get(this.apiUrl+'post/'+id);
  }
  createPost(post){
    return this.http.post(this.apiUrl+'posts',post);
  }
  updatePostById(id,post){
    return this.http.put(this.apiUrl+'post/'+id,post);
  }
  deletePost(id){
    return this.http.delete(this.apiUrl+'post/'+id);
  }
}
