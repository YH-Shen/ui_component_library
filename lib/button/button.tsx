import React, { ButtonHTMLAttributes } from "react";
import classnames from "../helpers/classnames";
import Icon from "../icon/icon";
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
    round?: boolean;
    circle?: boolean;
    loading?: boolean;
    disabled?: boolean;
    icon?: string;
    position?: "left" | "right";
    size?: "small" | "medium" | "large" | "huge";
}

const Button: React.FunctionComponent<Props> = (props) => {
    const {
        className,
        children,
        level,
        plain,
        round,
        circle,
        loading,
        disabled,
        icon,
        size,
        position,
        ...restProps
    } = props;

    const renderIcon = () => {
        // const IconClassName = classnames(componentName, 'icon', [size], { loading })
        console.log("renderIcon works");
        return icon && <Icon name={icon} />;
    };
    return (
        <button
            className={classnames(
                "syhui-button",
                `syhui-button-${level}`,
                `${plain ? "is-plain" : ""}`,
                `${round ? "is-round" : ""}`,
                `${circle ? "is-circle" : ""}`,
                `${loading ? "is-loading" : ""}`,
                position,
                className
            )}
            disabled={disabled}
            {...restProps}
        >
            {renderIcon()}
            {children ? (
                <span className="syhui-button-textContent">{children}</span>
            ) : (
                ""
            )}
        </button>
    );
};

Button.defaultProps = {
    level: "default",
    position: "left",
    // size: 'medium',
    loading: false,
    disabled: false,
};

export default Button;
