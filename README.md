# react-native-web-starter

starter for building an application that shares behaviour between
mobile, ios, and android clients.

## Quickstart
To develop on web:
```shell
webpack --watch
cd dist && php -S localhost:8080 # open your favorite dev server in the /dist folder
```

To develop on android or ios:
```
react-native start
react-native run-ios
react-native run-android
```

## Overview

### ES6 Basics

ES6 (ECMAScript6) is a modern version of javascript. The most important things
it adds are _modules_ and _arrow functions_.

```javascript
const arrowFunction = () => {
    console.log("this is a function with lexically scoped `this`")
};

const defaultExportedValue = () => {
    console.log("this will be the default export")
};

export default defaultExportedValue;
export const nonDefaultExport = () => {
    console.log("this is not a default export")
}

// this imports the default export into the current scope from ./some-file.js
// and names it 'someFileDefaultExport'
import someFileDefaultExport from './some-file'

// this imports some other exported member into the current scope from
// ./some-file-2.js
import {nonDefaultExport} from './some-file-2'

// this imports both the default and some non-default members into the
// current scope from ./some-file-3.js
import defaultExport2 {nonDefaultExport2} from './some-file-3'

```

### User Interface

[React](https://facebook.github.io/react/) is used for the interface of this
application. React models the UI as a tree of components, which are marked up
with an embedded XML-like language inside javascript (JSX)

```jsx
<View style={some.javascript.value} className="or-a-string">
    <Text>
        Raw text can go in some elements as well
    </Text>
</View>
```

1. component `props` are things which do not change over the lifetime of a component
  (e.g. the images available in a carousel)
2. component `state` is internals of a component which can change over it's
  lifetime (e.g. the current active image of a carousel)
3. changes to `props` or `state` trigger a re-render of a component

### Data Flow

This application uses [Redux](https://github.com/reactjs/redux) for state
management, The skinny of the redux data model is:

```

    ┏━━━━━━━┓     ┏━━━━━━━━━┓     ┏━━━━━━━━━━━┓
    ┃ state ┃ ══> ┃ reducer ┃ ══> ┃ new state ┃
    ┗━━━━━━━┛     ┗━━━━━━━━━┛     ┗━━━━━━━━━━━┛
                       ^
                       ║
                  ┏┈┈┈┈┈┈┈┈┓
                  ┊ action ┊
                  ┗┈┈┈┈┈┈┈┈┛

```

- The **Store** holds data
- **Actions** are **dispatched** to by your application, and consumed by **reducers**
- **Reducers** create a new state from the previous state and an action

Note that a reducer must create a new state object on change, and
_**must not mutate the previous state**_

### Connecting Data to the UI

[React-Redux](https://github.com/reactjs/react-redux) is used to connect
React and Redux. react-redux provides a way to easily update react props when
the store changes

- A **`<Provider/>`** exposes a store to React
- `connect` wraps components and updates their props when the store changes

#### Example of wrapping a component

```javascript
import {connect} from "react-redux"

// gets values from state and maps them to component props
// here ownProps are the properties passed to the wrapped component
const mapStateToProps = (state, ownProps) => ({
        someProp: state.someValue,
    })

// here we wrap actions in the dispatch function
// and our component will call them via
// this.props.dispatchSomeAction(..)
const mapDispatchToProps = (dispatch, ownProps) => ({
        dispatchSomeAction: (some, action, params) =>
            dispatch(someAction(some, action, params))
    })

const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(SomeComponent)
```

The `ConnectedComponent` is subscribed to changes to the store, and will
re-render when `state.someValue` updates

### Building Different Components on Mobile and Web
when you import a module, depending on the platform you are building for, the
filename will resolve differently. You need to ensure that the components
exported from these modules accept the same arguments

| platform | import                     | default          | fallback   |
| -------- | -------------------------- | ---------------- | ---------- |
| web      | `import foo from './foo'`  | `foo.web.js`     | `foo.js`   |
| android  | `import foo from './foo'`  | `foo.android.js` | `foo.js`   |
| ios      | `import foo from './foo'`  | `foo.ios.js`     | `foo.js`   |
