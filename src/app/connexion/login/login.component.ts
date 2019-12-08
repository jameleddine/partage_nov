import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup
  constructor() { }

  ngOnInit() {
    this.login = new FormGroup(
      {
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.minLength(6),Validators.required])
    }
    )
  }

}
