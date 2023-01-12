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
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  themes!: Table<Theme>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      friends: '++id, name',
    });
  }
}

export const db = new MySubClassedDexie();
