//Function


function calculateAge(birthYear) {
    return 2020 - birthYear;
}
var ageArjun = calculateAge(2000);
console.log(ageArjun);


function yearUntillRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' year.');

}

yearUntillRetirement(1999, 'Arjun');


//Function statement and Expression

// Function expression
var whatDoUDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kidz how to code';
        case 'driver':
            return firstName + 'drives a cab.';
        default:
            return 'does something else';
    }

}

console.log(whatDoUDo('teacher', "arjun"));

function yearUntillRetirement(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kidz how to code';
        case 'driver':
            return firstName + 'drives a cab.';
        default:
            return 'does something else';
    }

}

console.log(yearUntillRetirement('teacher', "arjun"));
