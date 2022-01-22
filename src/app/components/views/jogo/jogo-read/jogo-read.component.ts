import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-read',
  templateUrl: './jogo-read.component.html',
  styleUrls: ['./jogo-read.component.css']
})
export class JogoReadComponent implements OnInit {

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

  cancel(){
    this.router.navigate([`categorias/${this.id_cat}/jogos`])
  }

}
