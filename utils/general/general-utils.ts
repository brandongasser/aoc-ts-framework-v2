/**
 * Sums a list of numbers.
 * @param nums List of numbers to sum.
 * @returns Sum of the list of numbers.
 */
export function sum(nums: number[]): number {
  return nums.reduce((acc, x) => x + acc, 0);
}

/**
 * Finds the product of a list of numbers.
 * @param nums List of numbers to find the product of.
 * @returns Product of the list of numbers.
 */
export function product(nums: number[]): number {
  return nums.reduce((acc, x) => x * acc, 1);
}

/**
 * Swaps the rows and columns of a two-dimensional list.
 * 
 * [ [ 1, 2 ], [ 3, 4 ] ] => [ [ 1, 3 ], [ 2, 4 ] ]
 * @param xss Two-dimensional list to transpose.
 * @returns Transposition of the two-dimensional list.
 */
export function transpose<T>(xss: T[][]): T[][] {
  if (!xss.length) {
    return [];
  }
  const result: T[][] = [];
  for (let i = 0; i < xss[0].length; i++) {
    const row: T[] = [];
    for (let x = 0; x < xss.length; x++) {
      row.push(xss[x][i]);
    }
    result.push(row);
  }
  return result;
}

/**
 * Combines the two lists into one list of tuples containing paired values from the two lists.
 * 
 * If the lengths of the lists don't match, the result will have the same length as the shorter list.
 * @param xs First list.
 * @param ys Second list.
 * @returns List of pairs of values from xs and ys.
 */
export function zip<A, B>(xs: A[], ys: B[]): [A, B][] {
  const result: [A, B][] = [];
  for (let i = 0; i < xs.length && i < ys.length; i++) {
    result.push([xs[i], ys[i]]);
  }
  return result;
}

/**
 * Combines the two lists into one list by pairing values from the two lists and applying the function.
 * 
 * If the lengths of the lists don't match, the result will have the same length as the shorter list.
 * @param xs First list.
 * @param ys Second list.
 * @param f Function to zip with.
 * @returns List of function results.
 */
export function zipWith<A, B, C>(xs: A[], ys: B[], f: (a: A, b: B) => C): C[] {
  const result: C[] = [];
  for (let i = 0; i < xs.length && i < ys.length; i++) {
    result.push(f(xs[i], ys[i]));
  }
  return result;
}

/**
 * Counts the number of times a predicate is true for the elements of a list.
 * @param xs List to test on.
 * @param predicate Predicate to test.
 * @returns Number of times predicate returns true for the elements of xs.
 */
export function count<T>(xs: T[], predicate: (x: T) => boolean): number {
  return xs.filter(predicate).length;
}

/**
 * Accumulates a list into a single value. This function works similarly to the reduce function for lists, but can reduce to a different type.
 * @param xs List to fold (reduce).
 * @param f Reducer function.
 * @param initialValue Value to start with.
 * @returns Value if xs is empty, otherwise the result of the reduction.
 */
export function fold<A, B>(xs: A[], f: (acc: B, elem: A) => B, initialValue: B): B {
  let acc = initialValue;
  for (const x of xs) {
    acc = f(acc, x);
  }
  return acc;
}

/**
 * Removes duplicates from a list.
 * @param xs List to remove duplicates from.
 * @returns List with duplicates removed.
 */
export function distinct<A>(xs: A[]): A[] {
  return [...new Set(xs)];
}

/**
 * Returns the greatest common denominator of two numbers.
 * @param x First number.
 * @param y Second number.
 * @returns Greatest common denominator between x and y.
 */
export function gcd(x: number, y: number): number {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}