import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import { auth } from "../firebase";

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    //Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Logout user
    const logOut = () => {
        return signOut(auth)
    }
    //Login user
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            //console.log(currentUser) //toutes les informations du users
            setUser(currentUser)

        })
        return () => unsubscribe()
    }, [])

    return (
        <UserContext.Provider value={{ createUser, user, logOut, logIn }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}