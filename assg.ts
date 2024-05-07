// Question # 01
// Installed Node.js, TypeScript and VS Code. and making rest of all assignments in it.

// Question # 02
let person: string = "Eric"
console.log("Hello " + person + ", would you like to learn some Python today?")

// Question # 03
let newName: string = "abDul muQEet"
console.log(newName.toLocaleLowerCase()) // to lower Case
console.log(newName.toUpperCase()) // to upper Case
    /* For title case i took guide form my friend and he is a senior student. He told me that for title case
    you have to convert string to array then use method of upper case for 1st element of array and then slice rest all
    elements into lowercase and then again convert them to string. To solve this question it took more then 30 minutes
    and so many concepts and methods i learned in just this small task <3*/ 
let titleName = newName.split("")
console.log(titleName)
let ToTitleCase1 = [(titleName[0].toUpperCase()) + ((titleName.slice(1,6)).join("").toLowerCase())]
let ToTitleCase2 = [titleName[6].toUpperCase() + ((titleName.slice(7,)).join("").toLocaleLowerCase())]
let toTitleCase = ToTitleCase1.concat(ToTitleCase2)
console.log(toTitleCase.join(""))

// Question # 04
let quotes = 'Albert Einstein once said, “A person who never made a mistake never tried anything new.” '
console.log(quotes)

// Question # 05
let famousePerson: string = "Albert Einstein"
let message: string = ' “A person who never made a mistake never tried anything new.” '
console.log(famousePerson + " once said," + message)

// Question # 06
let stripping = "\n \t Alber Einstein"
console.log(stripping)

// Question # 07 & 08
console.log(4 + 4)
console.log(12-4)
console.log(4 * 2)
console.log(16 / 2)

// Question # 09
let favouriteNumber: number = 10
let messageForNumber: string = " is my favourite number"
console.log(favouriteNumber + messageForNumber)

// Question # 10
/*Already Commented and this is also written in comment*/

// Question # 11
let names: string[] = ["Ahmed", "Muqeet", "Faiz"]
console.log(names[0])
console.log(names[1])
console.log(names[2])

// Question # 12
let invitation = "you are invited for dinner today"
console.log(`Hello ${names[0]}!, ${invitation}`)
console.log(`Hello ${names[1]}!, ${invitation}`)
console.log(`Hello ${names[2]}!, ${invitation}`)

// Question # 13
let transport: string[] = ["Mercedes", "BMW", "Audi"]
let wishForTransport = "I would like to own a"
console.log(`${wishForTransport} ${transport[0]} car.`)
console.log(`${wishForTransport} ${transport[1]} car.`)
console.log(`${wishForTransport} ${transport[2]} car.`)

// Question # 14
/* Same as question # 12*/

// Question # 15 (From Question # 12)
let cannotMakeForDinner = `${names[1]} cannot come for dinner today`
console.log(cannotMakeForDinner)
names[1] = "Faizan" // Replaced Name
console.log(names)
console.log(`Hello ${names[1]}!, ${invitation}`)

// Question # 16 (From Question # 15)
console.log("I found New big table")
let newNameAtStart = ["Sameed"].concat(names)
let newNameAtEnd = newNameAtStart.concat("Arsalan")
    // For adding element in middle of array
let forMid1 = newNameAtStart.slice(0,2)
let forMid2 = newNameAtEnd.slice(2,)
let addingNameInMid = (forMid1.concat("Affan")).concat(forMid2)
console.log(addingNameInMid)

// Question # 17 (From Question # 15)
console.log("Sorry I can invite only two peaple for dinner")
console.log(addingNameInMid.pop())
console.log(addingNameInMid.pop())
console.log(addingNameInMid.pop())
console.log(addingNameInMid.pop())
console.log(`${addingNameInMid.pop()} you are still invited for dinner`)
console.log(`${addingNameInMid.pop()} you are still invited for dinner`)
console.log(addingNameInMid)

// Question # 18
let placesToVisit = ["Makkah", "Singapore", "Naran", "Kaghan", "Paris"]
console.log(placesToVisit)
let copyOfPlaces = placesToVisit.slice(0,)
console.log(copyOfPlaces.sort())
console.log(placesToVisit)
console.log(copyOfPlaces.reverse())
console.log(placesToVisit)

// Question # 19 (From Question # 14 through 18)
console.log("I am inviting two peaple for dinner")

