import { createContext, useState } from "react";

export const AppContext = createContext()
export const AppProvider = ({children}) => {
    const [lista, setLista] = useState([])

    return(
        <AppContext.Provider value={[lista, setLista]}>
            {children}
        </AppContext.Provider>
    )
}