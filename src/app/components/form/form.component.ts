import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  allUser: any;
  userProfile: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(private http: HttpClient) {
    this.getAllUser();
  }

  onsave() {
    const obj = this.userProfile.value;
    console.log(obj);

    this.http
      .post('https://jsonplaceholder.typicode.com/users', obj)
      .subscribe({
        next: (res: any) => {
          alert('usercreated');
        },
      });
  }

  getAllUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response) => {
        this.allUser = response;
      },
    });
  }
  onEdit(id: number) {
    this.http
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe({
        next: (res: any) => {
          this.userProfile = new FormGroup({
            id: new FormControl(res.id),
            name: new FormControl(res.name),
            username: new FormControl(res.username),
            email: new FormControl(res.email),
          });
        },
      });
  }
}
