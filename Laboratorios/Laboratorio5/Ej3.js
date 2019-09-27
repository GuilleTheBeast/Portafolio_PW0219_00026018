function count(num, x) {
  var contador = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] == num) contador++;
  }

  return contador;
}

a = [7, 8, 7, 10, 12, 7, 19];
count(7, a);
