// The squared quadratic

let invalidInput = false;

const decimalCount = num => {
    const numStr = String(num);
    if (numStr.includes('.')) {
        return numStr.split('.')[1].length;
    };
    return 0;
}

const inputs = document.querySelectorAll("input");

document.getElementById("clearBtn").onclick = function() {
    inputs.forEach(input => input.value = '');
}

document.getElementById("calculateBtn").onclick = function() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    const label = document.getElementById("label");

    function computeCuadrantFunction(operator) {

        let x = (-1*b +operator+ Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    
            // if there is an imaginary number in the result aka i
            if(isNaN(x)) {
                let firstPart = (-1 * b) / (2 * a);
                let secondPart = Math.sqrt(Math.abs((b * b) - (4 * a * c))) / (2 * a);
    
                if(decimalCount(firstPart) > 6)
                    firstPart = firstPart.toFixed(6);
    
                if(decimalCount(secondPart) > 6)
                    secondPart = secondPart.toFixed(6);
    
                if(isNaN(firstPart) || isNaN(secondPart) || !isFinite(firstPart) || !isFinite(secondPart))
                    invalidInput = true;
                    
                x = firstPart + operator + secondPart +"i";
            }
    
            else {
                if(decimalCount(x) > 6)
                    x = x.toFixed(6);
            }
    
        return x;
    }

    let x1 = computeCuadrantFunction('+');

    let x2 = computeCuadrantFunction('-');

    if(invalidInput)
        label.textContent = "Please enter positive or negative numbers";

    else if(x1 === x2)
        label.textContent = "X = " +x1;

    else
        label.textContent = "X = " +x1+ " or X = " +x2;
}