import { Triangle } from './Triangle';
import { EquilateralTriangle } from './EquilateralTriangle';

export class TriangleFactory {
  static createTriangle(a: number, b: number, c: number): Triangle | undefined {
    if (!this.isValidTriangle(a, b, c)) {
      throw new Error('The sides do not form a valid triangle');
    }
   if (a === b && b === c) {
      return new EquilateralTriangle(a);
    }
  }

  private static isValidTriangle(a: number, b: number, c: number): boolean {
    return a + b > c && a + c > b && b + c > a;
  }
}