import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogo } from '../jogo.model';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-read-all',
  templateUrl: './jogo-read-all.component.html',
  styleUrls: ['./jogo-read-all.component.css']
})
export class JogoReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'jogos', 'acoes'];

  id_cat: String = '' 

  jogos: Jogo[] = []

  constructor(private service: JogoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.findAll();
  }

  findAll(): void{
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.jogos = resposta;
    })
  }

  navegarParaCriarJogo(){
    this.router.navigate([`categorias/${this.id_cat}/jogos/create`])
  }
 

}
