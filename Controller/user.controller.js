import User from "../Modal/user.model.js";
import bcrypt from 'bcrypt';


export const Signup = async (req,res)=>{

try {
   
 const  {fullname,email,password} =req.body;
               const user = await User.findOne({email})
               
               if(user){
                return res.status(400).json({message: 'user already exist'})
               }
// Hash the password

const hashedPassword = await bcrypt.hash(password,10);

               const createUser = new User({fullname,email,password: hashedPassword})
               await createUser.save();
               res.status(201).json({message: 'user created succefully'})
} catch (error) {
    console.log("Error: " + error.message );
    res.status(500).json({message: 'internal serval error'})
}    
}

export const login = async (req,res)=>{

try {
    const {email,password} = req.body;
    const user= await User.findOne({email});
 const isMatch  =  await bcrypt.compare(password,user.password)

    if(!user || !isMatch){
return res.status(400).json({message:'invalid credentials '})
    }

    else{
        res.status(200).json({message: 'login succesfully',
            user:{
                fullname:user.fullname,
                email: user.email
            }
        })
    }
} catch (error) {
    console.log(error, error.message)
    res.status(500).json({message: 'internal server error'})
}    
}