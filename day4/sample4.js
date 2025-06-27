// //destructuring

// const user={
//     name:"khushi",
//     age:"18",
//     email:"kstha@gmail.com",
//     location:"itahari"
// }

// const{name:firstName,...other}=user
// console.log(firstName);
// console.log(other);
// // console.log(user.name);
// // console.log(user.age);
// // console.log(user.email);
// // console.log(user.location);

// const{name,age,email,location}= user;
// console.log(name);
// console.log(age);
// console.log(email);
// console.log(location);


//fetch
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data);
   const{name, email,...other}= data;
})

.catch(error=>{
     console.error("error fetching data:",error);
})
