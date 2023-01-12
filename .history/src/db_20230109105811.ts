import Dexie, { Table } from 'dexie';

export interface Theme {
  id?: number;
  name: string;
}

export interface Tas {
  id?: number;
  name: string;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  themes!: Table<Theme>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      friends: '++id, name', // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
