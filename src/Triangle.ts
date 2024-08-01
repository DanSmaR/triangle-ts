import { Geometrical } from './GeometricalForm';

export abstract class Triangle extends Geometrical {
  protected side1: number;
  protected side2: number;
  protected side3: number;

  constructor(side1: number, side2: number, side3: number) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  public getSide1(): number {
    return this.side1;
  }

  public getSide2(): number {
    return this.side2;
  }

  public getSide3(): number {
    return this.side3;
  }

  public getArea(): number {
    return this.area;
  }

  abstract toString(): string;
}