import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title_home = "welcome from home component"
  constructor() { }

  ngOnInit() {
  }
  fctHome(){
    let data = "hello";
    alert(data)
  }

}
