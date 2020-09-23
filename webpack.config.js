const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    // mode: "production",
    entry: {
        // index: "./lib/index.tsx",
        ui_component_library: "./lib/index.tsx",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
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
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: "ui_component_library",
    //         template: "index.html",
    //     }),
    // ],
    // externals: {
    //     react: {
    //         commonjs: "react",
    //         commonjs2: "react",
    //         amd: "react",
    //         root: "React",
    //     },
    //     "react-dom": {
    //         commonjs: "react-dom",
    //         commonjs2: "react-dom",
    //         amd: "react-dom",
    //         root: "ReactDOM",
    //     },
    // },
};
