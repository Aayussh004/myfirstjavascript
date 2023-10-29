//How to write strings in our code

const name= "Ayush "
const age= 23

// console.log(name+age);//don't write this type code
// console.log(`my name is ${name}, and my age is ${age}`)//its called string interpolation



//declation of string
const gameName = new String('Tekken')//here we are using objects behind the scene as its using dynamic memory
console.log(typeof(gameName))
console.log(gameName[0]);//'T'
console.log(gameName.length)//6
console.log(gameName.toUpperCase())//original value will not change : TEKKEN
console.log(gameName.charAt(2))//0 based indexing will give k
console.log(gameName.indexOf('n'))

//substring slice trim replace
const newGame = gameName.substring(1,5)
console.log(newGame)

const anotherGame = gameName.slice(-5,7)//we can use negative values in it
console.log(anotherGame)

const newstring = "         Ayush      ";//can be used only for whitespaces
console.log(newstring)
console.log(newstring.trim())

url = "ayush%20surya.com"
console.log(url.replace("%20", "-"));
console.log(url.includes("ayush"))

