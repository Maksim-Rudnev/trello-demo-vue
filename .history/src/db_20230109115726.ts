import Dexie, { Table } from 'dexie';

export interface Theme {
  id?: number;
  name: string;
}

export interface Task {
  id?: number;
  title
  text: string;
  priority: number;
  themeId: number;
}

export class MySubClassedDexie extends Dexie {
  themes!: Table<Theme>;

  task!: Table<Task>;

  constructor() {
    super('myDatabase');
    this.version(2).stores({
      themes: '++id',
      task: '++id',
    });
  }
}

export const db = new MySubClassedDexie();
