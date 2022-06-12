import { Box } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import InputF from "../components/input";
import Buttonf from "../components/button";
import { signUpUser } from "../firebase/firebaseMathods";

function SignUp(){
    const [userObj,setUserObj] = useState({});
    
    

    return (

        <>
        <Box>
            <Box>
                <InputF onChange={(e)=>setUserObj({...userObj, name:e.target.value})} label="Name" required="true" />
             </Box>
             <Box>
                <InputF label="Email" onChange={(e)=>setUserObj({...userObj, email:e.target.value})} required="true" />
             </Box> 
             <Box>
                <InputF onChange={(e)=>setUserObj({...userObj, password:e.target.value})} label="Password" type="password" required="true" />
             </Box>
             <Box sx={{padding:3}}>
                 <Buttonf onClick={()=> signUpUser(userObj)} label="SignUp" />
             </Box>
        </Box>
        </>
    )
}

export default SignUp;