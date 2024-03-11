# [006] Which component library is better for this project?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
For create component in effective way is needed some component library. Which can help with:

- Delivering additional components
- Avoiding repeated styles
- Providing control over styling without the need for writing traditional CSS stylesheets

## Considered Options
- Material UI
- Chakra UI
- Styled component
- Tailwind

### Material UI
It's a popular component library for React that implements Google Material Design.

Link: https://mui.com/material-ui/

Pros:
- Well-designed components 
- Easy to use
- Customizable 
- Large community support
- Complete control over styling without the need for writing traditional CSS stylesheets
- Multiple ways to style components:
  - Theme customization
  - CSS classes customization
  - Custom component creation

Cons:
- Large size
- Some components can be more complicated than necessary

### Chakra UI
Chakra UI is a popular React component library known for its simplicity and flexibility in building user interfaces.

Link: https://chakra-ui.com/

Pros:
- Clean and modern designs
- Intuitive API, making it easy to use and learn
- Highly customizable, allowing developers to create unique designs
- Active and supportive community, providing resources and assistance
- Complete control over styling without the need for writing traditional CSS stylesheets
- Multiple ways to style components:
  - Styled component
  - Modifier styles by inline code
  - Modifier styles by variants

Cons:
- Relatively smaller community compared to some other libraries
- Limited documentation for certain advanced features

### Styled component
Styled Components is a popular library for styling React components using tagged template literals. It allows developers to write CSS directly inside their JavaScript code, creating self-contained components with encapsulated styles.

Link: https://styled-components.com/

Pros:
- Seamless integration with React components, enabling easy styling without external CSS files
- Encourages component-based architecture, promoting reusability and maintainability
- Active community and extensive documentation, providing resources and support for developers
- Offers powerful features such as nesting, theming, and global styles, enhancing styling capabilities
- Complete control over styling without the need for writing traditional CSS stylesheets

Cons:
- Build-time overhead due to generating unique class names for each styled component, potentially impacting performance
- Limited support for server-side rendering (SSR) compared to traditional CSS approaches, although improvements are continuously made

### Tailwind
Tailwind CSS is a utility-first CSS framework that provides a set of pre-built utility classes for styling HTML elements. It offers a highly customizable approach to building user interfaces by applying utility classes directly to HTML elements, eliminating the need for writing custom CSS.

Link: https://tailwindui.com/

Pros:
- Minimal setup and configuration, allowing developers to quickly get started with building UIs
- Modular and composable utility classes, enabling rapid prototyping and easy customization
- Complete control over styling without the need for writing traditional CSS stylesheets
- Excellent performance with a smaller file size compared to traditional CSS frameworks like Bootstrap
- Extensive documentation and a supportive community, offering tutorials, guides, and resources for learning and troubleshooting

Cons:
- Large HTML file sizes can result from using many utility classes, potentially impacting page load times
- Limited flexibility in terms of custom designs and complex layouts compared to hand-crafted CSS styles
- Steeper learning curve for developers accustomed to traditional CSS approaches due to the utility-first paradigm

## Suggestion
In this project, Biome is used without linting CSS files, so a good option would be to choose a component library that provides styles in JSON or JavaScript/TypeScript format.

## Decision Outcome
For this project, I chose Chakra UI because it offers a good compromise between performance and code readability. To modify styles, I plan to use custom variants.