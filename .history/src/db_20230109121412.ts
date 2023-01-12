import Dexie, { Table } from 'dexie';

export interface Theme {
  id?: number;
  name: string;
}

export interface Task {
  id?: number;
  title: string;
  text: string;
  priority: number;
  themeId: number;
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
