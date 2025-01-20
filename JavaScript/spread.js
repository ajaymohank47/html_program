// const arr=["one","two","three","four", "five"];
// const newArr =["six","seven",...arr];
// console.log(newArr);

const sayHi=()=>{
    console.log("It is sayHi function");
}

const sayHello=()=>{
    console.log("Beginning of the sayHello")
        setTimeout(()=>{
            sayHi();
        },5000) //timeout of 5000 i.e 5 ms       
console.log("End of the say Hello function");
}
    
sayHello(); //function calling