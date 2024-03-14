# [008] Which flow is better for this project?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
For working with Git, a good practice is to declare and describe which flow will be used. It provides better quality of history.

## Considered Options
- Git Flow
- GitHub Flow

### Git Flow

Git Flow is a branching model and set of conventions for managing and organizing Git repositories.

Git Flow defines a strict branching model that facilitates collaboration and release management in software development projects. It consists of several branch types, including feature branches, release branches, and hotfix branches, each serving a specific purpose in the development lifecycle.

Pros:
- Clear and structured workflow: Git Flow provides a clear and well-defined workflow for managing feature development, release cycles, and bug fixes.
- Separation of concerns: By segregating different types of changes into separate branches, Git Flow helps maintain a clean and organized repository structure.
- Support for parallel development: The use of feature branches allows multiple developers to work on different features simultaneously without interfering with each other's work.
- Facilitates release management: Release branches enable smooth and controlled deployment of new features and bug fixes to production environments.

Cons:
- Complexity: Git Flow introduces additional complexity to the Git workflow, which may be overwhelming for smaller teams or simpler projects.
- Overhead: Maintaining multiple long-lived branches can lead to overhead in terms of branch management and merging efforts.
- Lack of flexibility: The rigid structure of Git Flow may not fit all development workflows, especially in agile or rapidly changing environments.

### GitHub Flow

GitHub Flow is a lightweight, branch-based workflow that supports collaboration and continuous delivery in software development projects.

GitHub Flow is a simplified and flexible workflow that revolves around branches and pull requests. It emphasizes continuous integration and delivery, enabling teams to deploy changes quickly and safely to production environments.

Pros:
- Simplicity: GitHub Flow is straightforward and easy to understand, making it suitable for teams of all sizes and experience levels.
- Fast iteration: The use of feature branches and pull requests allows for rapid iteration and feedback cycles, enabling teams to deliver value to users more frequently.
- Collaboration: GitHub Flow encourages collaboration through pull requests, code reviews, and discussion threads, fostering a culture of teamwork and knowledge sharing.
- Continuous delivery: By promoting small, incremental changes and frequent deployments, GitHub Flow facilitates a continuous delivery mindset, leading to faster time-to-market and improved product quality.

Cons:
- Lack of formal release management: GitHub Flow does not provide explicit support for release branches or versioning, which may be challenging for projects with strict release schedules or complex dependency management.
- Dependency on pull requests: While pull requests are a powerful collaboration tool, they can also introduce bottlenecks and delays if not managed effectively.
- Potential for chaos: GitHub Flow's flexibility can lead to chaos if not accompanied by clear guidelines and discipline within the team, especially in larger projects or organizations.



## Suggestion
For this project, the better option is a lightweight and flexible workflow because it's a small project that requires fast delivery of changes.

## Decision Outcome
The decision is to use GitHub Flow, as it will facilitate fast delivery of changes and prepare fresh commits for the 100 commits challenge.