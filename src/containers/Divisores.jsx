import React from 'react';


const Divisores = () => {
    let n1 = prompt("Escribe un número");
    let i;
    for (i=1;i < n1/1; i++) {
    if (n1 % i === 0) {
 let  res = document.write(i,", es el divisore de "+ n1 +  '<br>');
    console.log(i,", es el divisore de "+ n1 +  '<br>');    }
    }
return  (
    <div> {res}</div>
)

}

export default Divisores;