import { Component } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, Ficha } from '../db/db';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ficha-detail',
  templateUrl: './ficha-detail.component.html',
  styleUrls: ['./ficha-detail.component.scss']
})
export class FichaDetailComponent {
  constructor(
    private route: ActivatedRoute
  ) { }

  ficha: Ficha = { nome: "" };

  classe: string = "";
  agilidade: number = 0;
  forca: number = 0;
  presenca: number = 0;
  vigor: number = 0;
  intelecto: number = 0;
  
  pv: number = 0;
  pvAtual: number = 0;
  pe: number = 0;
  peAtual: number = 0;


  fichaObserv = liveQuery(() => this.loadFicha()).subscribe((ficha) => {
     this.ficha = (ficha || { nome: "" })
     this.classe = ficha?.classe || "";
     this.agilidade = ficha?.agilidade || 0;
     this.forca = ficha?.forca || 0;
     this.presenca = ficha?.presenca || 0;
     this.vigor = ficha?.vigor || 0;
     this.intelecto = ficha?.intelecto || 0;

     this.pv = ficha?.pv || 0;
     this.pvAtual = ficha?.pvAtual || 0;
     this.pe = ficha?.pe || 0;
     this.peAtual = ficha?.peAtual || 0;
     
     })

  async loadFicha() {
    return db.fichas.get(Number.parseInt((this.route.snapshot.paramMap.get("id") || "").toString()));
  }

  async saveFicha() {
    db.fichas.update(Number.parseInt((this.route.snapshot.paramMap.get("id") || "").toString()), { classe: this.classe, agilidade: this.agilidade, forca: this.forca, presenca: this.presenca, vigor: this.vigor, intelecto: this.intelecto, pv: this.pv, pvAtual: this.pvAtual, pe: this.pe, peAtual: this.peAtual });
  }
}
