function fatorial(n) {
  const numero  = Number(n)
  if(typeof numero!== 'number' || !Number.isInteger(numero)){
    throw new TypeError('O argumento deve ser um número válido');
  }
  if(numero < 0){
    throw new Error ('Não existe fatorial de número negativo');
  }
  if( numero === 0 || numero === 1){
    return 1;
  }
    
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
  }
  
  function fibonacci(n) {
   
    const numero = Number(n);

    if (isNaN(numero)) {
      throw new TypeError("O argumento deve ser um número válido");
    }
    if (numero <= 0) {
      throw new Error("Não existe Fibonacci de número menor ou igual a zero");
    }
    let a = 0, b = 1;
    for (let i = 2; i <= numero; i++) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  }
  
  function ehPrimo(n) {
   
    const numero = Number(n);
  
    if (isNaN(numero)) {
      throw new TypeError("O argumento deve ser um número válido");
    }
    if (numero <= 1) {
      throw new Error("Não existe número primo de número menor ou igual a 1");
    }
    if (numero <= 3) {
      return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false;
    }

    let i = 5;
    while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  
  module.exports = {
    fatorial,
    fibonacci,
    ehPrimo
  };

