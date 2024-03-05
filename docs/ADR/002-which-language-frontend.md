# [002] Which language will be better for the frontend of the portfolio?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
I have chosen a framework, but I am considering which languages could improve the readability and scalability of the code in the project.

## Considered Options
- JavaScript
- TypeScript

### JavaScript
The most popular web language.
Standard link: https://tc39.es/ecma262/2023/

Pros:
- Faster development at the project's outset - developers don't need to think about types. However, after this stage, developers lack types as documentation.

Cons:
- Lack of types - understanding how the code works requires more time.

### TypeScript
Typed language for web, which extends JavaScript.
Link: https://www.typescriptlang.org/

Pros:
- Code has types - types provide more knowledge when somebody reads the code.
- It is more readable.
- Support for new language functionality.
- It is compatible with JavaScript.

Cons:
- Slower development - the developer must remember to describe types in the code.

## Suggestion
This project is a showcase - I really don't know who and when will want to read it. Therefore, readability is of high priority.

## Decision Outcome
For the best readability, there is only one choice - TypeScript.