import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  Users: User[]; // Arreglo de usuarios

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.Users = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as User),
        };
      });
    });
  }

  deleteUser = (user) => {
    this.userService.deleteUser(user);
  };
}
