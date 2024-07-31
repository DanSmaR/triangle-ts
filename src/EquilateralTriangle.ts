import { Triangle } from './Triangle';

export class EquilateralTriangle extends Triangle {
  constructor(side: number) {
    super(side, side, side);
    this.calculateArea();
  }
  
  calculateArea(): void {
    this.area =  (Math.sqrt(3) / 4) * (this.side1 ** 2);
  }
}