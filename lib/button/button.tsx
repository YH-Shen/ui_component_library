import React, { ButtonHTMLAttributes } from "react";
import classnames from "../helpers/classnames";
import "./button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FunctionComponent<Props> = (props) => {
    const { className, children, ...restProps } = props;

    return (
        <button
            className={classnames("syhui-button", className)}
            {...restProps}
        >
            {children}
        </button>
    );
};

export default Button;
