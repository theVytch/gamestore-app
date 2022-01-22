import { JogoService } from './../jogo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogo } from '../jogo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jogo-delete',
  templateUrl: './jogo-delete.component.html',
  styleUrls: ['./jogo-delete.component.css']
})
export class JogoDeleteComponent implements OnInit {

  id_cat: String = ''

  jogo: Jogo = {
    id: '',
    titulo: '',
    nome_empresa: '',
    descricao: ''
  }

  constructor(private service: JogoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.jogo.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.jogo.id!).subscribe((resposta) => {
      this.jogo = resposta
    })
  }

  delete(): void {
    this.service.delete(this.jogo.id!).subscribe(() => {
      this.router.navigate([`categorias/${this.id_cat}/jogos`]);
      this.service.mensagem('Jogo deletado com sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/jogos`]);
      this.service.mensagem('Falha ao deletar jogo!')
    })
  }

  cancel(){
    this.router.navigate([`categorias/${this.id_cat}/jogos`])
  }
}
