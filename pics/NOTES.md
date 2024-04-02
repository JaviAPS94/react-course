## Notes

- When you update state, the component and all of its children are rerendered
- From the perspective of 'App' images is state
- From the perspective of 'ImageList' images is props
- Apply keys to elements is for react just re render specific changes

### Requirements for Keys

- Use whenever we have a list of elements
- Add the key to the top-most JSX element in the list
- Must be a string or number
- Should be unique for this list
- Should be consistent across re renders