/*Realice una función que reciba un arreglo de datos numéricos, y muestre la suma de todos los elementos del arreglo y su promedio*/
var arr = [1, 2, 4, 6, 7];

var funcion = x => {
  let sumA = 0;
  let promArr;

  x.forEach(element => {
    sumA += element;
  });
  promArr = sumA / x.length;

  console.log(sumA);
  console.log(promArr);
};
