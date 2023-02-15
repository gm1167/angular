import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.coleccionEmpleados);
  }
  @Input() coleccionEmpleados:any=[]
  formData:any={}
  verificarEmpleado(): void {
    if (!this.formData.nombreModel) {
      alert("ingrese nombre");
    } else if(!this.formData.apellidoModel){
      alert("ingrese apellido");
    } else {
      this.coleccionEmpleados.push(this.formData)
      console.log(this.coleccionEmpleados);
    }    

  }
}


