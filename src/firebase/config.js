// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { productos } from "../data/asyncData";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apikey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

/*
--- Esto es para cargar los productos del archivo local en FireStore ---
productos.forEach((prod) => {
    addDoc(collection(db, 'productos'),prod)
        .then((elem) => console.log('Se agrego el documento id '${elem.id}))
        .catch((error) => console.log(error))
})
        --- hay que cambiar en las reglas de FireStores para que se pueda reescribir cuando no es modo prueba---
*/