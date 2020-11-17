//MATH OPERATORS
var yearArjun,yearSagar,now,ageArjun,ageSagar;
now=2020;
ageArjun=19;
ageSagar=20;
yearArjun=now - ageArjun;
yearSagar=now-ageSagar;
console.log(yearArjun);
console.log(now*2);
console.log(now/10);
console.log(now+2);

//LOGICAL OPERATORS

var orderAge = ageSagar > ageArjun;
console.log(orderAge);

// typeof operator

console.log(typeof orderAge);
console.log(typeof ageArjun);
console.log(typeof 'Sagar is older than Arjun');
var x;
console.log(typeof x);

//operator precedence
var now = 2020;
var yearArjun = 2000;
var fullage = 18;

//multiple opertors
var isFullage = now - yearArjun >= fullage;
console.log(isFullage);

//grouping
var ageArjun = now - yearArjun;
var ageSagar = 20;
var avgAge = (ageArjun + ageSagar) / 2;
console.log(avgAge);

//Multiple assignments
var x, y;
x = y = (3 + 2) / 6 * 2;
console.log(x, y);

//more operators
x *= 2;//x=x*2
console.log(x);
x++;//x=x+1//x+=1
console.log(x);

//Ternary operator 

var firstName = 'Arjun';
var age = 19;

age >= 18 ? console.log(firstName + '  drinks beer') : console.log(firstName + ' drinks juice.');


var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Truthy and Falsy values and equality operators
//Falsy values: undefiened,empty string,null,0,'',NaN.
//truthy values: NOT falsy values.

var height;
height = 23;
if (height || height === 0) {
    console.log('variable is defined.');
}
else {
    console.log('variable is not defined.');
}

//Equality operators

 23=='23'
    true
 23==='23'
    false

if (height=='23')
console.log('The == operator does type coerction.');