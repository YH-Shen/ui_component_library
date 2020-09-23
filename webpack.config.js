const path = require("path");
module.exports = {
    mode: "production",
    entry: {
        // index: "./lib/index.tsx",
        ui_component_library: "./lib/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, "dist/lib"),
        library: "ui_component_library",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
        ],
    },
};
