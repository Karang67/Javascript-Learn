console.log("Functions in Js")

// function name(num1, num2) {
//     console.log(num1 + num2)
// }

// name(3, 4);

function name(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2;
}

const result = name(3, 4);
// console.log(result);


// function loginUserMessage(username) {
//     return  `${username} is logged In.`
// }

// const message = loginUserMessage("Karan");
// console.log(message);

// function loginUserMessage(username) {
//         if (username === undefined) {
//         console.log("Please Enter your name");
//         return
//     }
//     return  `${username} is logged In.`
// }

// const message1 = loginUserMessage();
// console.log(message1);


// function loginUserMessage(username = "sam") {
//     if (!username) {
//         console.log("Please Enter your name");
//         return
//     }
//     return  `${username} is logged In.`
// }

// // const message = loginUserMessage();
// const message2 = loginUserMessage("karan");
// console.log(message2);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(100,200,300,400))


// function calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }

// console.log(calculateCartPrice(100,200,300,400))


const user = {
    username: "Karan",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user);

// handleObject({
//     username: "Sam",
//     price:2000
// });

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600]));
