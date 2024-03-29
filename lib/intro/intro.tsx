import React, { Fragment } from "react";
// import "./icon.demo.scss";

const Intro = () => {
    return (
        <Fragment>
            <h2>SYHUI</h2>
            <p>
                SYHUI is a desktop UI component library based on React. The
                color and UI illustrations were referenced from other libraries
                such as Ant Design and Element.{" "}
            </p>
            <h3>Use of TypeScript</h3>
            <p>
                TypeScript provides static type checking, which enables
                developers to catch errors before running the code. SYHUI is
                mainly written with TypeScript for code robustness.
            </p>
            <h3>No External Dependencies</h3>
            <p>
                SYHUI depends only on React, and ReactDOM as two core libraries.
                No other external dependencies.
            </p>
        </Fragment>
    );
};

export default Intro;
