// Định nghĩa key: value cho object.
var fullName = 'Quach Van Bach';
var age = '28';

var myInfo = {
    fullName,
    age,
}

console.log(myInfo);

// Định nghĩa method cho object.
var myInfo1 = {
    getName() {
        return fullName
    }
}

console.log(myInfo1.getName())

// Định nghĩa key cho object dưới dạng biến.

var courseName = 'name';
var coursePrice = 'price';

const course = {
    [courseName]: 'Javascript',
    [coursePrice]: 1000,
}

console.log(course);

//Bài tập
function arrToObj(arr) {
    return arr.reduce((obj, item) => {
        var [key, value] = item;
        obj[key] = value;
        return obj;
    }, {});
}