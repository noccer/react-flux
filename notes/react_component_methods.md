## React Component Lifecycle Methods

### Mounting
These methods are called when an instance of a component is being created and inserted into the DOM:

- constructor()
- componentWillMount()
- render()
- componentDidMount()

### Updating
An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

### Unmounting
This method is called when a component is being removed from the DOM:

- componentWillUnmount()
