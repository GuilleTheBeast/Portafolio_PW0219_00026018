function circulo() {
  let f = window.prompt("Ingrese radio");
  if (f <= 0) {
    return -1;
  } else {
    let x = Math.PI * f * f;
    return x;
  }
}
