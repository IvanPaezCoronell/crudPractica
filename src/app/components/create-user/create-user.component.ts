import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    public userService: UserService,
    public fb: FormBuilder,
    public router: Router
  ) {
    this.userForm = fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService.createUser(this.userForm.value);
    this.router.navigate(['']);
  }
}
