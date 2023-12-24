const users = [
    {
        id:1,
        surname: 'Ibrahimli',
        username: 'Nihad',
        age:28,
        address: {
            street:'Rashid Behbudov',
            city: 'Baku',
            country: 'Azerbaijan',
        }
    },
    {
        id:2,
        surname: 'Aliyev',
        username: 'Cabbar',
        age:44,
        address: {
            street:'Cambridge',
            city: 'London',
            country: 'UK',
        }
    },
    {
        id:3,
        surname: 'Mustafayev',
        username: 'Aziz',
        age:30,
        address: {
            street:'Nishantasi',
            city: 'Istanbul',
            country: 'Turkey',
        }
    },
]

// let result = users.reduce((acc, curr, index) => acc + index, 0)
// console.log(result);

// users.sort((a, b) => a.age - b.age)
// console.log(age);

// 5.
// users.reverse()
// console.log(users)

// 6.
// const result = users.filter((item) => item.username >= 6)
// console.log (result)

// 7.
// const result = users.find((item) => item.age >= 25)
// console.log (result)

// 8.
// const result = users.map((user) => 'myAge' + user.age)
// console.log(result);

// let user = 'nihad'
//return  nihaD
//return  IHAD
//return  niHad 

let user = 'nihad ibrahimli'
// let result = user.slice(0, 1).toUpperCase() + user.slice(1,6).toLowerCase() + user.slice(6,7).toUpperCase() + user.slice(7)
// console.log(result)

let result = user.slice(0, 1).toLowerCase() + user.slice(1,6).toLowerCase() + user.slice(1).toUpperCase()
console.log(result)

//return Nihad Ibrahimli
//return nihad IBRAHIMLI