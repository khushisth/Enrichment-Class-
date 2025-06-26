//create objects like user details
let details={
    firstname:"khushi",
    lastname:"shrestha",
    email:"khushishrestha@gmail.com",
    password:"khushi123"
};

//create function that returns promise, 
function promiseFunc(email, password){
    return new Promise(function(resolve, reject){
        //check and compare the email and password
        if((email ===details.email)&(password ===details.password)){
            resolve("You've Sucessfully logged in");
        } else{
            reject("Someting went wrong. Try again later.");
        }
    })
};

// async/await checkauthentication function
async function checkauthentication(){
    try{
        const data = await promiseFunc("khushishrestha@gmail.com", "khushi123");
        console.log(data);
    } catch(err){
        console.log(err);
    }
}

checkauthentication();

// fetch("user.json")
// .then(response=>{
//     console.log(response.json());
// })
// .then