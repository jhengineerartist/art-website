import { initializeApp } from 'firebase/app'
import { getDatabase, connectDatabaseEmulator } from 'firebase/database'
import { getStorage, connectStorageEmulator } from 'firebase/storage'

const config = {
    apiKey: `${process.env.CLIENT_FIREBASE_APIKEY}`,
    authDomain: `${process.env.CLIENT_FIREBASE_AUTHDOMAIN}`,
    projectId: `${process.env.CLIENT_FIREBASE_PROJECTID}`,
    databaseURL: `${process.env.CLIENT_FIREBASE_DATABASEURL}`,
    storageBucket: `${process.env.CLIENT_FIREBASE_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.CLIENT_FIREBASE_MESSAGINGSENDERID}`,
    appId: `${process.env.CLIENT_FIREBASE_APPID}`
};
if (process.env.NODE_ENV === "test") {
    config.databaseURL = process.env.TEST_FIREBASE_DATABASEURL as string
    console.log(JSON.stringify(config));
}



const firebaseApp = initializeApp(config);

const firebaseDB = getDatabase(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);

if (process.env.NODE_ENV === "test") {
    connectStorageEmulator(firebaseStorage, "localhost", 9199);
    connectDatabaseEmulator(firebaseDB, "localhost", 9000);
}

export { firebaseApp, firebaseDB, firebaseStorage };