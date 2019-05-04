import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy {

  faturamento;
  faturamentoIncricao;

  constructor(private faturamentoService: FaturamentoService) { }

  ngOnInit() {
    this.faturamentoIncricao = this.faturamentoService.getFaturamento().subscribe(retorno => this.faturamento = retorno)
  }

  ngOnDestroy() {
    this.faturamentoIncricao.unsubscribe();
  }

}
