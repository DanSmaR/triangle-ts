import { Triangle } from '../src/Triangle';
import { TriangleFactory } from '../src/TriangleFactory';

describe('Triangle Area Calculations', () => {
  it('should return the area of a equilateral triangle', () => {
    const triangle: Triangle = TriangleFactory.createTriangle(10, 10, 10) as Triangle;
    expect(triangle.getArea()).toBeCloseTo(43.30, 2)
  });

  it('should print the triangle type, sides and the area', () => {
    const triangle: Triangle = TriangleFactory.createTriangle(10, 10, 10) as Triangle;
    expect(triangle.toString()).toBe('Equilateral Triangle: sides 10, 10, 10, area 43.30');
  });

  it('should throw a error message in case of invalid sides', () => {
    expect(() => {
      TriangleFactory.createTriangle(1, 2, 3);
    }).toThrow('The sides do not form a valid triangle');
  });
});