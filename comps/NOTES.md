# Important notes

## Tailwind

    - The className soup is going to force you to write smaller and more reusable components.

### Using tailwind

    - Decide on a new styling rule you want to add
    - Go to tailwindcss.com/docs
    - Smash Control+k (Command+K) as hard as possible
    - Search for your styling rule
    - Add appropiate className to your elements

## Proptypes

    - Prop validation type

## classnames

    - Js library for building up a 'className' string based on different values
    - Library is called 'classnames', but prop is 'className'

## React icons

    - https://react-icons.github.io/react-icons/

## Component vs Page

### Component

    - Reusable React component that shows a handful of elements
    - Button, IMageShow, ProductList, Dropdown, SearchBar, Checkbox

### Page

    - Still a React component
    - Not intended to be reused
    - CheckoutPage, ProductPage, LoginPage, LandingPage, RentalPage, CartPage

## Events + State Design Process

- What state event handlres are there?
    1. List out what a user will do and changes they will see while using your app.
    2. Categorize each step as 'state' or 'event handler'
    3. Group common steps. Remove duplicates. Rewrite descriptions.
- What name and type?
    4. Look at mockup. remove or simplify parts that arent changing.
    5. Replace remaining elements with text descriptions
    6. Repeat #4 and #5 with a different variation
    7. Imagine you have to write a function that returns the text of steps #5 and #6. In addition to your component props, what other arguments would you need?
- Where's it defined?
    8. Decide where each event handler + state will be defined.

### Example for design Accordion Component

- What state event handlres are there?

    1. How would a user describe using this app step by step

        1.1. Clicked on third section
        1.2. First section collapsed
        1.3. Third section expanded
        1.4. Clicked on second section
        1.5. Third section collapsed
        1.6. Second section expanded

    2. Categorize each step as 'state' or 'event handler'

        - User sees something on the screen change -> We probably need state to implement this step
        - User committed some action -> We probably need an event handler to implement this

        2.1. Clicked on third section -> We probably need an event handler to implement this
        2.2. First section collapsed -> We probably need state to implement this step
        2.3. Third section expanded -> We probably need state to implement this step
        2.4. Clicked on second section -> We probably need an event handler to implement this
        2.5. Third section collapsed -> We probably need state to implement this step
        2.6. Second section expanded -> We probably need state to implement this step

    3. Group common steps. Remove duplicates. Rewrite descriptions.

        Group

        Group 1

        - Clicked on third section -> We probably need an event handler to implement this
        - Clicked on second section -> We probably need an event handler to implement this

        Group 2

        - First section collapsed -> We probably need state to implement this step
        - Third section expanded -> We probably need state to implement this step
        - Third section collapsed -> We probably need state to implement this step
        - Second section expanded -> We probably need state to implement this step

        Remove duplicates

        Group 1

        - Clicked on third section -> We probably need an event handler to implement this

        Group 2

        - First section collapsed -> We probably need state to implement this step

        Rewrite descriptions

        - Clicked on a section header -> Event handler
        - One section is expanded, all others are collapsed -> State

- What name and type?

        Ideally, avoid arrays/objects. Use number, boolean, string
    
    4. Look at mockup. remove or simplify parts that arent changing.

        - Delete for example text because doesnt change.
    
    5. Replace remaining elements with text descriptions

        - Expanded
        - Collapsed
        - Collapsed

    6. Repeat #4 and #5 with a different variation

        Look at mockup. remove or simplify parts that arent changing.

            - Delete for example text because doesnt change.
    
        Replace remaining elements with text descriptions

            - Collapsed
            - Collapsed
            - Expanded
    
    7. Imagine you have to write a function that returns the text of steps #5 and #6. In addition to your component props, what other arguments would you need?

        ```javascript
        myFunction(propsItems, /* ?? */); // ['Expanded', 'Collapsed', 'Collapsed']
        myFunction(propsItems, /* ?? */); // ['Collapsed', 'Collapsed', 'Expanded']

        myFunction(propsItems, 0); // ['Expanded', 'Collapsed', 'Collapsed']
        myFunction(propsItems, 2); // ['Collapsed', 'Collapsed', 'Expanded']
        ```

    8. Decide where each event handler + state will be defined.

        - Does any component besides Accordion reasonably need to know wich item is expanded?
            - Yes -> Define in App (Parent)
            - No -> Define in Accordion
        
    9. Final Design

        - Event handler should be usually be defined in same component as state it modifies
        - It might be used in a different component

        - Accordion
            - state: expandedIndex -> number
            - event: handleClick


## Functional version STATE

- Use if new value depends on old, use that if we have conditionals that depends of old state. Usually happens because React knows that have to render or update state but this take some time (batching) 

Example:

```javascript
const handleClick = (nextIndex) => {
        setExpandedIndex((currentIndex) => {
            return (nextIndex === currentIndex) ? -1 : nextIndex;
        });
    }
```

## Reusable Components

1. Create a new component that shows a handful of JSX elements
2. Make sure the component accepts + uses the 'children' prop
3. Allow extra classNames to be passed in + merge them
4. Take extra props, pass them through to root element

## useRef Hook

- Allows a component to get a reference to a DOM element that it creates
- 95% of the time used with DOM elements, but can hold a reference to any value
- Implementation:
    1. Create a ref at the top of your component by calling 'useRef'
    2. Assign the ref to a JSX element as a prop called 'ref'
    3. Access that DOM element with 'ref.current'

## position CSS property

- Absolute

    Puts the element

    - At the top left corner of the closest parent with a position other than 'static'

- className inset-0

    - If the element is position: abosolute, the element will expand to fill the height and width of the closest parent with a non-static position.

## Lipsum

- https://www.lipsum.com/
