# React Timeline

![Alt text](https://firebasestorage.googleapis.com/v0/b/online-storage-8b52c.appspot.com/o/react-tree-timeline%2FScreenshot.png?alt=media&token=dbab7d63-1a56-42a1-ad39-70b6e32b1782)

This is a simple but fully customizable react component which you can use on your website for displaying timelines.

## Installation

---

Use the package manager [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) .

```bash
yarn add react-tree-timeline

npm install --save react-tree-timeline
```

## Usage

---

The simplest form.

```typescript
import React from "react";
import ReactDOM from "react-dom";
import Timeline from "react-tree-timeline";

const App = () => {
    const data = [
        {
            date: "September 2020 - Present",
            title: "My Current Awesome Company",
            description: "I work here as a Frontend Developer",
        },
        {
            date: "September 2019 - August 2020",
            title: "My Previous Awesome Company",
            description: "I worked here as a Backend Developer",
        },
        {
            date: "December 2015 - February 2018",
            title: "My Previous Previous Awesome Company",
            description: "I worked here as a Software Analyst",
        },
    ];

    return <Timeline data={data} />;
};

ReactDOM.render(<App />, app);
```

You will get this, but it all depends on your customization now.

![Alt text](https://firebasestorage.googleapis.com/v0/b/online-storage-8b52c.appspot.com/o/react-tree-timeline%2FScreenshot1.png?alt=media&token=8c64b4f9-2e09-4f8d-938e-429470eeeaff)

## Styling & Props

---

For a full customization, understand the component structure.

![Alt text](https://firebasestorage.googleapis.com/v0/b/online-storage-8b52c.appspot.com/o/react-tree-timeline%2FScreenshot2.png?alt=media&token=b180aab8-cccc-46f0-94f0-b2300b17a76e)

### Customizing the Wrapper (wrapperClassName)

Pass a customized css class name to wrapperClassName prop. By default, it is a `display: flex` with `justify-content: center` to center the component. Override as you please.

```typescript
<Timeline data={data} wrapperClassName="wrapper" />
```

and in your css

```css
.wrapper {
    //customize here
}
```

### Customizing the Timeline (timelineClassName)

Pass a customized css class name to timelineClassName prop

```typescript
<Timeline data={data} timelineClassName="timeline" />
```

and in your css

```css
.timeline {
    //customize here
}
```

### Customizing the Timeline Item (timelineItemClassName)

Pass a customized css class name to timelineItemClassName prop

```typescript
<Timeline data={data} timelineClassName="timelineItem" />
```

and in your css

```css
.timelineItem {
    //customize here
}
```

### Customizing the Date (dateClassName)

Pass a customized css class name to dateClassName prop

```typescript
<Timeline data={data} dateClassName="date" />
```

and in your css

```css
.date {
    //customize here
}
```

### Customizing the Title (titleClassName)

Pass a customized css class name to titleClassName prop

```typescript
<Timeline data={data} titleClassName="title" />
```

and in your css

```css
.title {
    //customize here
}
```

### Customizing the Description (descriptionClassName)

Pass a customized css class name to descriptionClassName prop

```typescript
<Timeline data={data} descriptionClassName="description" />
```

and in your css

```css
.description {
    //customize here
}
```

### Customizing the Bar (uses the timelineClassName ::before selector )

Pass css class name to timelineClassName prop and customize the ::before selector

```typescript
<Timeline data={data} timelineClassName="timeline" />
```

and in your css

```css
.timeline::before {
    //customize here
}
```

### Customizing the Node (uses the dateClassName ::after selector )

Pass css class name to dateClassName prop and customize the ::after selector

```typescript
<Timeline data={data} dateClassName="date" />
```

and in your css

```css
.date::after {
    //customize here
}
```

## Example

```typescript
import React from "react";
import ReactDOM from "react-dom";
import Timeline from "react-tree-timeline";

const App = () => {
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

    return (
        <Timeline
            data={data}
            wrapperClassName="wrapper"
            titleClassName="title"
            dateClassName="date"
            descriptionClassName="description"
            timelineClassName="timeline"
        />
    );
};

ReactDOM.render(<App />, app);
```

css

```css
.wrapper {
    padding-top: 120px;
    padding-bottom: 120px;
    background: rgb(10, 25, 47) !important;
}

.title {
    margin-top: 0;
    margin-bottom: 10px !important;
    color: #ccd6f6;
}

.date {
    color: #8892b0;
}

.date::after {
    background-color: rgb(100, 255, 218) !important;
}

.description {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #8892b0;
}

.timeline::before {
    border-radius: 2px;
    background-color: rgba(255, 255, 255, 0.1);
}
```

![Alt text](https://firebasestorage.googleapis.com/v0/b/online-storage-8b52c.appspot.com/o/react-tree-timeline%2FScreenshot3.png?alt=media&token=1fc2e04e-1638-452b-82f2-84003d84a485)

## Extra (Animation)

---

To animate this component, you need to install and configure the [AOS animation library](https://github.com/michalsnik/aos) in your project.

![Animation Demo](https://firebasestorage.googleapis.com/v0/b/online-storage-8b52c.appspot.com/o/react-tree-timeline%2Fanimation.gif?alt=media&token=a1c3403f-10e7-4ecc-a80e-d145c3e27724)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
