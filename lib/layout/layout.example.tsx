import React from "react";

import Content from "./content";
import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";

export default function () {
    return (
        <div>
            <div>
                <div>
                    <h1>Example 1</h1>
                    <Layout style={{ height: 500 }}>
                        <Header>feader</Header>
                        <Content>content</Content>
                        <Footer>footer</Footer>
                    </Layout>
                </div>
            </div>
            <div>
                <div>
                    <h1>Example 2</h1>
                    <Layout style={{ height: 500 }}>
                        <Header>header</Header>
                        <Layout>
                            <Aside>aside</Aside>
                            <Content>content</Content>
                        </Layout>
                        <Footer>footer</Footer>
                    </Layout>
                </div>
            </div>
            <div>
                <div>
                    <h1>Example 3</h1>
                    <Layout style={{ height: 500 }}>
                        <Header>header</Header>
                        <Layout>
                            <Content>content</Content>
                            <Aside>aside</Aside>
                        </Layout>
                        <Footer>footer</Footer>
                    </Layout>
                </div>
            </div>
            <div>
                <div>
                    <h1>Example 4</h1>
                    <Layout style={{ height: 500 }}>
                        <Aside>aside</Aside>
                        <Layout>
                            <Header>header</Header>
                            <Content>content</Content>
                            <Footer>footer</Footer>
                        </Layout>
                    </Layout>
                </div>
            </div>
        </div>
    );
}
