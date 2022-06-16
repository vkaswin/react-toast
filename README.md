# React Toast

> React Toast is a library for showing notifications in your app [DEMO](https://vkaswin.github.io/react-intro)

[![NPM](https://img.shields.io/npm/v/reactjs-toast.svg)](https://www.npmjs.com/package/reactjs-toast) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-toastify
```

## Usage

```jsx
import { Fragment } from "react";
import { ToastContainer, Toast } from "reactjs-toastify";

import "reactjs-toast/dist/index.css";

const Example = () => {
  const toggle = () => {
    Toast({
      type= "success",
      message = "Lorem Ipsum is simply dummy text of the printing",
    })
  }
  return (
    <Fragment>
      <button onClick={toggle}>Show Toast</button>
      <NotificationContainer />
    </Fragment>
  );
};
```

### Parameters

| Name           | Type    |                            Description                            |
| -------------- | ------- | :---------------------------------------------------------------: |
| `mesage`       | Boolean |                   Content to sjow in the toast                    |
| `type`         | String  |                           Type of toast                           |
| `delay`        | Number  |                It will delay the toast apperaence                 |
| `position`     | String  |               Position where will display the toast               |
| `pauseOnHover` | Boolean |            Stops the timer when hover the toast or not            |
| `closeIcon`    | Boolean |               Whether to show the close icon or not               |
| `theme`        | String  |                 Determines the theme of the toast                 |
| `color`        | String  | It will change the default color of the toast (string, rgba, hex) |

## License

MIT © [https://github.com/vkaswin/react-toast.git](https://github.com/https://github.com/vkaswin/react-toast.git)