// Question # 20
let anyName: string[] = ["chanar", "K2", "karachi", "Asim", "Audi"]

// Question # 21
let object = {river: "chanar", mountain: "k2", city: "karachi", name: "asim", car: "audi"}

// Question # 22
    /* Alreay did it */

// Question # 23
let car = 'subaru'
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

let car01 = 'audi'
console.log("Is car01 == 'subaru'? I predict false.")
console.log(car01 == 'subaru')

let car2 = 'mercedes'
console.log("Is car2 == 'mercedes'? I predict true.")
console.log(car2 == 'mercedes')

let car3 = 'mercedes'
console.log("Is car03 == 'subaru'? I predict false.")
console.log(car3 == 'subaru')

let car4 = 'bmw'
console.log("Is car4 == 'bmw'? I predict true.")
console.log(car4 == 'bmw')

let car5 = 'bmw'
console.log("Is car5 == 'subaru'? I predict false.")
console.log(car5 == 'subaru')

let car6 = 'suzuki'
console.log("Is car6 == 'suzuki'? I predict true.")
console.log(car6 == 'suzuki')

let car7 = 'suzuki'
console.log("Is car7 == 'subaru'? I predict false.")
console.log(car7 == 'subaru')

let car8 = 'porsche'
console.log("Is car8 == 'porsche'? I predict true.")
console.log(car8 == 'porsche')

let car9 = 'porsche'
console.log("Is car9 == 'subaru'? I predict false.")
console.log(car9 == 'subaru')

// Question # 24
let string1 = "New York"
console.log(string1 == "new york")
console.log(string1.toLowerCase() == "new york")
console.log(5 > 2)
console.log(5 < 2)
console.log(10 >= 11)
console.log(15 <= 16)
console.log(18 > 15 && 18 < 15)
console.log(18 > 15 || 18 < 21)
console.log("Affan" in anyName) // checked an element from array if it was present
console.log("Affan" !in anyName) // checked an element from array if it was not present

// Question # 25
let alienColour = "green"
if (alienColour == "green") {
    console.log("you just earned 05 points")
}

// Question # 26
if (alienColour == "green") {
    console.log("you just earned 05 points")
}
else {
    console.log("you earned 10 points")
}
    /* 2nd program to run else block  */
let alienColour1 = "red" 
if (alienColour1 == "green") {
console.log("you just earned 05 points")
}
else {
console.log("you earned 10 points")
}

// Question # 27 (from Question # 26)
if (alienColour == "green") {
    console.log("you earned 5 points")
}
else if (alienColour == "yellow") {
    console.log("you earned 10 points")
}
else if (alienColour == "red") {
    console.log("you earned 15 points")
}
else {console.log("you failed to hit any alein")
}

// Quesion # 28
let age:number = 18
if (age < 2) {
    console.log("this person is a baby")
}
else if (age >= 2 && age < 4) {
    console.log("this person is a toddler")
}
else if (age >= 4 && age < 13) {
    console.log("this person is a kid")
}
else if (age >= 13 && age < 20) {
    console.log("this person is a teenager")
}
else if (age >= 20 && age < 65) {
    console.log("this person is an adult")
}
else if (age >= 65) {
    console.log("this person is an eler")
}

// Question # 29
let favouriteFruit = ["Banana", "Apple", "Mango"]
if ("Banana" in favouriteFruit){
    console.log("I really like bananas")
}
else if ("Mango" in favouriteFruit) {
    console.log("I really like mangoes")
}
else if ("Apple" in favouriteFruit) {
    console.log("I really like apples")
}
else if ("Water Melon" in favouriteFruit) {
    console.log("I really like water melon")
}
else if ("Orange" in favouriteFruit) {
    console.log("I really like oranges")
}

// Quesion # 30
let userNames = ["admin", "khan", "farhan", "taha", "usama"]
userNames.forEach((userName) => {
if ("admin" === userName) {
    console.log(`Hello ${userName}!, would you like to see some status report?`)
}
else if ("admin" != userName) {
    console.log(`Hello ${userName}, welcome to login again`)
}
})

// Quesion # 31 (From Question # 30)
let emptydUserNames = userNames.splice(0,)
if (userNames.length == 0 ){
    console.log("we need to find some more users")
}

