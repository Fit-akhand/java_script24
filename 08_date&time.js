let mydate= new Date();
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())


// let myCreatedDate =new Date(2003,4,15);
// let myCreatedDate =new Date(2003,4,15,13,23);
// let myCreatedDate =new Date("2023-01-14");
let myCreatedDate =new Date("15-05-2005");
// console.log(myCreatedDate.toLocaleString())

let mytimestamp =Date.now()
//  console.log(mytimestamp);
//  console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate= new Date();
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getMonth()+1)
console.log(`${newdate.getMonth()+1}`)