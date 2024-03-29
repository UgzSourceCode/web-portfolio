# [012] Is component documentation a good idea?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
I want to present my components without app, because I'm not sure that I have all ready before and of 100commits challenge.

## Considered Options
- Storybook
- Don't do that
- Docz

### Storybook
Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.

Link: https://storybook.js.org/

Pros:
- Provides a comprehensive environment for developing and testing UI components.
- Offers robust documentation features, making it easier to understand and showcase components.
- Widely adopted by the community, with extensive support and resources available.

Cons:
- Can be complex to set up and configure initially, especially for smaller projects.
- Requires additional effort to maintain alongside the main application codebase.
- May introduce overhead for projects with simpler component needs.

### Don't do that
I can skip building documentation of components.

Pros:
- Simplifies the development process by reducing the overhead of maintaining documentation alongside the codebase.
- Saves time and resources that would be spent setting up and configuring documentation tools.
- May be suitable for smaller projects with straightforward component needs, where extensive documentation is not a priority.

Cons:
- Lack of comprehensive documentation can make it harder for team members to understand and utilize components effectively.
- May lead to inconsistencies or misunderstandings in component usage across different parts of the project.
- Could hinder collaboration and onboarding of new team members who rely on thorough documentation to familiarize themselves with the codebase.

### Docz
Docz is a lightweight tool for creating documentation for React components.

Link: https://www.docz.site/

Pros:
- Easy to use and configure, especially for smaller projects.
- More focused on creating simple and user-friendly documentation.
- Can be faster to use than Storybook, which is useful when quick documentation is needed.

Cons:
- Less flexible and does not offer as advanced features as Storybook.
- Less popular than Storybook, which may result in less community support and available resources.
- May be less suitable for larger projects or projects requiring more advanced component testing and documentation features.

## Suggestion
For this small project, I need a quick option, but it's important to prioritize documentation.

## Decision Outcome
For this project, I chose Docz because it strikes a compromise between speed of creation and comprehensive component documentation.
