import { BACKEND_URL } from "../lib/ApiConnection";
import { UserContext } from "./CreateContext";

import React from 'react'
import axios from 'axios';


const StateUserContext = ({children}) => {
     
 const signUp = async (MobileNumber,Password,Username,Role,email) =>{
    try {
        const res  = await axios.post(`${BACKEND_URL}users/signup`,{MobileNumber,Password,Username,Role,email},
            {
                headers:{
                    "Content-Type":"application/json"
                }
            }  
        );
         return res.data;

    } catch (error) {
        console.log("error while register user :",error);
    }
}


    

    return(

    <UserContext.Provider  value={{
    signUp
    }}>
      {children}
    </UserContext.Provider>


    );

}

export default StateUserContext
