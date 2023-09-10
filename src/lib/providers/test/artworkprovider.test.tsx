import { expect, jest, describe, test, beforeAll, beforeEach, afterAll } from "@jest/globals";
import { firebaseDB, firebaseStorage } from "../firebaseprovider";
import { getAllArtData } from "../artworkprovider";
import { ref, set, get } from "firebase/database";


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

    const fbRef = ref(firebaseDB, "test");
    const snapshot = await get(fbRef);
    console.log(snapshot.val())

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

test("dummy function should return 42", () => {
    expect(dummy()).toBe(42);
});
