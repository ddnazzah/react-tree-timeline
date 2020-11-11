type Data = {
    date: string;
    title: string;
    description: string;
};

export interface TimelineProps {
    data: Data[];
    wrapperClassName?: string;
    timelineClassName?: string;
    dateClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    timelineItemClassName?: string;
    circleClassName?: string;
    barClassName?: string;
}
