if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
}
else {
    console.log(firstName + 'is still single :(');
}
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married.');
}
else {
    console.log(firstName + 'is still single :(');
}

//Boolean logic
var firstName = 'Arjun';
var age = 20;

if (age < 13) {
    console.log('he is a boy');
} else if (13 < age && age < 20) 
{                                   // AND(&&) true if ALL r true 
                                     //OR(||) true if ONE is true
                                    //NOT(!) INVERTS true/false values ex:-if (!(age<13)).
    console.log('he is a teenager');
}
else if (20 < age && age < 30) {
    console.log('He is young man');
}
else {
    console.log('he is a man');
}

//Ternary operator 

var firstName = 'Arjun';
var age = 19;

age >= 18 ? console.log(firstName + '  drinks beer') : console.log(firstName + ' drinks juice.');


var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
