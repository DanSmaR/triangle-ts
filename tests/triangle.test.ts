import { Triangle } from '../src/Triangle';
import { TriangleFactory } from '../src/TriangleFactory';

describe('Triangle Area Calculations', () => {
  it('should return the area of a equilateral triangle', () => {
    const triangle: Triangle = TriangleFactory.createTriangle(10, 10, 10) as Triangle;
    expect(triangle.getArea()).toBeCloseTo(43.30, 2)
  });
});