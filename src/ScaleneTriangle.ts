import { Triangle } from './Triangle';

export class ScaleneTriangle extends Triangle {
  constructor(side1: number, side2: number, side3: number) {
    super(side1, side2, side3);
    this.calculateArea();
  }

  protected calculateArea(): void {
    const s = (this.side1 + this.side2 + this.side3) / 2;
    this.area = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
  }
  
  toString(): string {
    return `Scalene Triangle: sides ${this.side1}, ${this.side2}, ${this.side3}, area: ${this.area.toFixed(2)}`;
  }
  
}