let color;
console.log(color);
console.log("Registration completed");
let dept = 'CY', course='CyberSecurity';
console.log(dept);
// object person

let object={
    student_name:'Appiah Korsah',
    Sudent_id :90123388,
    department:'Information Sysems',
    class:'IS-3'
};
console.log(object);
// adding more properties
object.location='Tema';
console.log("Current location is "+object.location);
console.log(object)
//var vs let

{
var status='Updated';
var status ='failed';
console.log(status);}

location='Tarkwa';
console.log('The location is '+location);
console.log('Variable type is '+typeof location)

const cars=["Saab","Volvo","BMW"];
console.log(cars);
cars.push("Mercedes-Benz");
console.log(cars);

let x = 5;
x++;
let z = x;
x++
let k=x;
console.log(z);
console.log(k);

let text = "Hello"; text += " World";
console.log(text);
let grade=80;
 grade += 10;
 console.log(grade);
 
 let y = 5;
y **= 2;
console.log(y);

let mk = 16 + 4 + "Volvo";
console.log(mk);
let Real=8.9;
console.log(Real);
let expo=123e2;
console.log(expo);
let expos=123e-2;
console.log(expos);

//functions
function myFunction(p1, p2) {
    return p1 **p2;
    console.log("Done!");
  }

  console.log(myFunction(2,3));
//accessing a function without ()
let value=myFunction(10,2);
console.log("The actual value is "+value);

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };