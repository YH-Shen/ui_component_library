import React, { Fragment } from "react";
import IconExample1 from "./icon.example.1";
import IconExample2 from "./icon.example.2";

import Demo from "../../demo";

const IconDemo = () => {
    return (
        <Fragment>
            <Demo
                code={
                    require("!!raw-loader!./icon.example.1.tsx")
                        .default
                }
            >
                <IconExample1 />
            </Demo>
            <Demo
                code={
                    require("!!raw-loader!./icon.example.2.tsx")
                        .default
                }
            >
                <IconExample2 />
            </Demo>
        </Fragment>
    );
};

export default IconDemo;
