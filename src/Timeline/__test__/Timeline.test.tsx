import { shallow } from "enzyme";
import React from "react";
import Timeline from "../Timeline";
import { TimelineProps } from "../Timeline.types";

describe("Test Component", () => {
    let props: TimelineProps;
    let wrapper: any;

    const data = [
        {
            date: "12 Nov",
            title: "New Title",
            description: "I am new for testing",
        },
    ];

    beforeEach(() => {
        props = {
            data,
        };

        wrapper = shallow(<Timeline {...props} />);
    });

    describe("Timeline Testing", () => {
        it("should have date value passed to div with date className", () => {
            expect(wrapper.find(".date").text()).toContain(data[0].date);
        });

        it("should have title value passed to div with title className", () => {
            expect(wrapper.find(".title").text()).toContain(data[0].title);
        });

        it("should have description value passed to div with description className", () => {
            expect(wrapper.find(".description").text()).toContain(
                data[0].description
            );
        });
    });
});
