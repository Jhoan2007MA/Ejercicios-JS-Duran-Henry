
function decodeSpell(spell){
const values = {
    '☽': 1,
    '☾': 5,
    '♁': 10,
    '⚕': 50,
    '⚡': 100
};


let total = 0;
    
for (let i = 0; i < spell.length; i++) {
    let current = values[spell[i]];
    let next = values[spell[i + 1]];
    
    if (current === undefined) return NaN;

    if(next !== undefined && current < next) {
        total -= current;
    } else {
        total += current;
    }
    
}

return total;
}

const input = prompt("Introduce los simbolos magicos del codice:");
const result = decodeSpell(input);

if (isNaN(result)) {
    alert(" Conjuro corrupto: simbolo desconocido.");
} else {
    alert("El valor del conjuro es : " + result);
}