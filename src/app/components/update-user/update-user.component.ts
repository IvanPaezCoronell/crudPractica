import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  public editForm: FormGroup;
  postRef: any;

  constructor(
    public userService: UserService,
    public fb: FormBuilder,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
    this.editForm = fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe((res) => {
      this.postRef = res
      this.editForm = this.fb.group({
        name: [this.postRef.name, Validators.required],
        lastname: [this.postRef.lastname, Validators.required],
        email: [this.postRef.email, Validators.required],
        department: [this.postRef.department, Validators.required],
      })
      })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.userService.updateUser(this.editForm.value, id);
    this.router.navigate(['']);
  }
}
