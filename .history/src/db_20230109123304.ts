import Dexie, { Table } from 'dexie';

export interface Theme {
  id?: number;
  name: string;
}

export class MySubClassedDexie extends Dexie {
  themes!: Table<Theme>;

  tasks!: Table<Task>;

  constructor() {
    super('myDatabase');
    this.version(3).stores({
      themes: '++id',
      tasks: '++id',
    });
  }
}

export const db = new MySubClassedDexie();
