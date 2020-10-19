import React, { Fragment } from "react";
import ButtonExample1 from "./button.example.1";
import ButtonExample2 from "./button.example.2";
import ButtonExample3 from "./button.example.3";
import ButtonExample4 from "./button.example.4";
// import ButtonExample5 from "./button.example.5";

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
                        <code className="little-code">level</code>,
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

            <h3>Icon Button</h3>
            <p>
                Use icons to add more meaning to Button. You can use icon alone
                to save some space, or use it with text.
            </p>
            <Demo
                code={require("!!raw-loader!./button.example.4.tsx").default}
                description={
                    <div className="description">
                        Use the
                        <code className="little-code">icon</code>
                        attribute to add icon. You can find the icon list in
                        Element icon component. Adding icons to the right side
                        of the text is achievable with an
                        <code className="little-code">position</code>attribute.
                        Custom icons can be used as well.
                    </div>
                }
            >
                <ButtonExample4 />
            </Demo>

            {/* <h3>Loading Button</h3>
            <p>Buttons without border and background.</p>
            <Demo code={require("!!raw-loader!./button.example.5.tsx").default}>
                <ButtonExample5 />
            </Demo> */}
            <h3>Attributes</h3>

            <div className="attribute-table">
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Accepted Values</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>level</td>
                            <td>buton type</td>
                            <td>string</td>
                            <td>
                                primary / success / warning / danger / info /
                                text
                            </td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td>plain</td>
                            <td>determine whether it's a plain button</td>
                            <td>boolean</td>
                            <td>—</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>round</td>
                            <td>determine whether it's a round button</td>
                            <td>boolean</td>
                            <td>—</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>circle</td>
                            <td>determine whether it's a circle button</td>
                            <td>boolean</td>
                            <td>—</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>disable the button</td>
                            <td>boolean</td>
                            <td>—</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>icon name</td>
                            <td>string</td>
                            <td>—</td>
                            <td>—</td>
                        </tr>
                        <tr>
                            <td>autofocus</td>
                            <td>same as native button's autofocus</td>
                            <td>boolean</td>
                            <td>—</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>native-type</td>
                            <td>same as native button's type</td>
                            <td>string</td>
                            <td>button / submit / reset </td>
                            <td>button</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default ButtonDemo;
