import { Typography, Box } from "@material-ui/core";
import { useState } from "react";
import InputF from "../components/input";
import Buttonf from "../components/button";
import { logInUser } from "../firebase/firebaseMathods";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
function Login(){
    const [userObj, setUserObj] = useState({});

    let loginUser=()=>{
        if(!userObj.email){
            alert("Email is required");
            return
        }
        if(!userObj.password){
            alert("password is required")
            return;
        }
        console.log(userObj)

        logInUser(userObj).then((res)=>{
            console.log("login succesfully");
        }).catch((err)=>{
            console.log(err)
        })
    }

    return  (
        <>
        <Box>
       
           
             <Box>
                <InputF label="Email" onChange={(e)=>setUserObj({...userObj, email:e.target.value})} required={true} />
             </Box> 
             <Box>
                <InputF onChange={(e)=>setUserObj({...userObj, password:e.target.value})} label="Password" type="password" required={true} />
             </Box>
             <Box sx={{padding:3}}>
                 <Button onClick={loginUser}>Login</Button>
             </Box>
        </Box> 
       
        </>

    )
}

export default Login;