/**
 * n! (nの階乗)を計算する
 * @param n 求めたいn
 */
export function calcFactorial(n: number): number {
  let result: number = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}