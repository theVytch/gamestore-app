import { Jogo } from './../jogo.model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-create',
  templateUrl: './jogo-create.component.html',
  styleUrls: ['./jogo-create.component.css']
})
export class JogoCreateComponent implements OnInit {

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
  }

  create(): void {
    this.service.create(this.jogo, this.id_cat).subscribe(resposta => {
      this.router.navigate([`categorias/${this.id_cat}/jogos`])
      this.service.mensagem('Jogo criado com sucesso')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/jogos`])
      this.service.mensagem('Erro ao criar novo jogo')
    })
  }

 cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/jogos`])
  }
}
