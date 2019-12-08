import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  myform:FormGroup;
  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup(
      {
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.minLength(6),Validators.required])
    }
    )
  }

}
