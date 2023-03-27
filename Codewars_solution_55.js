// Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.
// To judge the number n. If n is one of the above five constants, return one of these string:
// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

const whatNumberIsIt = (n) =>
  n == Number.MAX_VALUE
    ? "Input number is Number.MAX_VALUE"
    : n == Number.MIN_VALUE
    ? "Input number is Number.MIN_VALUE"
    : isNaN(n)
    ? "Input number is Number.NaN"
    : n == Number.NEGATIVE_INFINITY
    ? "Input number is Number.NEGATIVE_INFINITY"
    : n == Number.POSITIVE_INFINITY
    ? "Input number is Number.POSITIVE_INFINITY"
    : `Input number is ${n}`;