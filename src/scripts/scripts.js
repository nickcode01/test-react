function divisores() { 
    let n1 = prompt("Escribe un número");
    let i;
    for (i=1;i < n1/1; i++) {
    if (n1 % i === 0) {
    document.write(i,", es el divisore de "+ n1 +  '<br>');
    console.log(i,", es el divisore de "+ n1 +  '<br>');    }
    }
}

function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
//    let txt = prompt("Escribe un texto");
//    palindrome(txt)


function convertirBinarioABase10(binario) {
    if (binario.constructor != String) {
        return null;
    }

    binario = binario.replace(/[^01]/gi, '');

    return Number.parseInt(binario, 2);
} 

// console.log(convertirBinarioABase10('1001'));  // 9
// console.log(convertirBinarioABase10('1111'));  // 15
// console.log(convertirBinarioABase10('10000'));  // 16
// console.log(convertirBinarioABase10('11111'));  // 31

// console.log();

// console.log(convertirBinarioABase10(1001));    // null


function esPrimo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;

    
}  


function lsprimos(n1){
for (let x=0;x<=n1;x++) {
    if (esPrimo(x))
        console.log("El número " + x + " es primo");
}
}

// let n1 = prompt("Escribe un número");
// lsprimos(n1)



const numeros = [3, 23, 12];

numeros.sort(
    function(a, b)
    {return a - b}
    );