export function calculatePoints(transaction = []) {
    return transaction.reduce((acc, curr) => {
      if (curr > 100) {
        acc += (curr - 100) * 2;
        acc += curr - 50;
      }
      return acc;
    }, 0);
  }
  