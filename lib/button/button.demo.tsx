import React, { Fragment } from "react";
import ButtonExample1 from "./button.example.1";
import Demo from "../../demo";
// import "./icon.demo.scss";

const ButtonDemo = () => {
    return (
        <Fragment>
            <h2>Icon</h2>
            <p>SYHUI provides a set of common icons.</p>
            <h3>Basic Usage</h3>
            <p>Just assign the icon name to the "name" attribute.</p>
            <Demo code={require("!!raw-loader!./button.example.1.tsx").default}>
                <ButtonExample1 />
            </Demo>
            {/* <Demo code={require("!!raw-loader!./icon.example.2.tsx").default}>
                <IconExample2 />
            </Demo> */}
        </Fragment>
    );
};

export default ButtonDemo;
