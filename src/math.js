function fatorial(n) {
  if(typeof n === 'string'){
    n = n-0;
}
if(isNaN(n) || typeof n !=='number') {
    throw new TypeError("O argumento deve ser um número válido");

}
  if (n < 0) {
    throw new Error('Não existe fatorial de número negativo');
  }
  if (n === 0) {
    return 1;
  }
  
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function fibonnacci(n) {
  if(typeof n === 'string'){
    n = n-0;
}
if(isNaN(n) || typeof n !=='number') {
    throw new TypeError("O argumento deve ser um número válido");

}
  if (n <= 0) {
    throw new Error('Não existe fibonnacci de número menor ou igual a zero');
  }

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function ehPrimo(n) {
  if(typeof n === 'string'){
    n = n-0;
}
if(isNaN(n) || typeof n !=='number') {
    throw new TypeError("O argumento deve ser um número válido");

}
  if (n <= 1) {
    throw new Error('Não número primo de número menor ou igual a 1');
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  fatorial,
  fibonnacci,
  ehPrimo
}
