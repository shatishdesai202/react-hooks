# Hooks In React

## useState

=> useState hook is a function which is used to store state value in a functional component. It accepts an argument as the initial value of the state. It returns an array with 2 elements. First element is the current value of state. Second element is a function to update the state.

=> import React, {useState} from "react";

=> const [currentStateValue, functionToUpdateState] = useState(initialStateValue);

useEffect

=> We can use this effect to replicate events like componentDidUpdate, componentDidMount, componentWillUnmount and shouldComponentUpdate

useContext

=> useContext hook allows passing data to children elements without using redux.

=> It’s an easy alternative to Redux if we just need to pass the data to the children elements.

=> Just Create context through createContext and use through useContext

useCallback - simmular(useMemo)

=> React's useCallback Hook can be used to optimize the rendering behavior of your React function components.
=> useCallback is hook that will return a memoized version of the callback function that only change if one of the dependencies has changed.
=> performance optimization hook
=> why we use Callback
=> it is useful when passing callbacks to optimized child component that rely on reference equality to prevent unnecesary renders. 
=> Returns a memoized callback.


useLayoutEffect
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

useMemo
=> Returns a memoized value.
=> This prevents the needless re-render.

useRef

=> returns a 'ref' object.
=> const refContainer = useRef(initialValueToBePersisted)
=> Value is persisted(સતત) in the refContainer.current property.
=> values are accessed from the .current property of the returned object.
=> The.current property could be initialised to an initial value e.g. useRef(initialValue)
=> The object is persisted for the entire lifetime of the component.

=> Accessing the DOM nodes or React elements
=> Instance Like Variables (Generic Container)
=> More Info -> https://react-hooks-cheatsheet.com/useRef


useReducer
=> useReducer is one of a handful of React hooks that shipped in React 16.7. 0. It accepts a reducer function with the application initial state, returns the current application state, then dispatches a function.
