import React, { ButtonHTMLAttributes } from "react";
import classnames from "../helpers/classnames";
import "./button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    level?:
        | "primary"
        | "success"
        | "info"
        | "warning"
        | "danger"
        | "default"
        | "text";
    plain?: boolean;
}

const Button: React.FunctionComponent<Props> = (props) => {
    const { className, children, level, plain, ...restProps } = props;

    return (
        <button
            className={classnames(
                "syhui-button",
                `syhui-button-${level}`,
                `${plain ? "is-plain" : ""}`,
                className
            )}
            {...restProps}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    level: "default",
};

export default Button;
