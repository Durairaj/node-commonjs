import { listOfFiles } from "../src/main"

describe("main", () => {
  beforeAll(() => {
    console.time("suite")
  })
  afterAll(() => {
    console.timeEnd("suite")
  })
  it("should list the files in the src directory", async() => {
    expect(await listOfFiles()).toBe("List files: main.t")
  })
})
