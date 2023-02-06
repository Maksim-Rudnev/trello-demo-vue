export interface ITask {
  id?: number;
  owner: string;
  text: string;
  priority: number;
  themeId: number;
  index?: number;
}
