import * as readline from  'readline';
import { TriangleFactory } from './TriangleFactory';
import { Triangle } from './Triangle';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the sides of the Triangle separated by commas: ', (input: string) => {
  const sides: number[] = input.split(',').map((side: string) => parseInt(side));
  try {
    const triangle: Triangle = TriangleFactory.createTriangle(sides[0], sides[1], sides[2]) as Triangle;
    if (triangle) {
      console.info(triangle.toString());
    }
  } catch (error) {
    console.error((error as Error).message);
  } finally {
    rl.close();
  }
});