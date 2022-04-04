# Hooks In React

## useState

=> useState hook is a function which is used to store state value in a functional component. It accepts an argument as the initial value of the state. It returns an array with 2 elements. First element is the current value of state. Second element is a function to update the state.

=> import React, {useState} from "react";

=> const [currentStateValue, functionToUpdateState] = useState(initialStateValue);

## useEffect

=> We can use this effect to replicate events like componentDidUpdate, componentDidMount, componentWillUnmount and shouldComponentUpdate

## useContext

=> useContext hook allows passing data to children elements without using redux.

=> It’s an easy alternative to Redux if we just need to pass the data to the children elements.

=> Just Create context through createContext and use through useContext

## useCallback - similar(useMemo)

=> React's useCallback Hook can be used to optimize the rendering behavior of your React function components.

=> useCallback is hook that will return a memoized version of the callback function that only change if one of the dependencies has changed.

=> performance optimization hook

=> why we use Callback

=> it is useful when passing callbacks to optimized child component that rely on reference equality to prevent unnecesary renders. 

=> Returns a memoized callback.


## useLayoutEffect - similar(useEffect)

=> useLayoutEffect has the very same signature as useEffect

=> The function passed to useEffect fires after layout and paint. i.e after the render has been committed to the screen.
Q. Where You can use useLayoutEffect

A. There are cases where you may not want the behaviour useEffect provides. e.g. if you need to make a visual change to the DOM as a side effect. To prevent the user from seeing flickers of changes, you may use useLayoutEffect

=> The function passed to useLayoutEffect will be run before the browser updates the screen.

The Difference Between useEffect and useLayoutEffect
It’s all in the timing.

useEffect runs asynchronously and after a render is painted to the screen.

So that looks like:

You cause a render somehow (change state, or the parent re-renders)
React renders your component (calls it)
The screen is visually updated
THEN useEffect runs
useLayoutEffect, on the other hand, runs synchronously after a render but before the screen is updated. That goes:

You cause a render somehow (change state, or the parent re-renders)
React renders your component (calls it)
useLayoutEffect runs, and React waits for it to finish.
The screen is visually updated

## useMemo

=> Returns a memoized value.

=> This prevents the needless re-render.

## useRef

=> returns a 'ref' object.

=> const refContainer = useRef(initialValueToBePersisted)

=> Value is persisted(સતત) in the refContainer.current property.

=> values are accessed from the .current property of the returned object.

=> The.current property could be initialised to an initial value e.g. useRef(initialValue)

=> The object is persisted for the entire lifetime of the component.

=> Accessing the DOM nodes or React elements

=> Instance Like Variables (Generic Container)

=> More Info -> https://react-hooks-cheatsheet.com/useRef
## useReducer

=> useReducer is one of a handful of React hooks that shipped in React 16.7. 0. 

=>It accepts a reducer function with the application initial state, returns the current application state, then dispatches a function.

## useId
=> is a new hook for generating unique IDs on both the client and server, while avoiding hydration mismatches.
=> It is primarily useful for component libraries integrating with accessibility APIs that require unique IDs. 
=> This solves an issue that already exists in React 17 and below, but it’s even more important in React 18 because of how the new streaming server renderer delivers HTML out-of-order.
## startTransition and useTransition
=> let you mark some state updates as not urgent. Other state updates are considered urgent by default. React will allow urgent state updates (for example, updating a text input) to interrupt non-urgent state updates (for example, rendering a list of search results).
## useDeferredValue
 => lets you defer re-rendering a non-urgent part of the tree. It is similar to debouncing, but has a few advantages compared to it. There is no fixed time delay, so React will attempt the deferred render right after the first render is reflected on the screen. The deferred render is interruptible and doesn't block user input.

## useSyncExternalStore
=> is a new hook that allows external stores to support concurrent reads by forcing updates to the store to be synchronous. It removes the need for useEffect when implementing subscriptions to external data sources, and is recommended for any library that integrates with state external to React.
## useInsertionEffect 
is a new hook that allows CSS-in-JS libraries to address performance issues of injecting styles in render. Unless you’ve already built a CSS-in-JS library we don’t expect you to ever use this. This hook will run after the DOM is mutated, but before layout effects read the new layout. This solves an issue that already exists in React 17 and below, but is even more important in React 18 because React yields to the browser during concurrent rendering, giving it a chance to recalculate layout.