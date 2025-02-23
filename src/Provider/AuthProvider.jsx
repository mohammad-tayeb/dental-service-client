import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Components/Hooks/useAxiosPublic";

const auth = getAuth(app)
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // signUp function
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //log out
    const logOut = () => {
        return signOut(auth)
    }

    //update user perofile
    const updateUserProfile = ({ name, photo }) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            //change
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            console.log('Current User:', currentUser)
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])
    //*********************

    //         console.log('Current User:', currentUser)
    //         setLoading(false)
    //     });
    //     return () => {
    //         return unsubscribe();
    //     }
    // }, [])


    const info = {
        user,
        loading,
        createUser,
        setUser,
        login,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;