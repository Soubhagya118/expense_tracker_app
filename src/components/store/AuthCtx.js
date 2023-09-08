import React,{createContext, useState} from "react";

const AuthContext =createContext({
    userDetails:{},
    isLoggin:false,
    userUpdatedData:{},
    userDetailsHandler:()=>{},
    isLogginHandler:()=>{},
    userUpdatedDetails:()=>{}
});

// ===========================================================================localstorage=======================================================
const localstorageFn=()=>{

}


// ========================================================================AuthProvider=====================================================
export const AuthContextProvider =({children})=>{
    const log = localStorage.getItem('loggedIn');
    const log1=JSON.parse(log);
    const userDet= localStorage.getItem('userDetaills');
    const uD=JSON.parse(userDet)
    const userUpdateD=localStorage.getItem('userUpdated');
    const uUpd=JSON.parse(userUpdateD);

    const [loggin,setLoggin]=useState(log1?true:false);
    const [userDetails,setUserDetails] = useState(uD?uD:{});
    const [userUpdatedData,setUserUpdatedData] =useState(uUpd?uUpd:{})

    const isLogginHandlerFn=(d)=>{
        setLoggin(d);
        localStorage.setItem('loggedIn',d);

    }
    const userDetailsHandlerFn=(data)=>{
     //   const newD= {...userDetails,data}
        setUserDetails(data);
    const newD=JSON.stringify({...data})
        localStorage.setItem('userDetaills',newD)
    }
const userUpdatedDetailsFn=(dataup)=>{
    setUserUpdatedData(dataup);
    const nD=JSON.stringify({...dataup})
    localStorage.setItem('userUpdated',nD);
}

    const authCtx={
        userDetails:userDetails,
        isLoggin:loggin,
        userUpdatedData:userUpdatedData,
        userDetailsHandler:userDetailsHandlerFn,
        isLogginHandler:isLogginHandlerFn,
        userUpdatedDetails:userUpdatedDetailsFn,

    }
return(
    <AuthContext.Provider value={authCtx}>
{children}{console.log("authCtx",authCtx)}
{console.log("auth userDetails",typeof authCtx.userDetails)}
    </AuthContext.Provider>
)
}

export default AuthContext;
