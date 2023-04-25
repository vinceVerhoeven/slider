# React slider

This package contains a basic modern slider. The purpose of this slider is to provide a simple React component
which can be controlled in a userfriendly way on mobile, tablet and desktop.

Demo page: https://yoursurprisecom.github.io/slider/

This slider has the following features:

- Free scroll on mobile with native CSS scroll snapping
- Drag to scroll on devices with a mouse
- Buttons to navigate on devices with a mouse
- Support for multiple variable width slides

Todos (help appreciated):

- ~~Add a demo page~~
- Add more configuration
- Add end-to-end tests
- ~~Set up proper workflows in GitHub~~
- ~~Set the GitHub repository to public~~
- Support more browsers
- Improve accessibility
- Reduce amount of required tooling

All browsers with [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
will be supported, as of right now, only the latest versions of browsers are supported.

## Installation

### npm

`npm install @yoursurprise/slider --save`

### yarn

`yarn add @yoursurprise/slider`

### Import the CSS files

```javascript
import "@yoursurprise/slider/dist/index.css";
```

### Implement the Slider

```javascript
import {Slider} from '@yoursurprise/slider';
import '@yoursurprise/slider/dist/index.css';

export default function YourComponent() {
    return (
        <Slider>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </Slider>
    );
}
```

### Configuration

| Option                | Type       | Required | Default     | Description                                             |   
|-----------------------|------------|----------|-------------|---------------------------------------------------------|
| hideNavigationButtons | `boolean`  | `false`  | `false`     | Always hides the navigation buttons                     |
| initialSlideIndex     | `number`   | `false`  | `0`         | Open the Slider at a specific index                     |
| onSlide               | `function` | `false`  | `undefined` | A callback function that is called when the user slides |

### API

| API method                     | Type       | Returns  | Description                                  |   
|--------------------------------|------------|----------|----------------------------------------------|
| getFirstFullyVisibleSlideIndex | `function` | `number` | Retrieve the first fully visible slide index |
| getLastFullyVisibleSlideIndex  | `function` | `number` | Retrieve the last fully visible slide index  |
| scrollToSlide                  | `function` | `void`   | Scroll the slider to a specific slide        |

#### Example on how to access the slider API:

```javascript
export default function YourComponent() {
    const sliderApi = useRef();

    useEffect(() => {
        if (sliderApi.current) {
            sliderApi.current.getFirstFullyVisibleSlideIndex();
        }
    }, [sliderApi.current]);

    return (
        <Slider ref={sliderApi}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </Slider>
    );
}
```
