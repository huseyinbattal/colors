# Context-React

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

<img align-items="center" width="504" alt="context" src="https://user-images.githubusercontent.com/95706081/176916935-66598118-a7b2-4bc4-90e0-8fe9409c26f3.png">
