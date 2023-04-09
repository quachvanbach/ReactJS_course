// *** Destructuring ***

// Với array
var array = ['Javascript', 'PHP', 'Ruby'];
var [a, b, c] = array;
console.log(a, b, c);

// Với object
var course = {
    courseName: 'Javascript',
    coursePrice: 1000,
    courseLevel: 'Advance',
    description1: 'description value',
    children: {
        courseName: 'ReactJS'
    }
};

var { courseName, coursePrice, courseLevel } = course;
console.log(courseName, coursePrice, courseLevel);

var { courseName: parentName, children: { courseName: childrenName } } = course;
console.log(parentName, childrenName)

var { description = 'default description' } = course;
console.log(description)

var { description1 = 'default description' } = course;
console.log(description1)


// Rest : Khi kết hợp với Destructuring.

// Với array
var numbers = [1, 2, 3, 4, 5];
var [d, ...arrayRest] = numbers;

console.log(d);
console.log(arrayRest);

// Với object

var myInfo = {
    fullName: 'Quach Van Bach',
    age: 28,
    address: 'Hai Duong',
    subInfo: {
        fullName: 'Quach Van Duy'
    }
}

var { fullName, ...objectRest } = myInfo;

console.log(fullName);
console.log(objectRest);

// Tạo function logger với Rest:

function logger(...params) {
    console.log(params)
}

logger(1,2,3,4,5,6,7,8,9,10);

