import { Component } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, Ficha, Habilidade, origemHabilidade, treinamento } from '../db/db';
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

  tituloHabilidade: string = "";
  origemSHabilidade: origemHabilidade = origemHabilidade.classe;
  descricaoHabilidade: string = "";

  nomeArma: string = "";
  danoArma: string = "";
  criticoArma: number = 0;
  multiplicadorCriticoArma: number = 0;
  modificadorArma: string = "";

  ficha: Ficha = { nome: "" };
  habilidades: Habilidade[] = [];

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
  sanidade: number = 0;
  sanidadeAtual: number = 0;
  defesa: number = 0;

  tAcrobacia: treinamento = treinamento.leigo;
  tAdestramento: treinamento = treinamento.leigo;
  tArtes: treinamento = treinamento.leigo;
  tAtletismo: treinamento = treinamento.leigo;
  tAtualidade: treinamento = treinamento.leigo;
  tCiencia: treinamento = treinamento.leigo;
  tCrime: treinamento = treinamento.leigo;
  tDiplomacia: treinamento = treinamento.leigo;
  tEnganacao: treinamento = treinamento.leigo;
  tFortitude: treinamento = treinamento.leigo;
  tFurtividade: treinamento = treinamento.leigo;
  tIniciativa: treinamento = treinamento.leigo;
  tIntimidacao: treinamento = treinamento.leigo;
  tIntuicao: treinamento = treinamento.leigo;
  tInvestigacao: treinamento = treinamento.leigo;
  tLuta: treinamento = treinamento.leigo;
  tMedicina: treinamento = treinamento.leigo;
  tOcultismo: treinamento = treinamento.leigo;
  tPercepcao: treinamento = treinamento.leigo;
  tPilotagem: treinamento = treinamento.leigo;
  tPontaria: treinamento = treinamento.leigo;
  tProfissao: treinamento = treinamento.leigo;
  tReflexo: treinamento = treinamento.leigo;
  tReligiao: treinamento = treinamento.leigo;
  tSobrevivencia: treinamento = treinamento.leigo;
  tTatica: treinamento = treinamento.leigo;
  tTecnologia: treinamento = treinamento.leigo;
  tVontade: treinamento = treinamento.leigo




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
    this.sanidade = ficha?.sanidade || 0;
    this.sanidadeAtual = ficha?.sanidadeAtual || 0;
    this.defesa = ficha?.defesa || 0;

    this.tAcrobacia = ficha?.tAcrobacia || 0;
    this.tAdestramento = ficha?.tAdestramento || 0;
    this.tArtes = ficha?.tArtes || 0;
    this.tAtletismo = ficha?.tAtletismo || 0;
    this.tAtualidade = ficha?.tAtualidade || 0;
    this.tCiencia = ficha?.tCiencia || 0;
    this.tCrime = ficha?.tCrime || 0;
    this.tDiplomacia = ficha?.tDiplomacia || 0;
    this.tEnganacao = ficha?.tEnganacao || 0;
    this.tFortitude = ficha?.tFortitude || 0;
    this.tFurtividade = ficha?.tFurtividade || 0;
    this.tIniciativa = ficha?.tIniciativa || 0;
    this.tIntimidacao = ficha?.tIntimidacao || 0;
    this.tInvestigacao = ficha?.tInvestigacao || 0;
    this.tLuta = ficha?.tLuta || 0;
    this.tMedicina = ficha?.tMedicina || 0;
    this.tOcultismo = ficha?.tOcultismo || 0;
    this.tPercepcao = ficha?.tPercepcao || 0;
    this.tPilotagem = ficha?.tPilotagem || 0;
    this.tPontaria = ficha?.tPontaria || 0;
    this.tProfissao = ficha?.tProfissao || 0;
    this.tReflexo = ficha?.tProfissao || 0;
    this.tReligiao = ficha?.tReligiao || 0;
    this.tSobrevivencia = ficha?.tSobrevivencia || 0;
    this.tTatica = ficha?.tTatica || 0;
    this.tTecnologia = ficha?.tTecnologia || 0;
    this.tVontade = ficha?.tVontade || 0;

  });

  habilidadesObserv = liveQuery(()=>this.loadHabilidades())
  armasObserv = liveQuery(()=>this.loadArmas())

  async loadFicha() {
    return db.fichas.get(Number.parseInt((this.route.snapshot.paramMap.get("id") || "").toString()));
  }

  async loadHabilidades(){
    return db.habilidades.where({idFicha: Number.parseInt((this.route.snapshot.paramMap.get("id") || "").toString())}).toArray();
  }

  async loadArmas(){
    return db.armas.where({idFicha: Number.parseInt((this.route.snapshot.paramMap.get("id") || "").toString())}).toArray();
  }

  async saveFicha() {
    db.fichas.update(Number.parseInt((this.route.snapshot.paramMap.get("id") || "").toString()),
      {
        classe: this.classe,
        agilidade: this.agilidade,
        forca: this.forca,
        presenca: this.presenca,
        vigor: this.vigor,
        intelecto: this.intelecto,
        pv: this.pv,
        pvAtual: this.pvAtual,
        pe: this.pe,
        peAtual: this.peAtual,
        sanidade: this.sanidade,
        sanidadeAtual: this.sanidadeAtual,
        defesa: this.defesa,
        tAcrobacia: this.tAcrobacia,
        tAdestramento: this.tAdestramento,
        tArtes: this.tArtes,
        tAtletismo: this.tAtletismo,
        tAtualidade: this.tAtualidade,
        tCiencia: this.tCiencia,
        tCrime: this.tCrime,
        tDiplomacia: this.tDiplomacia,
        tEnganacao: this.tEnganacao,
        tFortitude: this.tFortitude,
        tFurtividade: this.tFurtividade,
        tIniciativa: this.tIniciativa,
        tIntimidacao: this.tIntimidacao,
        tIntuicao: this.tIntuicao,
        tInvestigacao: this.tInvestigacao,
        tLuta: this.tLuta,
        tMedicina: this.tMedicina,
        tOcultismo: this.tOcultismo,
        tPercepcao: this.tPercepcao,
        tPilotagem: this.tPilotagem,
        tPontaria: this.tPontaria,
        tProfissao: this.tProfissao,
        tReflexo: this.tReflexo,
        tReligiao: this.tReligiao,
        tSobrevivencia: this.tSobrevivencia,
        tTatica: this.tTatica,
        tTecnologia: this.tTecnologia,
        tVontade: this.tVontade
      });
  }

  async saveHabilidade(){
    await db.habilidades.add({
      idFicha: Number.parseInt((this.route.snapshot.paramMap.get("id") || "").toString()),
      origem: this.origemSHabilidade,
      titulo: this.tituloHabilidade,
      descricao: this.descricaoHabilidade
    });
    this.tituloHabilidade = "";
    this.origemSHabilidade = origemHabilidade.classe;
    this.descricaoHabilidade = "";
  }

  async saveArma(){
    await db.armas.add({
      idFicha: Number.parseInt((this.route.snapshot.paramMap.get("id") || "").toString()),
      nome: this.nomeArma,
      dano: this.danoArma,
      critico: this.criticoArma,
      modificador: this.modificadorArma,
      multiplicadorCritico: this.multiplicadorCriticoArma
    });
    this.nomeArma = "";
    this.danoArma = "";
    this.criticoArma = 0;
    this.modificadorArma = "";
    this.multiplicadorCriticoArma = 0;
  }

  async deleteHabilidade(id: number | undefined){
    await db.habilidades.delete(Number.parseInt((id || "").toString()));
  }

  async deleteArma(id: number | undefined){
    await db.armas.delete(Number.parseInt((id || "").toString()));
  }
}
