//interviewer:  "how will you implement nested objects", its also known as optional chaining

const user = {
    name: "Ayush Suryawanshi",
    father : {//ek object banaya hu user object ke andar
        name : "Sarvind Suryawanshi",
        forefather : {
            name: "Kishori Lal Suryawanshi"
        }
    }
}

console.log(user.name)
console.log(user.father.name)
console.log(user.father.forefather.name)