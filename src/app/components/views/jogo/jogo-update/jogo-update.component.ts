import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-update',
  templateUrl: './jogo-update.component.html',
  styleUrls: ['./jogo-update.component.css']
})
export class JogoUpdateComponent implements OnInit {

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

  findById(): void{
    this.service.findById(this.jogo.id!).subscribe((resposta) => {
      this.jogo = resposta
    })
  }

  update(): void{
    this.service.update(this.jogo).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/jogos`]);
      this.service.mensagem('Jogo atualizado com sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/jogos`]);
      this.service.mensagem('Falha ao atualizar o jogo!')
    })
  }

  cancel(){
    this.router.navigate([`categorias/${this.id_cat}/jogos`])
  }
}
