let student = {
  student1: {
    name: "sebu",
    age: "15 years old",
    marks: {
      maths: 60,
      science: 80,
      nepali: 90,
    },
  },
  student2: {
    name: "gadha",
    age: "16 years old",
    marks: {
      maths: 60,
      science: 70,
      nepali: 70,
    },
  },
  student3: {
    name: "kalpana",
    age: "15 years old",
    marks: {
      maths: 60,
      science: 40,
      nepali: 80,
    },
  },
};
console.log(`====================`)
for (let std in student) {
  console.log(`Name of Student: ${student[std].name}`);
  console.log(`Age of Student: ${student[std].age}`);
  console.log("Marks of the student: ");
  let marks = student[std].marks;
  let total = 0;
  let count = 0;
for(let mark in marks){
    console.log(`${mark}: ${marks[mark]}`)
    total+=marks[mark];
    count++;
}   
console.log(`Total Marks: ${total}`);
console.log(`Average: ${total/count}%`);
console.log(`====================`)
}
