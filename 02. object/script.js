// const object = {
//     id: 1,
//     firstName: 'Nihad',
//     lastName: 'Ibrahimkhanli',
//     age: 28,
//     address: {
//         street: 'Rashid Behbudov',
//         city: 'Baku',
//     },
//     position: 'designer',
//     info: {
//         uni: 'Manchester',
//         qualification: 'Finance',
//         isAdmin: true,
//     }
// }

// delete object.isAdmin
// delete object.address.city
// delete object.info.qualification

// // object.firstName = 'Emin'
// // object.lastName = 'Huseynov'
// // object.age = 29
// // object.address.street = 'Suleyman Rustam'
// // object.address.city = 'Lerik'

// console.log (object.info.qualification)
// console.log (object)

// console.log (object.id + object.age)
// console.log (object.id * object.age)

// const arr1 = new Array()

// const arr2 = ['Nihad', 'Ibrahimkhanli', 28, 'Manchester', true]
// console.log (arr2.at(1))
// console.log (arr2.at(-2))

// console.log (arr2[1]);

// const data = ["Nihad", 1, undefined];
// data.push(18);
// data.unshift(false, "Manchester");

// console.log(data);


const students = [
    {
        id:1,
        name: 'Abbas',
        surname: 'Jafarov',
        age: 18,
    },
    {
        id:2,
        name: 'Abbas',
        surname: 'Hasani',
        age: 24,
    },
    {
        id:3,
        name: 'Rashad',
        surname: 'Suleymanov',
        age: 19,
    },
]

// console.log(students[0], surname)

// students.map((item, index) => console.log(item.name))
// students.map((item, index) => console.log(item.age))

// student.map((item, index) => console.log(item.age + index))

const result1 = students.findLast(item => item.name == 'Abbas')
const result1 = students.find(item => item.name == 'Abbas')
const result = students.filter(item => item.age >= 22 && item.age <= 25)

// let a = 4
// let b = 28

// b += a
// b =b + a
// b++
// console.log(b)