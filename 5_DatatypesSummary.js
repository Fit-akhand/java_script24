// mainly data are  two types 

// Peimitive 
//  7 type = String ,Number ,Boolean ,undefined ,null ,Symboll ,BigInt

const islogedIn = false
const nologedoj = null
let userEmail;

const id =Symbol("123")

const anotherId =Symbol("123")
console.log(id===anotherId);

const BigNumber=34578634859763879563472865n; //use n to store greater number
console.log(BigNumber);

// NoN primitive (reference)
//  3 types = Array ,Object, Functions

// ****************************************************************************************

/* there are two types of memory 
stack (primitive) and  heap (non-primitive) 
 */
let aName="akhand raj singh"
let anotherName=aName;
anotherName="kushal raj singh"
console.log(aName)
console.log(anotherName)

let user = {
    name:"akhand",
    id:234,
    mail:'akha@google.com'
}

console.log(user);
let user2 =user
user2.name="kushal",
console.log(user);