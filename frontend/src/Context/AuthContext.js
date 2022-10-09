import { createContext,useState } from "react";

export const AuthContext = createContext()

const AuthProvider = (props) => {
    
    let [user, setUser] = useState(null)
    let [authTokens, setAuthTokens] = useState(null)

    

    let contextData = {

    }

    return (
        <AuthContext.Provider value={{contextData}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;