import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/service.service';


@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.scss']
})
export class ListadoEmpleadosComponent implements OnInit {
  @Input() participanteData:any=[]
  arreglo=[]
  filterTerm: string = '';
  serviceObject:any
  constructor(private DataService: DataService) { }


  ngOnInit(): void {
    this.DataService.sendGetRequest().then(datos => {
      this.serviceObject = datos
      console.log(this.serviceObject);
    }).catch(error => {
      alert("Error");
    });

    console.log(this.participanteData);
  }

}
