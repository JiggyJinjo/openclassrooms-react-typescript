export interface ISort {
  column: string;
  direction: string;
}

export default class Sort implements ISort {
  constructor(public column: string, public direction: string) {}
}
