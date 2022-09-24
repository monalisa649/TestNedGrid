import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private _homeService : HomeService, private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),


      ]),
      body: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),

      ]),
    });
  }

  public addItem (form : DataListI ) {
   let data = {
    ...form,
    userId: 1
   }

   this._homeService.addItem(data).subscribe(res => {
    if (res){
      this.router.navigate(['/home']);
    }
   })
   }


   get getTitle() {
    return this.form.get('title');
  }

  get getBody() {
    return this.form.get('body');
  }

  get isTitleValid (){
    return this.getTitle?.touched && this.getTitle.invalid
  }

  get isBodyValid (){
    return this.getBody?.touched && this.getBody.invalid
  }

}
