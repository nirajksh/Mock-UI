// class Person{
//     constructor(name,age){
//     this.name=name
//     this.name=age
// }}

// var obj= new Person("niraj",25)
// console.log(obj)


// var emp={
//     firstName:"niraj",
//     lastName:"singh"
// }
// function greet (greet1,greet2="kaise ho"){
//     console.log(greet1+" "+this.firstName+""+this.lastName+","+greet2)
// }

// greet.call(emp,"hello")
// greet.apply(emp,["hello","gooD morning"])
//  greet.bind(emp,"hello")


// const emp = {
//     name:"niraj",
//     age:25,
//     profession:"software engineer",
//     address:"noida sector 12"
// }
// const json= JSON.stringify(emp)
// console.log(json)
// console.log(emp)

// const arr =[7,8,5,46,8,75,14,55]
// arr.delete
// const slice= arr.slice()
// console.log(slice)

// const arr1= [...arr]
// console.log(arr1)

// console.log([]===[])

// const unaryFunction = (a)=>console.log(a+10)
// unaryFunction(2)

// message("good morning")

// function message(greet){
//     console.log(greet)
// }

// // console.log(eval(2*82+8))

// // msg="hello"
// // console.log(msg)
// // console.log(isFinite(100))

// // const set= setTimeout(() => {
//     // console.log("niraj kumar singh crack the interview ")
    
// // }, 5000);
// // setInterval(()=>{
// // console.log("i love you")
// // },2000)
// var userJSON = { name: "John", age: 31 };
// // var userString = JSON.stringify(userJSON);
// console.log(userJSON); 
// //"{"name":"John","age":31}"
// var mainString = "hello",
//   subString = "hell";
// mainString.includes(subString);

// console.log(mainString)

// function validateEmail(email) {
//     var re =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }

//  const isValid= validateEmail("singh")
//  console.log(isValid)
//  console.log("location.href", window.location.href);
//   // Returns full URL
//   var msg = "Good morning";
// function greeting() {
//   msg = "Good Evening";
//   //console.log(msg); // Good Evening
// }
// console.log(msg); // Good Evening

// greeting();

// function sum(a,b){
//   return a+b

// }

// function sum2(d){
//   const c=sum(5,3)
//   return c+d
// }
// console.log(sum2(8))

const form =document.getElementById("form").value

// console.log(form.length)

function myFunction(value){
    console.log(value.length)
    
}





