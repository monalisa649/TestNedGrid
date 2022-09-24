import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import Swal from 'sweetalert2';

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
        this._homeService.removeItem(id).subscribe(console.log)
        this.listData = this.listData.filter((d:any) => d.id !== id);
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

  public goItem(id: number){
    this.router.navigate([`edit/${id}`]);
  }


}
