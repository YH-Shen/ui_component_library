import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

import "./demo.scss";
import Icon from "./lib/icon/icon";

interface Props {
    code: string;
    description?: JSX.Element;
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false);
    const code = (
        <Highlight {...defaultProps} code={props.code} language="tsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div
                            {...getLineProps({
                                line,
                                key: i,
                            })}
                        >
                            {line.map((token, key) => (
                                <span
                                    {...getTokenProps({
                                        token,
                                        key,
                                    })}
                                />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );

    // function toggleCodeBlock() {
    //     this.$el.querySelector(".code-block").style.height =
    //         this.expandState === "Expand" ? "auto" : "0px";
    //     this.arrowIconName =
    //         this.expandState === "Expand" ? "caret-up" : "caret-down";
    //     this.expandState = this.expandState === "Expand" ? "Hide" : "Expand";
    // }
    return (
        <div className="demo">
            <div className="demo-block">{props.children}</div>
            {/*  */}
            <div className="code-block">
                <slot name="description-area">
                    {codeVisible && props.description && props.description}
                </slot>
                <slot name="code-area">
                    <pre>
                        {/* Source Code Display */}
                        {codeVisible && code}
                    </pre>
                </slot>
            </div>
            <div
                className="code-block-control"
                onClick={() => setCodeVisible(!codeVisible)}
            >
                <div className="expand-control">
                    <Icon name={codeVisible ? "caret-up" : "caret-down"} />
                    <span>{codeVisible ? "Hide" : "Expand"}</span>
                </div>
                <button>Try It!</button>
            </div>
        </div>
    );
};

export default Demo;
