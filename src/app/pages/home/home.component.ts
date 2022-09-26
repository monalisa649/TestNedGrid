import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataListI } from 'src/app/models/data-list.interface';
import { HomeService } from 'src/app/services/home.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listData : DataListI[]=[]
  public data :  DataListI[]=[]


  constructor(private _homeService: HomeService,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.getData()

  }

  public getData (){
    this._homeService.getData()
    .subscribe((res: any) =>{
      console.log(res)
      this.listData = res
    })
  }


  public removeItem(id : number | undefined){
    Swal.fire({
      title: 'Está seguro?',
      text: "Desea eliminar el item",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._homeService.removeItem(id).subscribe()
        this.listData = this.listData.filter((element:any) => element.id !== id);
        Swal.fire(
          'Eliminado!',
          'El item ha sido eliminado.',
          'success'
        )
      }
    })

  }

  public addItem(){
    this.router.navigate(['add']);
  }

  public editItem(id: number | undefined ){
    this.router.navigate([`edit/${id}`]);
  }

  ngOnDestroy(){
   // this.subject$.unsubscribe()
  }

}
