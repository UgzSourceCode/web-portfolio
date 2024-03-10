# Which linter and formatter will be better?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
For good code quality, it is necessary to have a linter and code formatter. The most popular ones are ESLint with Prettier, but these tools work quite slowly. If there is a faster alternative available, then I should use it.

## Considered Options
- Eslint + Prettier
- Biome.js

### Eslint + Prettier 
PoC link: [002-Eslint-linter.md](../PoC/002-Eslint-linter.md)

Pros:
- Support for many IEDs
- Large community
- Stability

Cons:
- Slow perfomance

### Biome.js
PoC link: [001-BiomeJS-linter.md](../PoC/001-BiomeJS-linter.md)

Pros:
- Fast performance
- Rapid improvement
- Moderate-sized community

Cons:
- Have few important issue
- Doesn't have plugin for WebStorm

## Suggestion
For this project, we can use a library without strong support. This feature is not critical, and it can be changed later if something goes wrong.

## Decision Outcome
BiomeJS has significantly better performance than ESLint with Prettier, and it has been tested on a small codebase. Therefore, for this project, I will use Biome.