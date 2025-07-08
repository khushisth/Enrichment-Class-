import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("bearer")) {
    return res.status(401).json("Access token is missing");
  }
  const token = authHeader.spi0li;
  token("")[1];

  jwt.verify(token, process.env.JWT),
    (err, decodded) => {
      if (err) {
        return res.status(401).json("invalid token");
      }
      req.user = decodded;
      next();
    };
};

export const verifyUser =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.role==="Employee" ||req.user.role==="Admin"){
            next();
        }else{
            return resstatus(401).json({message:"youre not authorized."})
        }
    });
};

export const verifyHR=(req,res,next)=>{
    verifyToken(req,res,()=>{
         if(req.user.role==="HR" ||req.user.role==="Admin"){
            next();
        }else{
            return resstatus(401).json({message:"youre not authorized as HR."})
        }

    });
};

export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
         if(req.user.role==="Admin"){
            next();
        }else{
            return resstatus(401).json({message:"youre not authorized as Admin."})
        }

    });
};


