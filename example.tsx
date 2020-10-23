import React from "react";
import ReactDOM from "react-dom";
// import Icon from './lib/icon/icon';

import { HashRouter as Router, Route, NavLink } from "react-router-dom";
// import IconExample from "./lib/icon/icon.example";
import Intro from "./lib/intro/intro";
import IconDemo from "./lib/icon/icon.demo";
import ButtonDemo from "./lib/button/button.demo";
import DialogDemo from "./lib/dialog/dialog.demo";

import LayoutDemo from "./lib/layout/layout.demo";
import FormExample from "./lib/form/form.example";

import { Layout, Header, Aside, Content, Footer } from "./lib/layout/layout";
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
                    {/* <h2>Introduction</h2> */}
                    <ul>
                        <li className="site-aside-intro">
                            <NavLink to="/intro">SYHUI</NavLink>
                        </li>
                    </ul>
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
                        <li>
                            <NavLink to="/form">Form</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className="site-main">
                    <Route path="/intro" component={Intro}></Route>

                    <Route path="/icon" component={IconDemo}></Route>
                    <Route path="/button" component={ButtonDemo}></Route>
                    <Route path="/dialog" component={DialogDemo}></Route>
                    <Route path="/layout" component={LayoutDemo}></Route>
                    <Route path="/form" component={FormExample}></Route>
                </Content>
            </Layout>
            <Footer className="site-footer" style={{}}>
                &copy;Yuhui Shen
            </Footer>
        </Layout>
    </Router>,
    document.querySelector("#root")
);
