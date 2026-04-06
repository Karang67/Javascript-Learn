const name = "Karan"
const repocount = 50

// console.log(name + repocount + "Value")

console.log(`Hello my name is ${name} and my Repo count is ${repocount}`)

const gamename = new String("Karan Gehlot ")

console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('G'))

const newString = gamename.substring(0,6)
console.log(newString);

const anotherString = gamename.slice(-11,4)
console.log(anotherString);

const Anothername = " Karan kumar "
console.log(Anothername.trim());

const url = "http://localhost:db.name/%20/jhbschjs"
console.log(url.replace('%20', "-"))
console.log(url.includes("name"))


const SplitExample = "Karan-Kumar-Gehlot-Hello"
console.log(SplitExample.split('-'))
