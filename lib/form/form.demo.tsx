import React, { Fragment } from "react";
import FormExample1 from "./form.example.1";
// import IconExample2 from "./icon.example.2";

import Demo from "../../demo";
import "./form.demo.scss";

const FormDemo = () => {
    return (
        <Fragment>
            <h2>Icon</h2>
            <p>SYHUI provides a set of common icons.</p>
            <h3>Basic Usage</h3>
            <p>Just assign the icon name to the "name" attribute.</p>
            <Demo code={require("!!raw-loader!./form.example.1.tsx").default}>
                <FormExample1 />
            </Demo>
            {/* <Demo code={require("!!raw-loader!./icon.example.2.tsx").default}>
                <IconExample2 />
            </Demo> */}
        </Fragment>
    );
};

export default FormDemo;
