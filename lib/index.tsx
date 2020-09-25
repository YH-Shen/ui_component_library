import React from "react";
import ReactDOM from "react-dom";

// import Button from "./button";
import Icon from "./icon";

const boo: React.MouseEventHandler = (e) => {
    console.log(e.target);
};
ReactDOM.render(
    <div>
        <Icon name="twitter" onClick={boo} />
        {/* <Icon name="facebook" />
        <Icon name="wechat" /> */}
    </div>,
    document.querySelector("#root")
);
