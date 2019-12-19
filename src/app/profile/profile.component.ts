import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { User } from './../backend/models/user.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  model: any = {};
  updateForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

async update() {
  //   const user = new User({       // course is an object of type Course (lowercase)
  //   username: this.registerForm.get('username').value,
  //   password: this.registerForm.get('password').value,
  //   fname: this.registerForm.get('fname').value,
  //   lname: this.registerForm.get('lname').value,
  //   email: this.registerForm.get('email').value
  //  });

  //   const result = await user.save();

  //   console.log(result);


  }
}
