const Person={
    name:"Shreyas",
    age:20,
    email:"shreyas14.gaikwad@gmail.com"
}
console.log(Person.name)
console.log(Person.name + " "   + Person.email + " " + Person.age);//st1

//Adding object destructuring

const {name, age, email} = person;
console.log(name + " " + age + " " + email);//st2