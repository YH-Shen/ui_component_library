import classnames, { scopedClassMaker } from "../classnames";

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

describe("scopedClassMaker", () => {
    it("Receive strings or objects", () => {
        const sc = scopedClassMaker("syhui-layout");
        expect(sc("")).toEqual("syhui-layout");
        expect(sc("x")).toEqual("syhui-layout-x");
        expect(sc({ y: true, z: false })).toEqual("syhui-layout-y");
        expect(sc({ y: true, z: true })).toEqual(
            "syhui-layout-y syhui-layout-z"
        );
        expect(sc({ y: true, z: true }, { extra: "blue" })).toEqual(
            "syhui-layout-y syhui-layout-z blue"
        );
    });
});
