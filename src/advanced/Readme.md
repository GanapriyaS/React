# Advanced React

## Basic Hooks

- useState
- useEffect
- useContext

## Additional Hooks

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue
- useDeferredValue
- useTransition
- useId

---

## useState

- Basics
- Array
- Object
- Counter

## useEffect

- Basics
- Conditional
- Dependency List
- Cleanup Function
- Fetch data

## Conditional Rendering

- Multiple returns
- Short Circuit ( condition inside return)
- eg) show hide

## Forms

- Basics
- Controlled Inputs
- Add Item to the list
- Multiple Inputs

## useRef

## useReducer

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

The useReducer hook is usually recommended when the state becomes complex, with state values depending on each other or when the next state depends on the previous one. However, many times you can simply bundle your separate useState statements into one object and continue to use useState.

- UseState SetUp
- Refactor
- Add Item
- Remove Item

## Prop Drilling

- context API will overcome this defect

## useContext

- Context API

## useFetch

- Custom hooks

## Prototypes

- SetUp
- Images
- Default Values

## React Router

!(react router)[https://reactrouter.com/web/guides/quick-start]

```
npm install react-router-dom

```

- Basics
- Error and Switch Component
- Links
- URL Params and Placeholder

## React Optimization warning

## React.memo

## useCallback

## useMemo
