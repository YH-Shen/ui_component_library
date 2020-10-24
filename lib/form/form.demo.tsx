import React, { Fragment } from "react";
import FormExample1 from "./form.example.1";
// import IconExample2 from "./icon.example.2";

import Demo from "../../demo";
import "./form.demo.scss";

const FormDemo = () => {
    return (
        <Fragment>
            <h2>Form</h2>
            <p>
                High performance Form component with data scope management.
                Including data collection, verification, and styles.
            </p>
            <h3>Custom Validation Rules</h3>
            <p>
                This example shows how to customize your own validation rules to
                finish a two-factor password async verification.
            </p>
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
