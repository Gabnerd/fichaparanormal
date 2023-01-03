import Dexie, { Table } from 'dexie';

export interface Ficha{
    id?: number;
    nome: string;
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