let student={
    name:"sebu",
    age:"16 years old",
    marks:{
        maths:50,
        science:60,
        english:74
    }
};
console.log(student.name);
console.log(student.age);

  let  total=0;
  let count=0;
for(let mark in student.marks){
    console.log(mark,": ",student.marks[mark]);
    total+=student.marks[mark];
    count++;

}
console.log("the total marks is",total);
let average=(total/count)
console.log("The Average marks is",average);

if(average>=40){
console.log("passed")
}else{
console.log("failed");}

