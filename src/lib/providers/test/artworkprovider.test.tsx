import { expect, jest, describe, test, beforeAll, beforeEach, afterAll } from "@jest/globals";
import { initializeTestEnvironment, RulesTestEnvironment, assertFails, TestEnvironmentConfig } from '@firebase/rules-unit-testing';
import fs from "fs";
import path from "path";

let testEnv: RulesTestEnvironment;

beforeAll(async () => {
    console.log("Running ArtworkProvider Tests")
    const root = process.cwd();
    testEnv = await initializeTestEnvironment({
        // This should be set to a test projectid if you load in a configured .env.jest
        projectId: "test-artwebsite-21a76",
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
function dummy() {
    return 42;
}

test("dummy function should return 42", () => {
    expect(dummy()).toBe(42);
});
