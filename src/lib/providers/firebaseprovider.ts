import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

const config = {
    apiKey: `${process.env.CLIENT_FIREBASE_APIKEY}`,
    authDomain: `${process.env.CLIENT_FIREBASE_AUTHDOMAIN}`,
    projectId: `${process.env.CLIENT_FIREBASE_PROJECTID}`,
    databaseURL: `${process.env.CLIENT_FIREBASE_DATABASEURL}`,
    storageBucket: `${process.env.CLIENT_FIREBASE_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.CLIENT_FIREBASE_MESSAGINGSENDERID}`,
    appId: `${process.env.CLIENT_FIREBASE_APPID}`
};

export const firebaseApp = initializeApp(config);
export const firebaseDB = getDatabase(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);