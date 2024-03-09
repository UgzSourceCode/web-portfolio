# BiomeJS as linter and formatter
[< Back to PoC's list](README.md)

## Link to ADR
`placeholder for link`

## Branch name
`PoC-biomejs-linter`

## Problem description
The project needs a linter and formatter for better code quality. A few libraries are new, so they need to be compared.

## What is testing?
Testing is BiomeJs. Biome is a fast formatter for JavaScript, TypeScript, JSX, and JSON.

Link to project: https://biomejs.dev/


## What metrics will be used to compare solutions?
- Formatting time: the time from start to finish of the formatting process.
- Lint fixing time: the time from start to finish of fixing linting issues.
- Lint checking time: the time from start to finish of the linting process.
- Integration with IDE: existing plugin/extension.

Time in terminal will be measured by `hyperfine`  on mac os. 

## Expectations
`BiomeJS` is tool based on Rust stack, so I expect that this tool will be faster than eslint.

## Results for this PoC
- Formatting time

![img.png](../../assets/biomejs-time-format.png)
Average user time: 440.0 ms
Minimal user time: 438.4 ms
Maximum user time: 441.4 ms

- Lint fixing time

![img.png](../../assets/biomejs-time-lint-fix.png)
Average user time: 447.9 ms
Minimal user time: 439.5 ms
Maximum user time: 504.6 ms

- Lint checking time



- Integrations with IDE
Biome has plugins for a few IDEs. However, for the development of this project, I use WebStorm, which doesn't have a plugin.

## Observations
1. Biome have a lot more default enable rule than eslint. For example:
- `lint/style/noNonNullAssertion`
![img.png](../../assets/biomejs-noNonNullAssertion-example.png)
- `noBlankTarget`
![img.png](../../assets/biomejs-noBlankTarget-example.png)
- `lint/a11y/useButtonType`
![img.png](../../assets/biomejs-useButtonType-example.png)
2. Biome have prettier alternative(code formatter) inside without additional package.
3. Based on Biome GitHub issues i guess that it's not good option for comercial project which need stable tools. But for small project like this it can be great option. And I belive that this tool in the future will be better.