import React, { Fragment } from "react";
import ButtonExample1 from "./button.example.1";
import ButtonExample2 from "./button.example.2";
import ButtonExample3 from "./button.example.3";

import Demo from "../../demo";
// import "./icon.demo.scss";

const ButtonDemo = () => {
    return (
        <Fragment>
            <h2>Button</h2>
            <p>Commonly used button.</p>
            <h3>Basic Usage</h3>
            <Demo
                code={require("!!raw-loader!./button.example.1.tsx").default}
                description={
                    <div className="description">
                        Use
                        <code className="little-code">type</code>,
                        <code className="little-code">plain</code>,
                        <code className="little-code">round</code> and
                        <code className="little-code">circle</code> to define
                        Button's style.
                    </div>
                }
            >
                <ButtonExample1 />
            </Demo>
            <h3>Disabled Button</h3>
            <p>
                The <code className="little-code">disabled</code> attribute
                determines if the button is disabled.
            </p>
            <Demo code={require("!!raw-loader!./button.example.2.tsx").default}>
                <ButtonExample2 />
            </Demo>
            <h3>Text Button</h3>
            <p>Buttons without border and background.</p>
            <Demo code={require("!!raw-loader!./button.example.3.tsx").default}>
                <ButtonExample3 />
            </Demo>
        </Fragment>
    );
};

export default ButtonDemo;
