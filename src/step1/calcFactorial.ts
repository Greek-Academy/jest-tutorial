/**
 * n! (nの階乗)を計算する
 * @param n 求めたいn
 */
export function calcFactorial(n: number): number {
  if ((n < 1) || !isInteger(n)) {
    throw new InvalidArgumentError("nは自然数を指定してください");
  }
  let result: number = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
function isInteger(n: number): boolean {
  return n % 1 === 0;
}

export class InvalidArgumentError extends Error {}