# [014] which tool for checking library updates?
[< Back to ADR's list](README.md)

## Context and Problem Statement
Sometimes there is a need to update npm packages. This can be done manually or with some tools to check for the newest versions.

## Considered Options
- Without tool
- Npm Check Updates

### Without tool
In this option, we need to visit library websites or the npm site to check the current versions of libraries.

Pros:
- We must open the documentation or npm page to check the newest version, so it's more likely to see information about new issues, breaking changes, etc.

Cons:
- It's slower

### Npm Check Updates
It's tool to check and update libraries from npm.

Website: [Npm Check Updates - npmjs.com](https://www.npmjs.com/package/npm-check-updates)

Pros:
- Faster access to information for comparing versions (current and newest).

Cons:
- We must remember to check what is in the changelogs of libraries

## Suggestion
We need some easier option.

## Decision Outcome
Npm Check Updates was installed in the root directory and used to update packages. In the root `package.json`, a new script was created to check versions in `web-app`, so it is possible to use it with both the root and web-app `package.json`. For the root, you should run:
```bash
$ ncu
```
But for the web-app, you should run:
```bash
$ npm run web-app:ncu
```