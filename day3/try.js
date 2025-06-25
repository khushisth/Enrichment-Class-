//function greeting{
  //  console.log("hello. Namaste")
//}

//setTimeout(greeting,3000);


// 2nd try
// function greeting(greeting){
//     return function name(name){
//         console.log(greeting,name);
//     };
// }

// const greetNamaste = greeting("Namaste");
// greetNamaste("khushi");

// function promiseFunc(){
//     return new Promise(function(resolve,reject){
//         resolve("Promise rejected");

//     });
// }
// promiseFunc().catch(function(data){
//     console.log(data);
// })



 function statusFunc(name){
    return new Promise(function(resolve,reject){
        if(name=="sucess"){
            resolve("sucessfully resolved")
        }else{
            reject("rejected")
        }
    });
}

// statusFunc("sucess").then(function(data){
//     console.log(data);
// }).catch(function(data){
//     console.log(data);
// })


//async/await.

async function enrichmentclass(){
    try{
        const data= await statusFunc("sucess");
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
enrichmentclass