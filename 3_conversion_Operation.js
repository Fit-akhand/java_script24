let score ="33abc"

console.log(typeof score)
console.log(typeof (score))

let valueinnumber =Number(score);
console.log(typeof valueinnumber)
console.log(valueinnumber)


// "33"-> 33
// "33abc" -> NaN
// true -> 1

let islogedin =1
// let islogedin =0
// let islogedin =""
// let islogedin ="akhand"
let changeinboolean = Boolean(islogedin)
console.log(typeof (changeinboolean))

// console.log(changeinboolean)
// 
// 1= true
// 0=false
// "" =false
// "akhand"=true

let aNumber= 33
let convertInString=String(aNumber)

console.log(typeof convertInString)
// console.log(convertInString)

//*******************************************operation********************************************************************* */

let str1="2"
let str2=3
let str3= str1+str2
console.log(str3);
// console.log("2"+2+3);

// console.log(2+3+"2"); //op 52 because jo pahle hoga string ya number uspe operation pahle hoga

console.log(+true);
let num1,num2,num3;
num1 = num2 = num3 = 4
//not a goood way to write a code 
let game=100
game++; //postfix
console.log(game)  //op=>101
++game //prefix
console.log(game) //op=>101

let x=2;
let y=x++;
console.log(x,y);
