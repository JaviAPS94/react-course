## React events documentation

- https://react.dev/reference/react-dom/components/common

## Using Events

1. Decide what kind of event you want to watch for
2. Create a function. Usually called an event handler or callback function
3. Name the function using pattern of handle + EventName (Not a requirement! Community convention)
4. Pass the function as a prop to a plain element
5. Make sure pass the function using a valid event name('onClick','onMouseOver', etc)
6. Mkae sure you pass a reference to the function(dont call it)

## State

- Data that changes as the user interacts with our app
- When this data changes, React will update content on the screen automatically
- This is the one-and-only way we can change what content React shows.

## Important

- Use the state system when you want to update content on the screen
- Calling 'useState' defines a new piece of state
- The first argument to 'useState' is used as the initial value
- Updating state is done only using the setter function
- Calling the setter function causes React to rerender the component