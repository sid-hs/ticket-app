import { useContext, useEffect } from 'react'
import { UiContext } from '../context/UIContext'

export const useHideMenu = ( ocultar ) => {
    const {showMenu, hideMenu} = useContext(UiContext);

    useEffect(() => {
        if (ocultar){
        showMenu();
        } else {
            hideMenu()
        }

    
    },[ocultar, hideMenu, showMenu])
}
