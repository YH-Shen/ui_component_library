import React, { useState } from "react";

import Dialog, { alert, confirm } from "./dialog";

export default function () {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);

    return (
        <div>
            <div>
                <h1>Example 1</h1>
                <button onClick={() => setX(!x)}>Click</button>
                <Dialog
                    visible={x}
                    buttons={[
                        <button
                            onClick={() => {
                                setX(false);
                            }}
                        >
                            OK
                        </button>,
                        <button
                            onClick={() => {
                                setX(false);
                            }}
                        >
                            Cancel
                        </button>,
                    ]}
                    onClose={() => setX(false)}
                >
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <h1>Example 2</h1>
                <button onClick={() => setY(!y)}>Click</button>
                <Dialog
                    visible={y}
                    buttons={[
                        <button
                            onClick={() => {
                                setY(false);
                            }}
                        >
                            OK
                        </button>,
                        <button
                            onClick={() => {
                                setY(false);
                            }}
                        >
                            Cancel
                        </button>,
                    ]}
                    onClose={() => setY(false)}
                    onClickMaskClose={true}
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
            {/* <div>Example 4</div>
            <button onClick={() => modal(<h1>Hello</h1>)}>modal</button> */}
        </div>
    );
}
