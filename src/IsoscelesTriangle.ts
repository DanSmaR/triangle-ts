import { Triangle } from './Triangle';

export class IsoscelesTriangle extends Triangle {
  constructor(equalSide: number, base: number) {
    super(equalSide, equalSide, base);
    this.calculateArea();
  }

  public calculateArea(): void {
    const height = Math.sqrt(this.side1 * this.side1 - (this.side3 * this.side3) / 4);
    this.area = (this.side3 * height) / 2;
  }

  public toString(): string {
    return `Isosceles Triangle: sides ${this.side1}, ${this.side2}, ${this.side3}, area: ${this.area.toFixed(2)}`;
  }
}