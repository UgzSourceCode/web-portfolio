# Which library for translation?
[< Back to ADR's list](README.md)

## Context and  Problem Statement
This project should support 2 languages (Polish and English), so for implement it's needed some translations' library.

## Considered Options
- i18next

### i18next
Link: https://www.i18next.com/

Pros:
- Robust and Established
- Extensive Plugin Ecosystem
- Comprehensive Documentation
- Active Community Support

Cons:
- Potential Overhead
- Limited Built-in Features - for a lot of feature is needed 
- Using i18next with plugins may introduce additional dependencies and potential compatibility issues, requiring careful management and updates over time

## Suggestion
Good option is load translations from json file, and has possibility to check device language.

## Decision Outcome
I didn't find a good and popular alternative to i18next. Many of the libraries I found are helpers or wrappers for i18n. Therefore, I decided that I should use i18next with plugins for language detection, fetching files from the backend, and providing some React hooks.