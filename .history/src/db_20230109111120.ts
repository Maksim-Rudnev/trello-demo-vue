import Dexie, { Table } from 'dexie';

export interface Theme {
  id?: number;
  name: string;
}

export interface Task {
  id?: number;
  text: string;
  priority: number;
  themeId: number;
}

export class MySubClassedDexie extends Dexie {
  themes!: Table<Theme>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      friends: '++id, name',
    });
  }
}

export const db = new MySubClassedDexie();
