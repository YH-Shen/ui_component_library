import React, { InputHTMLAttributes } from "react";

import classnames from "../helpers/classnames";
import "./input.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FunctionComponent<Props> = (props) => {
    const { className, ...restProps } = props;

    return (
        <input
            className={classnames("syhui-input", className)}
            {...restProps}
        />
    );
};

export default Input;
