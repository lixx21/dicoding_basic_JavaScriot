function shirt(color, size, brand){
    this.color = color;
    this.size = size;
    this.brand = brand;
}

shirt.prototype.setColor = function(){
    console.log(`Color: ${this.color}`)
}

const adidas = new shirt('black', 'xl', 'adidas');

// console.log(adidas)

// adidas.setColor();

/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// TODO 

class Animal{
    constructor(name, age, isMamal){
        this.name = name;
        this.age = age;
        this.isMamal = isMamal;
    }

}

class Rabbit extends Animal{

    constructor(name, age, isMamal = true){
        super(name, age, isMamal);
    }
    
    eat(){
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal{
    constructor(name, age, isMamal = false){
        super(name, age, isMamal);
    }

    fly(){
        return `${this.name} sedang terbang!`
    }

}

// create instances
const myRabbit = new Rabbit("labi", 2);
const myEagle  = new Eagle("Elo", 4);
console.log(myRabbit.eat());
console.log(myEagle.fly());
console.log(myRabbit);
console.log(myEagle);


/**
 * Jangan hapus kode di bawah ini
 */

module.exports = {
    Animal, Rabbit, Eagle, myRabbit, myEagle,
  };
