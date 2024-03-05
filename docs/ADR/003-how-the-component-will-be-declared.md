# How the component will be declared?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
In React, there are a few ways to declare a component. I should choose which one I want to use in this project.

## Considered Options
- Functional component
- Class component

### Functional Component
It's component described as function. It can be classic or an array function.
Example:
- classic function component
```typescript jsx
function SomeComponent() {
    return (
        <p>Some text</p>
    );
}
```
- array function component
```typescript jsx
const SomeComponent = () => {
    return (
        <p>Some text</p>
    );
};
```

Pros:
- Simplicity
- Lack of state - making them lighter and more efficient

Cons:
- Lack of access to component lifecycle methods
- Lower flexibility

### Class Component
It's component described as class.
Example:
```typescript jsx
class SomeComponent extends React.Component {
    render() {
        return (
            <p>Some text</p>
        );
    };
}
```

Pros:
- Access to component lifecycle methods
- Greater flexibility in more advanced scenarios

Cons:
- More complex
- State management required
- Lower performance

## Suggestion
For this project, one of assumption is easy to read and understand code. For this option in my opinion, better way is using function components everywhere it's possible. 

## Decision Outcome
The decision is to use function arrow components everywhere they can work fine. They are cleaner to read and have better performance.