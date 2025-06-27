// day 1
//function add(a,b) {
//   console.log("The sum is ",(a+b) )
//}
//add(1,3)

//DAY 2

let name="ram"
let person={
    name:"shyam",
    age:"20",
    marks:{
        math:89,
        nepali:70,
        english:80
    },
    subjects:{
        science:{
            physics:["thermodynamics","modern physics"]
        },
        maths:{"alzebra","geometry"}
    }
};

console.log(person.marks.english);


person.address="kathmandu";
person.age="25";
person["name"]="hari";

console.log(person);

//dot notation
console.log(person.address);
//bracket notation
console.log(person["address"]);
