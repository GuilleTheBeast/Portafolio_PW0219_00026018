function Fibo(num) {
    var one = 0;
    var two = 1;
    var tree;
  
    console.log(one + "");
    console.log(two + "");
  
    for (var i = 3; i <= num; i++) {
      tree = one + two;
      one = two;
      two = tree;
      console.log(tree + "");
    }
  }
  
  Fibo(8);