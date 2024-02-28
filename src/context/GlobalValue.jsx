import React,{createContext} from "react";

export const GlobalContext=createContext()

const GlobalValueProvider=props=>{
    const info={
        name:'Bibisha',
        address:'Ktm'
    }
    return(
        <GlobalContext.Provider value={info}>
             {props.children}

        </GlobalContext.Provider>
           
    )
}
export default GlobalValueProvider