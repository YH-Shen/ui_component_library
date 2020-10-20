import React, { useState } from "react";

import Dialog, { alert, confirm, modal } from "./dialog";

export default function () {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const openModal = () => {
        const close = modal(
            <h1>
                Hello
                <button onClick={() => close()}>close</button>
            </h1>
        );
    };
    return (
        <div>
            <div>
                <h1>Example 1</h1>
                <button onClick={() => setVisible1(!visible1)}>Click</button>
                <Dialog
                    visible={visible1}
                    buttons={[
                        <button
                            onClick={() => {
                                setVisible1(false);
                            }}
                        >
                            OK
                        </button>,
                        <button
                            onClick={() => {
                                setVisible1(false);
                            }}
                        >
                            Cancel
                        </button>,
                    ]}
                    onClose={() => setVisible1(false)}
                >
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <h1>Example 2</h1>
                <button onClick={() => setVisible2(!visible2)}>Click</button>
                <Dialog
                    visible={visible2}
                    buttons={[
                        <button
                            onClick={() => {
                                setVisible2(false);
                            }}
                        >
                            OK
                        </button>,
                        <button
                            onClick={() => {
                                setVisible2(false);
                            }}
                        >
                            Cancel
                        </button>,
                    ]}
                    onClose={() => setVisible2(false)}
                    mask={{ visible: true, closeOnClick: true }}
                >
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <h1>Example 3</h1>
                <button onClick={() => alert("1")}>alert</button>
                <button
                    onClick={() =>
                        confirm(
                            "1",
                            () => {
                                console.log('you have clicked "Yes"');
                            },
                            () => {
                                console.log('you have clicked "No"');
                            }
                        )
                    }
                >
                    confirm
                </button>
            </div>
            <div>
                <h1>Example 4</h1>
                <button onClick={openModal}>modal</button>
            </div>
        </div>
    );
}
