import React, { Fragment, useState } from "react";

import { alert, confirm } from "./dialog";
import Button from "../button/button";

const DialogExample3: React.FunctionComponent = () => {
    const [confirmValue, setConfirmValue] = useState("___");
    return (
        <Fragment>
                <div className="demo-text">
                    For the Confirm Dialog, the user has clicked {confirmValue}.
                </div>
                <div className="demo-button-row">
                    <Button level="warning" onClick={() => alert("This is an Alert message!")}>
                        Open Alert
                    </Button>

                    <Button level="info"
                        onClick={() =>
                            confirm(
                                "This is a Confirm Dialog!",
                                () => {
                                    console.log('you have clicked "Yes"');
                                    setConfirmValue("Yes");
                                },
                                () => {
                                    console.log('you have clicked "No"');
                                    setConfirmValue("No");
                                }
                            )
                        }
                    >
                        Open Confirm
                    </Button>
                </div>
                
        </Fragment>
    );
}

export default DialogExample3;
