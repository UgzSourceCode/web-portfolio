# [001] Which framework will be better for the frontend of the portfolio?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
I must decide which framework is better for my portfolio web application. I will use the best option for final result.

## Considered Options
- Vanilla
- React
- Angular
- Vue.js

### Vanilla
It's an option for a project without libraries or frameworks.

Pros:
- It's lightweight for small functions.
  It can be minimalistic, aligning well with the project's simplicity goals.
- Full control over the code.
- Doesn't require any external dependencies.

Cons:
- It's harder to cooperate with other people.
- In a Vanilla project, we must write more code.
- Slower development.

### React
It's popular library for web application.
Link: https://react.dev/

Pros:
- Provides the possibility to create reusable components.
- Large community and a plethora of tutorials available.
- Faster development.
- External dependencies can be easily integrated with React.
- Does not impose a specific architecture like frameworks do.
- React's virtual DOM optimizes performance and reduces unnecessary re-renders.
- Offers a wide range of tools to enhance development.
- Offers better visibility in search engines compared to other frameworks and libraries.
- Offers more stability due to the one-way data stream (from parent components to child).

Cons:
- Planning the file schema is necessary for React apps.
- Loading the React library into the app is required.
- It may not be as optimal for SEO content indexing compared to frameworks with built-in optimizations for search engine visibility.
- Does not include a state manager.

### Angular
It's popular framework for web application.
Link: https://angular.io/

Pros:
- Angular provides an opinionated architecture (MVC), saving time on decision-making.
- Faster development.
- Large community and excellent documentation.
- Ivy rendering optimizes app size and aids in supporting various browsers.
- External dependencies can be integrated with Angular.
- Include a state manager.

Cons:
- Angular provides an opinionated architecture (MVC), which may not always be the best approach.
- It may not be as optimal for SEO content indexing compared to frameworks with built-in optimizations for search engine visibility.
- Angular has a complex structure.
- Requires RxJS for asynchronous programming.

### Vue.js
Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces.
Link: https://vuejs.org/

Pros:
- It's the smallest library among those listed in this document.
- It boasts a sizable community, albeit smaller than that of React or Angular.
- Have virtual DOM to optimize re-renders.
- Comes with Vuex, an embedded state manager.
- Easy to learn.

Cons:
- It may not be optimal for SEO content indexing compared to frameworks with built-in optimizations for search engine visibility.
- Offers fewer tools compared to Angular or React.

## Suggestion
Working with frameworks and libraries is much easier and faster because there are many components available in the node modules that can be used in this project. To address SEO issues, I can try preparing statically rendered files, which will also improve performance.

## Decision Outcome
I choose React because it offers a compromise between a large community and package size. Other arguments in favor of React include:
- Fast development - as mentioned in the [assumptions](../assumptions.md), we prioritize time and consider it to be of low priority.
- Better for SEO (excluding vanilla and static HTML pages).
- Good performance thanks to the virtual DOM.