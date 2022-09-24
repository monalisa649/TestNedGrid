import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataListI } from 'src/app/models/data-list.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form!: FormGroup;
  public id! : number
  constructor(private _homeService : HomeService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getIdParams()

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

  getIdParams() {
    this.route.params.subscribe(params => {
      this.id = params['id']
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


  public editItem(form : DataListI) {
    let data = {
      id : this.id,
      ...form,
      userId: 1
     }
    this._homeService.editItem(this.id, data)
    .subscribe(res =>{
      if (res){
        this.router.navigate(['/home']);
      }
    })
  }

}
