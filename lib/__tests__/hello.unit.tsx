function add(a: number, b: number) {
    return a + b;
}
describe("My first test case!", () => {
    it("add(1, 2) equals 3", () => {
        expect(add(1, 2)).toEqual(3);
    });
});
