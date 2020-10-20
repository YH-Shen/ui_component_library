import React, { Fragment } from "react";

import DialogExample1 from "./dialog.example.1";

import Demo from "../../demo";

const DialogDemo = () => {
    return (
        <Fragment>
            <h2>Dialog</h2>
            <p>Informs users while preserving the current page state.</p>
            <h3>Basic Usage</h3>
            <p>Dialog pops up a dialog box, and it's quite customizable.</p>
            <Demo
                code={require("!!raw-loader!./dialog.example.1.tsx").default}
                description={
                    <div className="description">
                        Use
                        <code className="little-code">level</code>,
                        <code className="little-code">plain</code>,
                        <code className="little-code">round</code> and
                        <code className="little-code">circle</code> to define
                        Button's style.
                    </div>
                }
            >
                <DialogExample1 />
            </Demo>
        </Fragment>
    );
};

export default DialogDemo;
