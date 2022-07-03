import { useContext } from "react";
import { ContextTheme } from "../context/ContextTheme";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function Getrole(setUserRole) {
    const { user } = useContext(ContextTheme);

    const id = user.uid;
    const docRef = doc(db, "users", id);
    getDoc(docRef).then((doc) => {
        setUserRole(doc.data().userRol);
        // console.log(doc.data(), doc.data().userRol);
    });
}
