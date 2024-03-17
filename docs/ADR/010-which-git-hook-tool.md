# [010] Which git hook tool are better for this project?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
In spike [Are Git hooks necessary?](009-are-git-hooks-necessary.md) are decide than we need git hooks for better code quality. So now is necessary decision how it should be done.

## Considered Options
- Basic Git hooks
- Husky

### Basic Git hooks
Git have some basic mechanism for hooks.

Link: https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks

Pros:
- Enables customization of pre-defined Git actions, allowing for automation of various processes such as code validation, testing, or deployment.
- Integrates seamlessly with existing Git workflows, providing flexibility in enhancing development practices without disrupting established processes.
- Facilitates consistent enforcement of project-specific standards and conventions across all contributors, improving overall code quality and maintainability.
- Provides visibility into key events in the Git workflow, enabling better collaboration and coordination among team members.

Cons:
- Requires careful configuration and management to ensure hooks behave as intended, which may introduce complexity, especially in larger projects.
- Can be bypassed or overridden by developers, potentially compromising the effectiveness of enforced processes and standards.
- May increase overhead and maintenance burden, particularly if hooks require frequent updates or modifications to adapt to evolving project requirements.
- Limited in scope compared to more sophisticated automation tools, potentially lacking advanced features or integrations available in dedicated CI/CD platforms.

### Husky
Husky is a tool for managing Git hooks; with it, developers can easily create scripts.

Link: https://typicode.github.io/husky/how-to.html

Pros:
- Provides a user-friendly interface for configuring and managing Git hooks, simplifying the setup and maintenance process.
- Offers enhanced flexibility and functionality compared to standard Git hooks, allowing for more complex automation workflows and integration with external tools.
- Facilitates consistency across development environments and team members, ensuring that Git hooks are applied uniformly and reliably.

Cons:
- Requires additional dependencies and setup compared to using standard Git hooks, potentially increasing project complexity and build times.
- May introduce a learning curve for developers unfamiliar with Husky or advanced Git hook configurations.
- Relies on third-party tooling, which could pose compatibility issues or require maintenance as Husky and related dependencies evolve.

## Suggestion
Husky is more user-friendly option. Give easy to use interface gor configuration and managing Git hooks.

## Decision Outcome
In this project, Husky will be used because it provides better possibilities for managing hooks.
