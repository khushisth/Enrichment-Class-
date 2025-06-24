let students={
    student1:{
        name:"sebu",
        age:"16 years old",
        marks:{
            maths:70,
            science:50,
            nepali:80
        }
    },
    student2:{
        name:"samu",
        age:"18 years old",
        marks:{
            maths:75,
            science:60,
            nepali:50

    }
},
    student3:{
        name:"Maya",
        age:"17 years old",
        marks:{
            maths:90,
            science:80,
            nepali:60
    }
        
}
};
// //for student1
// console.log(student.student1.name);
// console.log(student.student1.age);

// let  total1=0;
//   let count1=0;
// for(let mark in student.student1.marks){
//     console.log(mark,": ",student.student1.marks[mark]);
//     total1+=student.student1.marks[mark];
//     count1++;
// }
// console.log("the total marks is",total1);
// let average1=(total1/count1)
// console.log("The Average marks is",average1);

// if(average1>=40){
// console.log("passed")
// }else{
// console.log("failed");}

// //for student2
// console.log(student.student2.name);
// console.log(student.student2.age);

// let  total2=0;
//   let count2=0;
// for(let mark in student.student2.marks){
//     console.log(mark,": ",student.student2.marks[mark]);
//     total2+=student.student2.marks[mark];
//     count2++;
// }
// console.log("the total marks is",total2);
// let average2=(total2/count2)
// console.log("The Average marks is",average2);

// if(average2>=40){
// console.log("passed")
// }else{
// console.log("failed");}

// //for student 3
// console.log(student.student3.name);
// console.log(student.student3.age);

// let  total3=0;
//   let count3=0;
// for(let mark in student.student3.marks){
//     console.log(mark,": ",student.student3.marks[mark]);
//     total3+=student.student3.marks[mark];
//     count3++;
// }
// console.log("the total marks is",total3);
// let average3=(total3/count3)
// console.log("The Average marks is",average3);

// if(average3>=40){
// console.log("passed")
// }else{
// console.log("failed");}

// // for total


let totalClassMarks=0;
let totalClassSubject=0;

for(let std in students){
    const student=students[std];
    const marks=student.marks;
    let totalMarks=0;
    let totalSubjects=0;
    for(let subject in marks){
        totalMarks+=marks[subject];
        totalSubjects++;
    }
    console.log("Total marks of: ",std.name," is ",totalMarks);
    console.log("Average of student ",std.name," is ",totalMarks/totalSubjects);
    console.log("\n")
    totalClassMarks+=totalMarks;
    totalClassSubject+=totalSubjects;
}
console.log("Total marks of class is ",totalClassMarks)
console.log("Average marks of class is ",totalClassMarks/totalClassSubject)
