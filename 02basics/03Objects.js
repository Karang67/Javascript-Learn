console.log("Objects in Js");

//Singleton
// Object.create  //Constructor    

// Object Literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "karan",
    "fullName": "Gehlot",
    [mySym]: "myKey1",
    age: 23,
    locstion: "jaipur",
    email: "karan6@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["fullName"])
// console.log(JsUser[mySym])

// JsUser.email = "Karan@Chatgpt.com"
// console.log(JsUser["email"])

// Object.freeze(JsUser)
// JsUser.email = "Karan@MicroSoft.com"
// console.log(JsUser)


JsUser.greeting = function () {
    console.log("Greeting Js user")
}

JsUser.greetingTwo = function () {
    console.log(`Greeting Js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())