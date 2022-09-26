import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataListI } from 'src/app/models/data-list.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form!: FormGroup;

  constructor(private _homeService: HomeService,
              private router: Router,
              public fb: FormBuilder) { }

  ngOnInit(): void {
    this.builForm()

  }

  private builForm() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  public addItem(form: DataListI) {
    let data = {
      ...form,
      userId: 1
    }

    this._homeService.addItem(data).subscribe(res => {
      if (res) {
        this.router.navigate(['/']);
      }
    })
  }


  get getTitle() {
    return this.form.get('title');
  }

  get getBody() {
    return this.form.get('body');
  }

  get isTitleValid() {
    return this.getTitle?.touched && this.getTitle.invalid
  }

  get isBodyValid() {
    return this.getBody?.touched && this.getBody.invalid
  }

}
