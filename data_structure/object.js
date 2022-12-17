const user = {
    firstName : 'Felix',
    lastName : 'Pratamasan',
    age : 21,
};

// output = {firstName: 'Felix', lastName: 'Pratamasan', age: 21}
console.log(user);

// output = my name is Felix Pratamasan and I am undefined years old
const firstName = user.firstName;
const lastName = user.lastName;
const age = user.age;

console.log(`\nmy name is ${firstName} ${lastName} and I am ${age} years old`);

//change age in object
// output = {firstName: 'Felix', lastName: 'Pratamasan', age: 17}
user.age = 17;
console.log(`\nuser object after changing age value: `, user);

// add new key and value in object
// output = {firstName: 'Felix', lastName: 'Pratamasan', age: 17, height: 180}
user.height = 180;
console.log('\nuser object after add height key and value ', user);

// delete key from object
delete user.height;
console.log('\nuser object after delete height key value ', user);

// iterate through object
console.log('\n');
for(const[key, value] of Object.entries(user)){
    console.log(key, value);
};

