import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
resultats : any = []
  constructor(private route:Router, private crud:CrudService) { }

  ngOnInit() {
   this.getAll()
  }
  /**
   * get all posts
   */
  getAll(){
    this.crud.getAllPosts().subscribe(res=>{
         this.resultats = res;
     })
    // this.http.get('http://localhost:3000/posts').subscribe(res=>{
    //   this.resultats = res;
    // })
  }
  /**
   * 
   * @param post Delete post by id
   */
  delete(post){
    this.crud.deletePost(post._id).subscribe(res=>{
      this.getAll();
    })
    // this.http.delete('http://localhost:3000/post/'+post._id).subscribe(res=>{
    //   this.getAll();
    // })
  }

  edit(post){
    this.route.navigate(['edit',post._id])
  }

}
