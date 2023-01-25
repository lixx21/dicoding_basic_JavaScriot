// general function

function testing(name){
    console.log(name);
};

testing('Felix')

// function expression
const greetings = function(greet){
    console.log(greet);
};

greetings('Hello');

// arrow function 
// arrow function is an expression

const user = full_name => {
    console.log(full_name);
}

user('Felix Pratamasan')

/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */


// TODO
const minimal = function(a, b){
    if (a <= b) {
        return a
    }else{
        return b
    }
}

const power = function(a,b){
    return a**b
}


/**
 * Jangan hapus kode di bawah ini
 */

module.exports = { minimal, power };

// output: 2
function calculate(value) {
    // condition ? VALUE IS TRUE : VALUE IS FALSE
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));

