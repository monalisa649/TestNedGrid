import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataListI } from 'src/app/models/data-list.interface';
import { HomeService } from 'src/app/services/home.service';
import { ShareDataService } from 'src/app/services/share-data.service';
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
              private shareDataService : ShareDataService
              ) { }

  ngOnInit(): void {
    this.shareDataService.receiveData.subscribe(res => this.data = res)
    //console.log(this.data)

    this.getData(this.data)

  }

    public getData (data:any){
    //console.log(data,'dataadd')
    this._homeService.getData()
    .subscribe((res: any) =>{
      if(data.id === 0){
        this.listData = res
      }else if (data.id >= 0){
        console.log(data,'edit')
        let newObject = {...data}
      this.listData = res.filter((element:any) => element.id != data.id)
      data.id !=0 ?  this.listData.push(newObject) : this.listData
      this.listData.sort(function(a : any, b: any){return a.id - b.id})
      //this.listData = newData
      }/*else (data.id>100)
      let otherObject = {...data.data, id: data.id}

      this.listData = res.filter((element:any) => element.id != data.id)
      data.id !=0 ?  this.listData.push(otherObject) : this.listData
      this.listData.sort(function(a : any, b: any){return a.id - b.id})*/

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



}
