for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;  // Salta a la siguiente iteración si i es par
    }
    console.log(i);
  }
  // Output: 1, 3, 5, 7, 9
  

  let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue;  // Salta a la siguiente iteración si i es par
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9
