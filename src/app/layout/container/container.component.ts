import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  containerTitle : string = "Conatiner";
  statusButton : boolean = true;
  count : number = 0;
  user:string;
  userData:any = {};
  name:string;
  email:string;
  phone:string;
  about:string;
  users:any = [];
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
 
  constructor() {
    console.log("load constructor")
   }

  ngOnInit() {
    console.log("load Oninit")
  }
  ngDoCheck(){
    ///console.log("load ngDoCheck")
  }
  calcule(){
    alert(this.user)
  }
  increment(){
    this.count ++;
  }
  decrement(){
    this.count --;
  }
  save(){
   this.userData = {
     "nom":this.name,
     "email":this.email,
     "phone":this.phone,
     "about":this.about
   }
   console.log(this.userData);
  }
  addToArray(){
    let data = {
      "name":this.name,
      "email":this.email,
      "phone":this.phone
    }
    this.users.push(data);
  }

}
