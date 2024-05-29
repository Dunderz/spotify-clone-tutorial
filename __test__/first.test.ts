import { add } from "./first";

describe("add", () => {
  it("should add 2 numbers together", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});
