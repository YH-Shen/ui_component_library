import React, { Fragment, useState } from "react";

import Dialog from "./dialog";
import Button from "../button/button";

const DialogExample2: React.FunctionComponent = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    
    return (
        <Fragment>
            <div>
                <Button level="text" onClick={() => setVisible1(!visible1)}>
                    Dialog does NOT CLOSE by clicking on mask.
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
                    <div>This Dialog CANNOT be closed by clicking on the mask.</div>
                </Dialog>
            </div>
            <div>
                <Button level="text" onClick={() => setVisible2(!visible2)}>
                    Dialog DO CLOSE by clicking on mask.
                </Button>
                <Dialog
                    visible={visible2}
                    buttons={[
                        <Button level="primary" onClick={() => { setVisible2(false); }}>
                            Confirm
                        </Button>,
                        <Button onClick={() => { setVisible2(false); }}>
                            Cancel
                        </Button>,
                    ]}
                    onClose={() => setVisible2(false)} 
                    mask={{ visible: true, closeOnClick: true }} >
                    <div>This Dialog CAN be closed by clicking on the mask.</div>
                </Dialog>
            </div>
            <div>
                <Button level="text" onClick={() => setVisible3(!visible3)}>
                    Dialog without mask.
                </Button>
                <Dialog
                    visible={visible3}
                    buttons={[
                        <Button level="primary" onClick={() => { setVisible3(false); }}>
                            Confirm
                        </Button>,
                        <Button onClick={() => { setVisible3(false); }}>
                            Cancel
                        </Button>,
                    ]}
                    onClose={() => setVisible3(false)} 
                    mask={{ visible: false}} >
                    <div>This Dialog doesn't have mask.</div>
                </Dialog>
            </div>
            
        </Fragment>
    );
}

export default DialogExample2;
