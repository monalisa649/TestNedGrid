import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataListI } from 'src/app/models/data-list.interface';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listData : any

  constructor(private _homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.getData()
  }

  public getData (){
    this._homeService.getData()
    .subscribe((res: any) =>{
      this.listData = res
      console.log(this.listData)
    })
  }

  public removeItem(id : number){
    this._homeService.removeItem(id).subscribe(console.log)
    this.listData = this.listData.filter((d:any) => d.id !== id);
  }

  public addItem(){
    this.router.navigate(['add']);
  }

  public goItem(id: number){
    this.router.navigate([`edit/${id}`]);
  }


}
