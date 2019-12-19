import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from './../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../_services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
  providers: [ ]
})

export class LoginFormComponent {
  public user: User;
  model: any = {};
  loginForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  });
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authententicationService: AuthenticationService,
      ) {}

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
      this.authententicationService.logout();

      // tslint:disable-next-line: no-string-literal
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
      this.loading = true;
      this.authententicationService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
          },
          error => {
            console.warn(error);
            this.loading = false;
          });
    }
}
