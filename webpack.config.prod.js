const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Object.assign({}, base, {
    mode: "production",
    entry: {
        ...base.entry,
        example: "./example.tsx",
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React",
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
            root: "ReactDOM",
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ui_component_library",
            template: "example.html",
            filename: "example.html",
        }),
    ],
});
