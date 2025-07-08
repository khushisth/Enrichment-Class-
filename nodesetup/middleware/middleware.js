

function profileMiddleWare(req,res, next){
    console.log("this is middleware");
    next();


}