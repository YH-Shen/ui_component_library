interface Options {
    extra?: string | undefined;
}
interface ClassToggles {
    [K: string]: boolean;
    // hasAside: boolean;
    // active: boolean;
}
function scopedClassMaker(prefix: string) {
    return function namer(
        name?: string | ClassToggles,
        options?: Options
    ) {
        // name = {hasAside: true, active: false, ...}
        let name2;
        let result;

        if (typeof name === "string" || name === undefined) {
            name2 = name;
            result = [prefix, name2].filter(Boolean).join("-");
        } else {
            name2 = Object.entries(name)
                .filter((kv) => kv[1])
                .map((kv) => kv[0]);
            // ["hasAside", "x"]
            result = name2
                .map((n) => [prefix, n].filter(Boolean).join("-"))
                .join(" ");
            // ".syhui-hasAside .syhui-x"
        }

        if (options && options.extra) {
            return [result, options && options.extra]
                .filter(Boolean)
                .join(" ");
        } else {
            return result;
        }
    };
}

export { scopedClassMaker };
