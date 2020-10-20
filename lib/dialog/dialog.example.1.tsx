import React, { Fragment, useState } from "react";

import Dialog from "./dialog";
import Button from "../button/button";

const DialogExample1: React.FunctionComponent = () => {
    const [visible1, setVisible1] = useState(false);

    return (
        <Fragment>
            <Button level="primary" onClick={() => setVisible1(!visible1)}>
                Open Dialog
            </Button>
            <Dialog
                visible={visible1}
                buttons={[
                    <Button level="primary" onClick={() => { setVisible1(false); }}>
                        Confirm
                    </Button>,
                    <Button onClick={() => { setVisible1(false); }}>
                        Cancel
                    </Button>,
                ]}
                onClose={() => setVisible1(false)} >
                <div>This is a message.</div>
            </Dialog>
        </Fragment>
    );
};

export default DialogExample1;
