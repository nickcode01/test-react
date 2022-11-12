import React from 'react'

const Palindrome = () => {

   
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
//    palindrome(txt)</p>
      

}

export default Palindrome;