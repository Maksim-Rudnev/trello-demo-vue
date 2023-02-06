import Dexie, { Table } from 'dexie';
import { ITask } from './models/ITask';
import { ITheme } from './models/ITheme';

export class MySubClassedDexie extends Dexie {
  themes!: Table<ITheme>;

  tasks!: Table<ITask>;

  constructor() {
    super('myDatabase');
    this.version(3).stores({
      themes: '++id',
      tasks: '++id, themeId',
    });
  }
}

export const db = new MySubClassedDexie();
