# Async thunks

- Do not make request in reducers (redux store)
- Reducers should always be 100% synchronous
- Reducers should onlye operate on their arguments - no outside variables.