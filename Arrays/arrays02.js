const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//aise push kroge to dikkat hai ye marvel k andar dc ke array ko ek hi element
//jaisa treat krega

// console.log(marvel_heros);
// console.log(marvel_heros[3]);//will give dc array

// const allHeros = marvel_heros.concat(dc_heros)//ye ek optimized way hai
// console.log(allHeros);

//Spread: it will sptead all elements
const all_new_heros = [...marvel_heros, ...dc_heros]//but hum spread use krenge most of the time

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//infinity will do spread untill all elements gets seperated
console.log(real_another_array);




console.log(Array.isArray("Hitesh"))//it will tell ki ye argument array hai ya nhi
console.log(Array.from("Hitesh"))//agr array banana ho to from use kro
console.log(Array.from({name: "hitesh"})) // interesting it cannot tell because ye key,value pair hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//will convert to array