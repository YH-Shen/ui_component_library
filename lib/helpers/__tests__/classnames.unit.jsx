import classnames from "../classnames";
describe("classnames tests", () => {
    it("receives one className", () => {
        const result = classnames("a");
        expect(result).toEqual("a");
    });
    it("receives two classNames", () => {
        const result = classnames("a", "b");
        expect(result).toEqual("a b");
    });

    it("receives undefined and not showing undefined", () => {
        const result = classnames("a", undefined);
        expect(result).toEqual("a");
    });

    it("receives multiple classNames and bunch of random things", () => {
        const result = classnames(
            "a",
            undefined,
            "中文",
            false,
            null,
            "b"
        );
        expect(result).toEqual("a 中文 b");
    });

    it("receives nothing", () => {
        const result = classnames();
        expect(result).toEqual("");
    });
});
