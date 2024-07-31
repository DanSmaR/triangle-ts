export abstract class Geometrical {
  protected area: number;

  constructor() {
    this.area = 0;
  }
  
  protected abstract calculateArea(): void;
}