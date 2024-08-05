for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;  // Sale del bucle cuando i es igual a 5
    }
    if (i % 2 === 0) {
      continue;  // Salta a la siguiente iteración si i es par
    }
    console.log(i);
  }
  // Output: 1, 3
  