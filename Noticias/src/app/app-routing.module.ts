import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { SrvClienteComponent } from './componentes/srv-cliente/srv-cliente.component';
import { NoticiaContentComponent } from './componentes/noticia-content/noticia-content.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"noticias", component:NoticiasComponent},
  {path:"servicio-al-cliente", component:SrvClienteComponent},
  {path:"detalleNoticia/:id",component:NoticiaContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
