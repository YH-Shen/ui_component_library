function scopedClassMaker(prefix: string) {
    return function namer(name?: string) {
        return [prefix, name].filter(Boolean).join("-");
    };
}

export { scopedClassMaker };
