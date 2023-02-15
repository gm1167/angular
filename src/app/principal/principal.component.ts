import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/service.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  serviceObject:any
  constructor(private DataService: DataService) { }
  
  ngOnInit(): void {
    // console.log(this.DataService.sendGetRequest());    
    this.DataService.sendGetRequest().then(datos => {
      this.serviceObject = datos
    }).catch(error => {

    });
    // this.serviceObject = this.DataService.sendGetRequest();   
  }

  participanteData:any=[
    {
      "nombreModel": "milton",
      "apellidoModel": "ramirez"
    }
  ]
  isShown: string = ''; 
  crearEmpleados(item:string){
    this.isShown = item
  }

}
