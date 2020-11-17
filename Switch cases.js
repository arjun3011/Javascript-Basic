//Switch statement
var job = 'instructor';
switch(job){
    case'teacher':
    case 'instructor':
        console.log(firstName +' teachs how to code.');
        break;
    case'driver':
        console.log(firstName + ' drives an uber');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful website.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

// example :-
var firstName = 'Arjun';
var age = 19;
var category = age < 13 ? firstName + ' ' + ' is a kid.' : firstName + ' ' + 'is a man.';
console.log(category);

// example 2:-
var firstName = 'Arjun';
var age = 29;
switch (true) {
    case age < 13:
        console.log('he is a boy.');
        break;
    case 13 < age && age < 20:
        console.log('he is a teenager.');
        break;
    case 20 <= age && age < 30:
        console.log('he is a young man.');
        break;
    default:
        console.log('he is a man.');


}