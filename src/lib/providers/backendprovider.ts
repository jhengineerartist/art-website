import admin from "firebase-admin"
import { initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import { getStorage, getDownloadURL } from "firebase-admin/storage"
import fs from "fs";
import path from "path";
import { config } from "process";

const firebase_admin_config = {
    credential: admin.credential.cert({
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY
            ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/gm, "\n")
            : undefined,
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
    }),
    databaseURL: process.env.FIREBASE_DATABASEURL,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET
}

if (process.env.FIREBASE_AUTH_EMULATOR_HOST) {
    console.log("Running in emulated environment");
}

const app = admin.apps.length === 0 ? initializeApp(firebase_admin_config) : admin.apps[0];

const root = process.cwd();

// Initialize the database with the initial art website json
// This is used if for example the db state gets corrupted
// or the db is empty.
async function setDefaultDBState() {
    console.log('Purging empty or corrupt database. Setting up default DB state.');
    const defaultArtInfo: ArtworkInfo[] = await readLocalArtInfo();
    const db = getDatabase(app!);

    const artNodeRef = db.ref('artwork');

    await artNodeRef.remove();
    console.log('Existing db artwork entries removed. Uploading defaults from defaults json file.');
    const storage = getStorage(app!);
    const storageBucket = storage.bucket(process.env.FIREBASE_STORAGEBUCKET);
    console.log(`Bucket name: ${storageBucket.name}`);

    // defaultArtInfo.forEach(artwork => {
    //     const { id, src, ...otherArtworkInfo } = artwork;
    //     console.log(`Grabbing file: ${src}`)
    //     const file = storageBucket.file(src);
    //     // Get the current date 
    //     const currentDate = new Date();
    //     // Add one year to the current date 
    //     const expiryDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));
    //     const [url] = await file.getSignedUrl({
    //         action: 'read',
    //         expires: expiryDate.getTime()
    //     });
    //     artNodeRef.child(id.toString()).set({
    //         id: id,
    //         src: url,
    //         ...otherArtworkInfo
    //     });

    const promises = defaultArtInfo.map(async artwork => {
        const { id, src, ...otherArtworkInfo } = artwork;
        const file = storageBucket.file(src);
        console.log(`Grabbing file: ${src}`)
        // Get the current date 
        const currentDate = new Date();
        // Add one year to the current date 
        const expiryDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));

        file.getSignedUrl({
            action: 'read',
            expires: expiryDate.getTime()
        }).then(signedUrls => {
            artNodeRef.child(id.toString()).set({
                id: id,
                src: signedUrls[0], // signedUrls[0] contains the public url
                ...otherArtworkInfo
            });
        });


    });
    await Promise.all(promises);
    console.log('Database reset.');
}


export async function initalizeBackend() {
    const db = getDatabase(app!);
    const artNodeRef = db.ref('artwork');
    const snapshot = await artNodeRef.get();

    // If the artwork node doesnt exist or doesnt have children then initialize
    // the default database state from json.
    if (!snapshot.exists() || !snapshot.hasChildren()) {
        await setDefaultDBState();
    }
}

export async function readLocalArtInfo(): Promise<ArtworkInfo[]> {
    // Generate the local filepaths that contain the default artwork json.
    const artworkPath = path.join(root, "public", "artwork");
    const artworkJsonPath = path.join(artworkPath, "artworkinfo.json");
    const { artworkInfo }: { artworkInfo: ArtworkInfo[] } = JSON.parse(
        fs.readFileSync(artworkJsonPath, "utf-8"),
    );
    return artworkInfo;
}

export async function readDatabaseArtInfo(): Promise<ArtworkInfo[]> {
    await initalizeBackend();
    const artworkInfoArray: ArtworkInfo[] = [];
    const db = getDatabase(app!);
    const artNodeRef = db.ref('artwork');
    const artSnapshot = await artNodeRef.orderByChild('date').once('value');

    artSnapshot.forEach(dbChild => {
        const artItem = dbChild.val();
        artworkInfoArray.push({ ...artItem } as ArtworkInfo);
    })

    return artworkInfoArray;
}

export async function readDatabaseArtInfoById(startId: number, endId: number | null = null) {

}