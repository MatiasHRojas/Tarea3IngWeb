import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-srv-cliente',
  templateUrl: './srv-cliente.component.html',
  styleUrls: ['./srv-cliente.component.scss']
})
export class SrvClienteComponent implements OnInit {

  activarMsg:boolean=false;
  formulario:FormGroup;
  constructor(public Form:FormBuilder) {
    this.formulario=Form.group({
      "nombre": ["", [Validators.required, Validators.maxLength(40)]],
      "telefono": ["", [Validators.required, Validators.maxLength(10)]],
      "email":["", [Validators.required, Validators.email]],
      "dirigido":["", Validators.required],
      "mensaje": ["", [Validators.required, Validators.maxLength(500)]]
    })
  }

  ngOnInit(): void {
  }

  validacion(){
    this.activarMsg=true;
  }
}
