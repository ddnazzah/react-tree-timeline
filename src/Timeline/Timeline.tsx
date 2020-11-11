/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-11-10 01:52:29
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-11-11 06:13:10
 */

import clsx from "clsx";
import React from "react";
import "./scss/Timeline.scss";
import { TimelineProps } from "./Timeline.types";

const Timeline: React.FC<TimelineProps> = ({
    data,
    dateClassName,
    titleClassName,
    descriptionClassName,
    timelineItemClassName,
    wrapperClassName,
    timelineClassName,
}) => (
    <div className={clsx("timeline-wrap", wrapperClassName)}>
        <ol className={clsx("ol-timeline", timelineClassName)}>
            {data?.map((timelineData, index) => (
                <li
                    className={clsx("tl-item", timelineItemClassName)}
                    data-aos="fade-up"
                    key={index}
                >
                    <p>
                        <span className={clsx("date", dateClassName)}>
                            {timelineData.date}
                        </span>
                    </p>
                    <div className="content-wrapper">
                        <div className={clsx("title", titleClassName)}>
                            {timelineData.title}
                        </div>
                        <div
                            className={clsx(
                                "description",
                                descriptionClassName
                            )}
                        >
                            {timelineData.description}
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    </div>
);

Timeline.defaultProps = {
    data: [],
};

export default Timeline;
