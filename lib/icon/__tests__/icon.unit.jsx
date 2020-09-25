import renderer from "react-test-renderer";
import React from "react";
import { mount } from "enzyme";
import Icon from "../icon";

describe("Icon tests", () => {
    it("successiful rendering", () => {
        const json = renderer
            .create(<Icon name="twitter" />)
            .toJSON();
        expect(json).toMatchSnapshot();
    });
    it("onClick", () => {
        const fn = jest.fn();
        const component = mount(<Icon name="twitter" onClick={fn} />);
        component.find("svg").simulate("click");
        expect(fn).toBeCalled();
        // expect(c.find("use").exists()).toEqual(false);
        // c.setProps({ loading: true });
        // expect(
        //     c.find("use").getDOMNode().getAttribute("xlink:href")
        // ).toEqual("#loading");
    });
});
