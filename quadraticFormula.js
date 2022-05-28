// The quadratic formula

const decimalCount = num => {
    const numStr = String(num);
    if (numStr.includes('.')) {
        return numStr.split('.')[1].length;
    };
    return 0;
 }




function computeCuadrantFormula(operator) {

  let firstPart = (-1 * b) / (2 * a);
  let secondPart = Math.sqrt(Math.abs((b * b) - (4 * a * c))) / (2 * a);

  if(decimalCount(firstPart) > 5)
      firstPart = firstPart.toFixed(5);

  if(decimalCount(secondPart) > 5)
      secondPart = secondPart.toFixed(5);
      
  x = `${firstPart} ${operator} ${secondPart}i`;

  return x;
}

let a, b, c;
let outputText;

const input_forms = document.forms["input_form"];

document.getElementById("clearBtn").onclick = function() {
  for(let i=0; i<input_forms.length; i++) 
    if(input_forms[i].hasAttribute("required"))
      input_forms[i].value = '';
}

function validate() {
  a = input_forms[0].value;
  b = input_forms[1].value;
  c = input_forms[2].value;

  console.log(input_forms.length)

  

  if(a == 0) {
    outputText = `<em>a</em> cannot equal zero!`;
  } else if(isNaN(a)) {
      outputText = `<em>a</em> must be a number`;
  }else if(isNaN(b)) {
      outputText = `<em>b</em> must be a number`;
  }else if(isNaN(c)) {
      outputText = `<em>c</em> must be a number`;
  } else {
      let x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
      let x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

    if(decimalCount(x1) > 5)
      x1 = x1.toFixed(5);

    if(decimalCount(x2) > 5)
      x2 = x2.toFixed(5);

    if(isNaN(x1))
      x1 = computeCuadrantFormula('+')

    if(isNaN(x2))
      x2 = computeCuadrantFormula('-')

      outputText = `${a == 1 ? "" : a}x<sup>2</sup> 
      ${b<0 ? "-" : b==0?"":"+"} ${b == 1 ? "x" : b==0?"":Math.abs(b)+"x"}
      ${c<0 ? "-" : "+"} ${Math.abs(c)}<br>
      x = ${x1} or x= ${x2}`;
  }

  document.getElementById("output_text").innerHTML = outputText;
}