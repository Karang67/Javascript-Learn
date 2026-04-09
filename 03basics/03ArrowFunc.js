console.log("Arrow Function");

const user = {
    username: "karan",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this);
        
    }
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai() {
//     let username = "karan"
//     console.log(this.username)
// }

// chai()



// const chai = () => {
//     let username = "Karan"
//     console.log(this.username)
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ( {username: "Karan"})

console.log(addTwo(3,4))