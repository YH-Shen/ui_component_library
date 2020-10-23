import React, { Fragment } from "react";
import Demo from "../../demo";
import LayoutExample1 from "./layout.example.1";
import "./layout.demo.scss";

const LayoutDemo = () => {
    return (
        <Fragment>
            <h2>Layout</h2>
            <p>
                Layout components for scaffolding basic structure of the page:
            </p>
            <h3>Common layouts</h3>
            <Demo code={require("!!raw-loader!./layout.example.1.tsx").default}>
                <LayoutExample1 />
            </Demo>
        </Fragment>
    );
};
export default LayoutDemo;
