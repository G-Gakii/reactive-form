import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css',
})
export class FormbuilderComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      id: new FormControl(''),
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
    });
  }
}
