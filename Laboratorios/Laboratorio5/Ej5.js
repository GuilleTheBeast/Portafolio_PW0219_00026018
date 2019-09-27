function palindrome(word) {
  var loes = true;
  var original = word.split("");
  var invertido = word.split("").reverse();
  for (var i = 0; i < original.length; i++) {
    if (invertido[i] != original[i]) {
      console.log("no es palindrome");
      loes = false;
      break;
    }
  }
  if (loes == true) {
    console.log("es palindrome");
  }
}
palindrome(uva);
