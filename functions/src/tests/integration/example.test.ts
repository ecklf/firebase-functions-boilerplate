// Test environment
import { testEnv } from "../testEnv";
// Functions
import onUserCreate from "../../triggers/onUserCreate";
// Preperation
let wrapped;

describe("Name of the group", () => {
  beforeAll(async () => {
    // Create some mock data
    const data = "x";
    wrapped = testEnv.wrap(onUserCreate);
    return await wrapped(data);
  });
  it("should x", async () => {
    expect(1).toBe(1);
  });
});
