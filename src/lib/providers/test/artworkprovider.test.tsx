import { expect, jest, describe, test, beforeAll, beforeEach, afterAll } from "@jest/globals";
import { firebaseDB, firebaseStorage } from "../firebaseprovider";
import { initializeTestEnvironment, RulesTestEnvironment, assertFails, TestEnvironmentConfig } from '@firebase/rules-unit-testing';
import { getAllArtData } from "../artworkprovider";
import { ref, set, get } from "firebase/database";
import fs from "fs";
import path from "path";

let testEnv: RulesTestEnvironment;
const testArtwork1: ArtworkInfo = {
    "id": 0,
    "src": "/artwork/cast_project.jpg",
    "title": "Caesar Cast Final Project, Charcoal, 30\"x22\"",
    "caption": "The charcoal rendering of the Caesar Bust was the capstone project for my first year at The Georgetown Atelier.  This project saw me develop a professional understanding of value hierarchy and the turning of form.  The cast rendering assignment is steeped in the tradition of the atelier system dating back to at least the 19th century and it is a testament to the artist's diligence and patience as these assignments can routinely take over a month to realize. I was expected to pour over every small detail until I realized the final form in an optical and aesthetic perfection.",
    "date": "2022-06-03T00:00:00Z",
    "class": "GalleryPiece",
    "tags": [
        "Charcoal",
        "Cast",
        "Atelier",
        "Caesar",
        "Bust",
        "Drawing",
        "StillLife"
    ]
};

beforeAll(async () => {
    console.log("Running ArtworkProvider Tests");

    const root = process.cwd();
    testEnv = await initializeTestEnvironment({
        // This should be set to a test projectid if you load in a configured .env.jest
        projectId: process.env.CLIENT_FIREBASE_PROJECTID,
        database: {
            rules: fs.readFileSync(path.join(root, 'firebase', 'rules', 'db.rules'), "utf8"),
            host: "localhost",
            port: 9000
        },
        storage: {
            rules: fs.readFileSync(path.join(root, 'firebase', 'rules', 'storage.rules'), "utf8"),
            host: "localhost",
            port: 9199
        },
    });
})

jest.mock("../../utils/ssrutils", () => ({
    getBase64ImageBlur: jest.fn(() => {
        console.log("Mocked getBase64ImageBlur");
        return {
            base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==", // a 1x1 transparent pixel
            width: 100,
            height: 100
        }
    })
}));

function dummy() {
    return 42;
}

test("dummy function should return 42", async () => {
    const fbRef = ref(firebaseDB);
    const snap = await get(fbRef);

    expect(dummy()).toBe(42);
});
