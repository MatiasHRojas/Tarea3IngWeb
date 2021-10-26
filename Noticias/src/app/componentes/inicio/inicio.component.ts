import { Component, OnInit } from '@angular/core';
import { Noticias, Contenidos } from 'src/app/interfaces/noticias';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  destacadas:Array<Noticias>=new Array();
  normales:Array<Noticias>=new Array();

  constructor() {
    
  }

  ngOnInit(): void {
    for(let i:number=0; i<Contenidos.length; i++){
      if(Contenidos[i].destacado && this.destacadas.length < 3)
        this.destacadas.push(Contenidos[i]);
      else if(this.normales.length < 4)
        this.normales.push(Contenidos[i]);
    }
  }

}