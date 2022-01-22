import { JogoUpdateComponent } from './components/views/jogo/jogo-update/jogo-update.component';
import { JogoCreateComponent } from './components/views/jogo/jogo-create/jogo-create.component';
import { JogoReadAllComponent } from './components/views/jogo/jogo-read-all/jogo-read-all.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoDeleteComponent } from './components/views/jogo/jogo-delete/jogo-delete.component';
import { JogoReadComponent } from './components/views/jogo/jogo-read/jogo-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  },
  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path: 'categorias/:id_cat/jogos',
    component: JogoReadAllComponent
  },
  {
    path: 'categorias/:id_cat/jogos/create',
    component: JogoCreateComponent
  },
  {
    path: 'categorias/:id_cat/jogos/:id/update',
    component: JogoUpdateComponent
  },
  {
    path: 'categorias/:id_cat/jogos/:id/delete',
    component: JogoDeleteComponent
  },
  {
    path: 'categorias/:id_cat/jogos/:id/read',
    component: JogoReadComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
