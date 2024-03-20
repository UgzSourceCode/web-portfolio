# File structure
This document should describe structure of directories and files.

## Example
```shell
/
├── .husky/                                   # Directory containing configuration of Git hooks in Husky 
│   └── pre-commit                            # Pre commit scripts for Git hooks)
├── assets/                                   # Directory containing additional files for Markdown documents
│   ├── github-flow-diagram.png               # Example file in assets
│   └── ...                                   # All other files
├── docs/                                     # Dictionary containing documentation
│   ├── ADR/                                  # Dictionary containing Architecture Decision Record (ADR)
│   │   ├── 001-which-framewrk-frontend.md    # Example file with ADR document
│   │   ├── ...                               # All other files with ADR document
│   │   ├── README.md                         # List of ADR documents
│   │   └── template.md                       # Template for ADR documents
│   ├── feature-description/                  # Dictionary containing business requirements related to functionality
│   │   ├── 001-footer.md                     # Example file with feature description
│   │   ├── ...                               # All other files with feature description
│   │   ├── README.md                         # List of feature descriptions
│   │   └── template.md                       # Template for feature description document
│   ├── PoC/                                  # dictionary containing with Proof of Concept (PoC) documents
│   │   ├── 001-BiomeJS-linter.md             # Example file with PoC description
│   │   ├── ...                               # All other files
│   │   ├── README.md                         # List of PoC description
│   │   ├── template.md                       # Template for PoC description
│   ├── adl.md                                # File with description Architecture Description Language (ADL)
│   ├── assumptions.md                        # File containing a list of fundamental assumptions adopted in the project 
│   ├── diary.md                              # File containing notes from every day when I working on this project
│   ├── file-structure.md                     # File containing file structure description
│   ├── frontend-file-structure.md            # File containing file structure description for web-app (frontend)
│   ├── git-branching.md                      # File containing procedures work with git (description how to create branch, PR and issues)
│   └── README.md                             # File containing contents of documentation
├── web-app/                                  # Dictionary containing frontend part of project
├── .gitignore                                # Configuration git file - files to not observe by git
├── LICENSE                                   # File with License of this source code
├── package-lock.json                         # Configuration file for node.js
├── package.json                              # Configuration file for node.js
└── README.md                                 # README file for this repo
```

## `.husky`


## `assets`
## `docs`
### `docs/ADR`
### `docs/feature-description`
### `docs/PoC`
## `web-app`
More about it inside [docs/frontend-file-structure.md](frontend-file-structure.md)
## root files
### ``

## In the feature
If this project need some backend then probably should be in `api` dictionary.