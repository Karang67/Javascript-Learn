// Declare object by using constructor

// console.log("Objects in Js Part 2");

 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "same@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Karan",
            lastname: "Gehlot"
        }
    }
}


// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)


const obj1 = {1: "K", 2: "A"}
const obj2 = {3: "R", 4: "A", 5: "N"}
const obj4 = {6: "G", 7: "E", 8: "H", 9: "L", 10: "O", 11: "T"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3)


const users = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 2,
        email: "B@gmail.com"
    },
    {
        id: 3,
        email: "C@gmail.com"
    },
    {
        id: 4,
        email: "D@gmail.com"
    },
    {
        id: 5,
        email: "E@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log("Objects in Part 3");

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Karan"
}

// course.courseInstructor

const {courseInstructor: instructor} = course   //Destructuring
// console.log(courseInstructor);
console.log(instructor);
