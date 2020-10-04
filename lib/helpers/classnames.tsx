function classnames(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(" ");
}

export default classnames;

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
        name: string | ClassToggles,
        options?: Options
    ) {
        // name = {hasAside: true, active: false, ...}
        let namesObject =
            typeof name === "string" || name === undefined
                ? { [name]: name }
                : name;

        // ["hasAside", "x"]
        const scoped = Object.entries(namesObject)
            .filter((kv) => kv[1] !== false)
            .map((kv) => kv[0])
            .map((name) => [prefix, name].filter(Boolean).join("-"))
            .join(" ");
        // ".syhui-hasAside .syhui-x"

        if (options && options.extra) {
            return [scoped, options && options.extra]
                .filter(Boolean)
                .join(" ");
        } else {
            return scoped;
        }
    };
}

export { scopedClassMaker };
