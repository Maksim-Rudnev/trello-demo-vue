import { ITask } from './ITask';
import { ITheme } from './ITheme';

export interface IBoardState {
  tasks: ITask[],
  themes: ITheme[],
  colors: string[],
  resetForm: boolean,
  visibleEditDialog: boolean,
  selectedTask: number,
  closeAllPanel: boolean,
}
