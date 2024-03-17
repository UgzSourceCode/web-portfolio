# [009] Are git hooks necessary?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
Many projects utilize Git hooks. I will prepare arguments for and against their use in this project.

## Considered Options
- Yes
- No

### Yes 
Using Git hooks in the project.

Pros:
- Provides automated checks and processes before commits or pushes, enhancing code quality.
- Helps enforce project-specific standards and conventions, such as code formatting, linting, and testing requirements.

Cons:
- Requires initial setup and configuration, which may add overhead to project onboarding.
- Misconfigured hooks or conflicting scripts could lead to unexpected behavior or errors.
- May introduce delays if hooks are time-consuming or resource-intensive, impacting developer productivity.
- Can sometimes be bypassed or disabled, potentially undermining their effectiveness in maintaining code quality.

### No
Not using Git hooks in the project.

Pros:
- Simplifies project setup and reduces initial configuration overhead, especially for newcomers to the project.
- Avoids potential conflicts or unexpected behavior caused by misconfigured or conflicting hooks.
- Developers maintain full control over their workflow, without automated processes potentially interfering with their preferred practices.
- Eliminates the risk of hooks introducing delays or performance issues, as they are not executed automatically with each git action.


Cons:
- Misses out on automated checks and processes that could enhance code quality and enforce project standards.
- Increases reliance on manual interventions for tasks such as code formatting, linting, and testing, potentially leading to inconsistencies.
- Requires developers to remember to run these checks and processes manually, which could result in oversight or neglect.
- May lead to inconsistency across development environments if developers have different setups or preferences.

## Suggestion
In the project, a linter and formatter (biome) have been used without a plugin for WebStorm. Therefore, for better quality control, Git hooks would be a good improvement.

## Decision Outcome
In this project, Git hooks will be used to resolve the issue with the unavailability of the Biome plugin for WebStorm. Checking linting and formatting in the current project is quite fast, so it's not a problem.
