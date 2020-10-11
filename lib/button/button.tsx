import React, { ButtonHTMLAttributes } from "react";
import classnames from "../helpers/classnames";
import "./button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    level?: "primary" | "danger" | "default";
}

const Button: React.FunctionComponent<Props> = (props) => {
    const { className, children, level, ...restProps } = props;

    return (
        <button
            className={classnames(
                "syhui-button",
                `syhui-button-${level}`,
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
