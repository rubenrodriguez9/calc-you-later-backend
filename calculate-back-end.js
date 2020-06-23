/******************
 * YOUR CODE HERE *
 ******************/

function calculate(x, y, z){
  x = Number(x);
  y = Number(y);
  if(z === '+' || z === 'plus' || z === 'added to'){
    return x + y
  }else if(z === '-' || z === 'minus' || z === 'subtracted from'){
    return x - y
  }else if(z === 'x' || z === 'X' || z === 'times' || z === 'multiplied by'){
    return y * x
  }else if(z === "divided by" || z === '/'){
    return x / y
  }else if(z === '%' || z === 'mod' || z === 'modulus'){
    return x % y
  }else return 'Sorry, that\'s not a mathematical operation!'
}
 

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;