// Question # 32
let currentUsers = ["hamza", "jawad", "noor", "abrar", "ali"]
let newUsers = ["khizar", "naveed", "adeel", "hamza", "arif"]
newUsers.forEach((newUser) => {
    currentUsers.forEach((currentUser) => {
        if (currentUser == newUser) {
            console.log(`${newUser} username is already taken`)
        }
        else {
        console.log(`${newUser} username is available.`)
        }
    })
})

// Question # 33
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
ordinalNumbers.forEach((ordinalNumber) => {
    if (ordinalNumber == 1) {
        console.log(`${ordinalNumber}st`)
    }
    if (ordinalNumber == 2) {
        console.log(`${ordinalNumber}nd`)
    }
    if (ordinalNumber == 3) {
        console.log(`${ordinalNumber}rd`)
    }
    else {console.log(`${ordinalNumber}th`)}
})

// Question # 34
let pizzaFlavour = ["tikka", "pepperoni", "cheezi"]
for (let pizza of pizzaFlavour) {
    console.log(`I like ${pizza}`)
}
console.log("I really love pizza")

// Question # 35
let animals = ["cat", "dog", "horse"]
for (let animal of animals) {
    console.log(`${animal} would be a great pet`)
}
console.log("these all animals are honest to their honour, but the cat is the cuttest among them")

// Question # 36
function makeShirt(size:string) {
    let message = `Size selected ${size}, and print a famous quote.`
    return message
}
console.log(makeShirt("medium"))

// Question # 37
function makeShirtByDefault(defaultSize:string = "medium", defaltMessage:string = "I love TypeScript") {
    let order = `Size selected ${defaultSize}, and print ${defaltMessage}`
    return order
}
console.log(makeShirtByDefault())
console.log(makeShirtByDefault("large", "I love Python"))

// Question # 38
function describeCity(city:string, country:string = "Pakistan") {
    let sentence = `${city} is in ${country}`
    return sentence 
}
console.log(describeCity("Karachi"))
console.log(describeCity("Tokyo", "Japan"))
console.log(describeCity("New York", "USA"))

// Question # 39
function cityCountry(city:string, country:string) {
    let listOfcityCountry = `"${city}, ${country}"`
    return listOfcityCountry
}
console.log(cityCountry("Karachi", "Pakistan"))
console.log(cityCountry("Tokyo", "Japan"))
console.log(cityCountry("New York", "USA"))

// Question # 40
let makeAlbum = ({artist, title}:{artist:string, title:string}) => {
    let detailOfAlbum = `artist: ${artist}, title: ${title}`
    return detailOfAlbum
}
//console.log(makeAlbum({artist: "Taylor Swift",title: "Speak Now"}))

let makeAlbum2 = ({artist, title}:{artist:string, title:string}) => {
    let detailOfAlbum = `artist: ${artist}, title: ${title}`
    return detailOfAlbum
}
//console.log(makeAlbum({artist: "Kendrick Lamar", title: "DAMN"}))

let makeAlbum3 = ({artist, title}:{artist:string, title:string}) => {
    let detailOfAlbum = [`artist: ${artist}, title: ${title}`, 
    makeAlbum({artist: "Taylor Swift",title: "Speak Now"}), 
    makeAlbum2({artist: "Kendrick Lamar", title: "DAMN"})]
    return detailOfAlbum
}
console.log(makeAlbum3({artist:"Beyonce", title:"Lemonade"}))

// Question # 41
let arr = ["Henry", "Potter", "Rone"] 
function showMagicians(){
    let megicians = arr
    return megicians
}
console.log(showMagicians())

// Question # 42
let arr2 = ["Henry", "Potter", "Rone"] 
function showMagicians2(){
    let megicians = arr
    return megicians
}
showMagicians2()
function greatMagician(great:string){
    let list = arr2.map((arr2 => great + arr2))
    return list
}
console.log(greatMagician("great "))

// Question # 43 (From Question 42 & 43)
console.log(greatMagician("great "))
console.log(arr2)

// Question # 44
function sandwich(...items:string[]) {
    for (let item in items) {
        return `${item}`        
    }
}
console.log(sandwich("chicken"))
console.log(sandwich("chicken", "club"))
console.log("sandwich is ordered")

// Question # 45
function carInformation({manufacturer,model}:{manufacturer:string, model:number}) {
    let detailsOfCars = `{${manufacturer}: ${model}}`
    return detailsOfCars
}
console.log(carInformation({manufacturer:"Honda", model: 2024}))













