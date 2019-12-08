import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../entities/post.entity';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
  providers:[CrudService]
})
export class AjoutComponent implements OnInit {
// title:string;
// description:string;
// contract_type:string;
// salaire:string;
Post:Post = new Post();

  constructor(private crud:CrudService,private route:Router) { }

  ngOnInit() {
  }
  ajouter(){
    // let data = {
    //   title:this.title,
    //   description:this.description,
    //   contract_type:this.contract_type,
    //   salaire:this.salaire
    // }
    this.crud.createPost(this.Post).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/'])
    })
    // this.http.post('http://localhost:3000/posts',this.Post).subscribe(res=>{
    //   console.log(res);
    //   this.route.navigate(['/'])
    // })
  }

}
