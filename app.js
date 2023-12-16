let age = 32;
let userName = "Asha";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = { 
    title: "developer", 
    place: "New York", 
    salary: 5000
};
let totalAdultYears;

function calculateAdultYears() {
    
    let result;
    result = age - 18;
    return result;
}
totalAdultYears = calculateAdultYears();
console.log(totalAdultYears);

age=45;

totalAdultYears = calculateAdultYears();
console.log(totalAdultYears);

let person = {
    name: "Asha",  //Property
    greet() {      //Method
        console.log("Hello ");
    }   
};

person.greet(); 