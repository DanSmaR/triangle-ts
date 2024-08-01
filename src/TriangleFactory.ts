import { Triangle } from './Triangle';
import { EquilateralTriangle } from './EquilateralTriangle';
import { IsoscelesTriangle } from './IsoscelesTriangle';

export class TriangleFactory {
  static createTriangle(a: number, b: number, c: number): Triangle | undefined {
    if (!this.isValidTriangle(a, b, c)) {
      throw new Error('The sides do not form a valid triangle');
    }
    if (a === b && b === c) {
      return new EquilateralTriangle(a);
    } else if (a === b || a === c || b === c) {
      if (a === b) {
        return new IsoscelesTriangle(a, c);
      } else if (a === c) {
        return new IsoscelesTriangle(a, b);
      } else {
        return new IsoscelesTriangle(b, a);
      }
    }
  }

  private static isValidTriangle(a: number, b: number, c: number): boolean {
    return a + b > c && a + c > b && b + c > a;
  }
}