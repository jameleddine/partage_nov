import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Post } from '../entities/post.entity';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[CrudService]
})
export class EditComponent implements OnInit {
idPost:any;
// Post:any = {}
Post : Post = new Post();
  constructor(private crud:CrudService,private route:ActivatedRoute,private re:Router) {
    this.route.params.subscribe(res=>{
      console.log(res);
      this.idPost = res.id
    })
   }

  ngOnInit() {
    this.crud.getPostById(this.idPost).subscribe(res=>{
      console.log(res);
      this.Post = <Post>res;
    })
    // this.http.get('http://localhost:3000/post/'+this.idPost).subscribe(res=>{
    //   console.log(res);
    //   this.Post = <Post>res;
    // })
  }

  modifier(){
    this.crud.updatePostById(this.idPost,this.Post).subscribe(res=>{
      console.log(res);
      this.re.navigate(['/'])
    })
    // this.http.put('http://localhost:3000/post/'+this.idPost,this.Post).subscribe(res=>{
    //   console.log(res);
    //   this.re.navigate(['/'])
    // })
  }

}
