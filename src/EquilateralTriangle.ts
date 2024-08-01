import { Triangle } from './Triangle';

export class EquilateralTriangle extends Triangle {
  constructor(side: number) {
    super(side, side, side);
    this.calculateArea();
  }
  
  calculateArea(): void {
    this.area =  (Math.sqrt(3) / 4) * (this.side1 ** 2);
  }

  toString(): string {
    return `Equilateral Triangle: sides ${this.side1}, ${this.side2}, ${this.side3}, area: ${this.area.toFixed(2)}`;
  }
}