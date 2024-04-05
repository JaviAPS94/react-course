### Notes

## Cheat sheet for handle elements

- https://state-updates.vercel.app/

## Random images

- https://picsum.photos

## Use Effect

- Function that we import from React
- Used to tun code when a component is initially rendered and (sometimes) when it is rendered
- First argument is a function that contains code we eant to run
- Second is an array or nothing - this controls whether the funtion is executed on rerenders

```javascript
useEffect(() => {
        fetchBooks()
    }, [])
```

- Rules
    - Second argument is []
        - Called after first render
        - Never called again
    - Second argument is -
        - Called adter first render
        - Also called after every render
    - Second argument is [counter]
        - Called after first render
        - Also called after rerenders if 'counter' variable changed

## Important notes

### Context

    - Context is not a replacement for props
    - Context is not a replacemente for Redux
    - Steps to define a context:
        - Create context
        - Specify the data that will be shared
        - Consume the data
    - Context has 2 properties:
        - Provider: Component used to specify what data we want to share
        - Consumer: Component used to get acces to data. Not oftend used

### App State vs Component State

    - App state
        - Data that is used by many different components
    - Component state
        - Data that is used by very few component

### Hooks

Functions that add additional features to a component

    - useState: Allows a component to use the state system
    - useEffect: Allows a component to run code at specific points in time
    - useContext: Allows a component to access values stored in context

### Custom Hooks

    - Functions we write to make reusable bits of logic
    - Usually reuse basic hooks like useState, useEffect, etc
    - Can do a lot or very little

### Use Callback Hook

    - Hook to help you tell React taht your function isnt actually changing over time.
    - Fixes bugs around useEffect and other similiar situations.
    - Follows similiar conventions as useEffect
    - If second argument is an empty array, useCallback gives you back the original funciton from first render.


### CleanUp function

    - Its a function that return useEffect and its executed the next time that component is re rendered before execute function inside useEffect (depending useEffect conditions)