import React from "react";
import ReactDOM from "react-dom";

// import Button from "./button";
import Icon from "./icon";

const boo: React.MouseEventHandler = (e) => {
    console.log(e.target);
};
ReactDOM.render(
    <div>
        <Icon
            name="twitter"
            onClick={boo}
            onMouseEnter={() => console.log("enter")}
            onMouseLeave={() => console.log("leave")}
        />
        <Icon name="facebook" />
        <Icon name="instagram" />
        <Icon name="wechat" />
        <Icon name="dribbble" />
        <Icon name="behance" />
        <Icon name="pinterest" />
    </div>,
    document.querySelector("#root")
);
