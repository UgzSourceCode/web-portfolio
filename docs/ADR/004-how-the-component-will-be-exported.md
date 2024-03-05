# [004] How the component will be exported?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
In React, there are a few ways to export a component. I should choose which one I want to use in this project.

## Considered Options
- Default Export
- Named Export (export during declaration)
- Named Export (export after declaration)

### Default Export
Example:
```typescript
const SomeComponent = () => {};
export default SomeComponent;
```

### Named Export (export during declaration)
Example:
```typescript
export const SomeComponent = () => {};
```


### Named Export (export after declaration)
Example:
```typescript
const SomeComponent = () => {};
export { SomeComponent };
```


## Suggestion
In one file, there can be multiple elements to export, so it's a good idea to choose the option with named export for better support of multiple exports.

## Decision Outcome
I choose named export during declaration because it looks cleaner to me and gives me better control inside files with multiple exports.