// *** Nối mảng
var array1 = ['Javascript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Dart'];
var array3 = [...array1,...array2]

console.log(array3)

// ** Kết hợp 2 object.
var obj1 = {
    nameCourse: 'Javascrip'
};

var obj2 = {
    coursePrice: 1000
}

var obj3 = {...obj1, ...obj2}

console.log(obj3);

// Lấy ra lần lượt từng giá trị trong mảng với Rest và Spread

var arr = ['Javascript', 'PHP', 'Ruby'];

function logger(...rest) {
    for (var i = 0; i < rest.length; i++)
    {
        console.log(rest[i]);
    }
}
logger(...arr)

// Với dấu ... được đặt trước tham số thì là Rest.
// Với dấu ... được đặt trước đối số thì là Spread.