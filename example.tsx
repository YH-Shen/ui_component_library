import React from "react";
import ReactDOM from "react-dom";
// import Icon from './lib/icon/icon';

import {
    HashRouter as Router,
    Route,
    NavLink,
} from "react-router-dom";
// import IconExample from "./lib/icon/icon.example";
import IconDemo from "./lib/icon/icon.demo";

import ButtonExample from "./lib/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import {
    Layout,
    Header,
    Aside,
    Content,
    Footer,
} from "./lib/layout/layout";
import "./example.scss";
import logo from "./logo_name.png";

const x = require("!!raw-loader!./lib/icon/icon.example.1.tsx");
console.log(x.default);

ReactDOM.render(
    <Router>
        <Layout className="site-page" style={{}}>
            <Header className="site-header" style={{}}>
                <div className="logo">
                    <img src={logo} height="50" alt="" />
                </div>
            </Header>
            <Layout>
                <Aside className="site-aside" style={{}}>
                    <h2>Introduction</h2>

                    <h2>Component</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">Layout</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Route path="/icon" component={IconDemo}></Route>
                    <Route
                        path="/button"
                        component={ButtonExample}
                    ></Route>
                    <Route
                        path="/dialog"
                        component={DialogExample}
                    ></Route>
                    <Route
                        path="/layout"
                        component={LayoutExample}
                    ></Route>
                </Content>
            </Layout>
            <Footer className="site-footer" style={{}}>
                &copy;Yuhui Shen
            </Footer>
        </Layout>
    </Router>,
    document.querySelector("#root")
);
