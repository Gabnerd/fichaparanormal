import Dexie, { Table } from 'dexie';

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
  tAcrobacia?: number;
  tAdestramento?: number;
  tArtes?: number;
  tAtletismo?: number;
  tAtualidade?: number;
  tCiencia?: number;
  tCrime?: number;
  tDiplomacia?: number;
  tEnganacao?: number;
  tFortitude?: number;
  tFurtividade?: number;
  tIniciativa?: number;
  tIntimidacao?: number;
  tIntuicao?: number;
  tInvestigacao?: number;
  tLuta?: number;
  tMedicina?: number;
  tOcultismo?: number;
  tPercepcao?: number;
  tPilotagem?: number;
  tPontaria?: number;
  tProfissao?: number;
  tReflexo?: number;
  tReligiao?: number;
  tSobrevivencia?: number;
  tTatica?: number;
  tTecnologia?: number;
  tVontade?: number
}

export class AppDB extends Dexie {
  fichas!: Table<Ficha, number>;

  constructor() {
    super('fichaparanormal');
    this.version(3).stores({
      fichas: "++id"
    });
    this.on('populate', () => this.populate());
  }

  async populate() {

  }
}

export const db = new AppDB();