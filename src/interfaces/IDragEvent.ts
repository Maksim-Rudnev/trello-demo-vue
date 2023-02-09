export interface IDragEvent {
  added?: {
    element: { id: string };
    newIndex: number;
  };
}
