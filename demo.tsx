import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

interface Props {
    code: string;
}
const Demo: React.FunctionComponent<Props> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false);
    const code = (
        <Highlight {...defaultProps} code={props.code} language="tsx">
            {({
                className,
                style,
                tokens,
                getLineProps,
                getTokenProps,
            }) => (
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
    return (
        <div>
            <div className="component-example">{props.children}</div>
            <div>
                <button onClick={() => setCodeVisible(!codeVisible)}>
                    Show Code
                </button>
            </div>
            <pre>
                {/* Source Code Display */}
                {codeVisible && code}
            </pre>
        </div>
    );
};

export default Demo;
