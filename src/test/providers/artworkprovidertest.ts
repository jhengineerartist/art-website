import { expect, test, beforeAll, beforeEach, afterAll } from "@jest/globals";
import { getPlaiceholder, GetPlaiceholderReturn } from "plaiceholder";
import { initializeTestEnvironment, RulesTestEnvironment, assertFails } from '@firebase/rules-unit-testing';
import fs from "fs";
import { jest } from '@jest/globals';


let testEnv: RulesTestEnvironment;

// We don't need to be testing getPlaiceholder since that's an external dependency with its own tests
// just generate a simple return.
jest.mock("plaiceholder");
let mockPlaiceholder: GetPlaiceholderReturn;
beforeAll(async () => {
    const testImage = fs.readFileSync('test_image.jpg');
    mockPlaiceholder = await getPlaiceholder(testImage, { size: 10 });
});

const mockedGetPlaiceholder = getPlaiceholder as jest.MockedFunction<
    typeof getPlaiceholder
>;
mockedGetPlaiceholder.mockImplementation(async () => mockPlaiceholder);

beforeEach(async () => {

})