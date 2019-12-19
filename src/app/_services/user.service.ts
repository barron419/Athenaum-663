import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './../server/model/user';

const url = 'http://localhost:4000';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(url + '/users');
    }

    getById(id: string) {
        return this.http.get(url + '/users/' + id);
    }

    create(user: User) {
        return this.http.post(url + '/users/register', user);
    }

    update(user: User) {
        return this.http.put(url + '/users/' + user._id, user);
    }

    // tslint:disable-next-line: variable-name
    delete(_id: string) {
        return this.http.delete(url + '/users/' + _id);
    }
}
