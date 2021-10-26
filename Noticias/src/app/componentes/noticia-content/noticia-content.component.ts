import { Component, OnInit } from '@angular/core';
import { Noticias, Contenidos } from 'src/app/interfaces/noticias';
import { Categorias, ListaCategorias } from 'src/app/interfaces/categorias';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-noticia-content',
  templateUrl: './noticia-content.component.html',
  styleUrls: ['./noticia-content.component.scss']
})

export class NoticiaContentComponent implements OnInit {
  
  ListaNoticias=Contenidos;
  id:number=0;
  Noticia:any;
  Categoria:any;
  c:string="";

  constructor(private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
    })
  }
  
  ngOnInit(): void {
    
    this.Noticia=this.ListaNoticias.find(objeto=>objeto.id==this.id)
    this.Categoria=ListaCategorias.find(objeto=>objeto.id==this.Noticia.idCategoria)
    this.c=this.Categoria.color
  }

}
