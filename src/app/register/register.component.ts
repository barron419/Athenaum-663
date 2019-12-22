import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { User } from './../backend/models/user.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  registerForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  async register() {
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
