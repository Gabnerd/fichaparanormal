import Dexie, { Table } from 'dexie';

export enum treinamento{
  leigo = 0,
  treinado = 1,
  experto = 2
}

export enum origemHabilidade{
  classe = 0,
  origem = 1,
  outros = 2
}

export interface Ficha {
  id?: number;
  nome: string;
  agilidade?: number;
  forca?: number;
  presenca?: number;
  vigor?: number;
  intelecto?: number;
  origem?: string;
  classe?: string;
  nex?: number;
  pv?: number;
  pvAtual?: number;
  pe?: number;
  peAtual?: number;
  defesa?: number;
  sanidade?: number;
  sanidadeAtual?: number;
  tAcrobacia?: treinamento;
  tAdestramento?: treinamento;
  tArtes?: treinamento;
  tAtletismo?: treinamento;
  tAtualidade?: treinamento;
  tCiencia?: treinamento;
  tCrime?: treinamento;
  tDiplomacia?: treinamento;
  tEnganacao?: treinamento;
  tFortitude?: treinamento;
  tFurtividade?: treinamento;
  tIniciativa?: treinamento;
  tIntimidacao?: treinamento;
  tIntuicao?: treinamento;
  tInvestigacao?: treinamento;
  tLuta?: treinamento;
  tMedicina?: treinamento;
  tOcultismo?: treinamento;
  tPercepcao?: treinamento;
  tPilotagem?: treinamento;
  tPontaria?: treinamento;
  tProfissao?: treinamento;
  tReflexo?: treinamento;
  tReligiao?: treinamento;
  tSobrevivencia?: treinamento;
  tTatica?: treinamento;
  tTecnologia?: treinamento;
  tVontade?: treinamento
}

export interface Habilidade{
  id?: number;
  idFicha: number;
  origem: origemHabilidade;
  titulo: string;
  descricao: string;
}

export class AppDB extends Dexie {
  fichas!: Table<Ficha, number>;
  habilidades!: Table<Habilidade, number>;

  constructor() {
    super('fichaparanormal');
    this.version(3).stores({
      fichas: "++id",
      habilidades: "++id, idFicha"
    });
    this.on('populate', () => this.populate());
  }

  async populate() {

  }
}

export const db = new AppDB();