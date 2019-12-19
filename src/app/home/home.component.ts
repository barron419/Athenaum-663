import { Component, OnInit } from '@angular/core';
import { User } from './../server/model/user';
import { UserService } from './../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [ ]
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  // tslint:disable-next-line: variable-name
  deleteUser(_id: string) {
      this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
      this.userService.getAll().subscribe(users => { this.users = users; });
  }
}
