import { createContext, useState } from "react";


export const UiContext = createContext();

export const UiProvider =({children }) => {
    const [ ocultarMenu, setOcultarMenu ] =useState(false);

    const showMenu = () =>{
        setOcultarMenu(true);
    }
    const hideMenu = () =>{
        setOcultarMenu(false);
        }


    return(
        <UiContext.Provider value={{
            ocultarMenu,
            showMenu,
            hideMenu
        
        
        }}>           

            {children }

        </UiContext.Provider>
        )
}