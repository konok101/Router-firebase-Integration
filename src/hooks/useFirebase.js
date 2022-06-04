import { useEffect, useState } from "react"
import app from '../firebase.init'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

const auth = getAuth(app)
const googlrProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInwithGoogle = () => {
        signInWithPopup(auth, googlrProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)

            })
    }
    const handleSingOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])


    return {
        user,
        signInwithGoogle,
        handleSingOut
    }
}
export default useFirebase;