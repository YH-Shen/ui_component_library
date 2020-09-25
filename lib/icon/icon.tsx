import React from "react";
import "./importIcons";
import "./icon.scss";
import classnames from "../helpers/classnames";
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    // onClick: React.MouseEventHandler<SVGElement>;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, name, ...restProps } = props;

    return (
        <svg
            className={classnames("yui-icon", className)}
            {...restProps}
        >
            <use xlinkHref={`#${name}`} />
        </svg>
    );
};

export default Icon;
