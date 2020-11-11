import React from "react";
import "../Timeline/scss/Timeline.stories.scss";
import Timeline from "./Timeline";

export default {
    title: "Timeline",
};

const data = [
    {
        date: "September 2020 - Present",
        title: "Job Title",
        description: "Official Company Name  - City, Country",
    },
    {
        date: "September 2019 - August 2020",
        title: "Job Title",
        description: "Official Company Name  - City, Country",
    },
    {
        date: "December 2017 - February 2019",
        title: "Job Title",
        description: "Official Company Name  - City, Country",
    },
    {
        date: "August 2016 - November 2017",
        title: "Job Title",
        description: "Official Company Name  - City, Country",
    },
];

export const Default = () => (
    <Timeline
        data={data}
        wrapperClassName="wrapper"
        titleClassName="title"
        dateClassName="date"
        descriptionClassName="description"
        timelineClassName="timeline"
    />
);
