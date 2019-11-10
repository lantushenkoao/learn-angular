import { Component, OnInit } from '@angular/core';
import {ContentfulUserService} from "../../services/contentful-user/contentful-user.service";
import {Entry} from "contentful";

@Component({
  selector: 'app-userspage',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  private users: Entry<any>[] = [];

  constructor(private userService: ContentfulUserService) { }

  ngOnInit() {
    this.userService.getUsers().then(users => this.users = users);
  }
}
