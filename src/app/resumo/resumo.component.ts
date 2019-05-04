import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumoService } from './resumo.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit, OnDestroy {

  resumo;
  inscricao;
  erro;

  constructor(private resumoService: ResumoService) {
  }

  ngOnInit() {
    this.inscricao = this.resumoService.getResumo()
      .subscribe(resposta => this.resumo = resposta, erro => this.erro = true);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
