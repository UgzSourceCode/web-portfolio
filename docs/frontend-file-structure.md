# Web-APP file structure

## Example
```shell
/ web-app
├── public/                         # This directory contains all files which should be public on the website
│   └── locales                     # This directory contains all translations files
│   │   ├── en                      # This directory contains all English translations files 
│   │   │     └── translation.json  # This file contains translations data for the English language
│   │   ├── pl                      # This directory contains all Polish translations files
│   │   │     └── translation.json  # This file contains translations data for the Polish language
├── src/                            # Directory containing source files 
│   ├── App/                        # This directory contains files for App component and directories with components for this component
│   │   ├── Footer/                 # This directory contains files for Footer component
│   │   │   ├── ...                 # All files related to the Footer component like component.tsx
│   │   │   └── index.ts            # API file which should re-export public elements from other files in the same directory
│   │   ├── Header/                 # Directory containing files for the Header component
│   │   │   ├── ...                 # All files related to the Header component
│   │   │   └── index.ts            # API file which should re-export public elements from other files in the same directory
│   │   ├── BodyContainer/          # Directory containing files for the BodyContainer component
│   │   │   ├── ...                 # All files related to the BodyContainer component
│   │   │   └── index.ts            # API file which should re-export public elements from other files in the same directory
│   │   ├── ...                     # Other files related to the App component
│   │   └── index.ts                # API file which should re-export public elements from other files in the same directory
│   ├── AboutMe/                    # Directory containing files for the AboutMe section
│   │   ├── LinkSection/            # Directory containing files for the LinkSection component
│   │   │   ├── ...                 # All files related to the LinkSection component
│   │   │   └── index.ts            # API file which should re-export public elements from other files in the same directory
│   │   ├── DescriptionSection/     # Directory containing files for the DescriptionSection component
│   │   │   ├── ...                 # All files related to the DescriptionSection component
│   │   │   └── index.ts            # API file which should re-export public elements from other files in the same directory
│   │   ├── SkillSection/           # Directory containing files for the SkillSection component
│   │   │   ├── ...                 # All files related to the SkillSection component
│   │   │   └── index.ts            # API file which should re-export public elements from other files in the same directory
│   │   ├── ...                     # Other files related to the AboutMe section
│   │   └── indes.ts                # API file which should re-export public elements from other files in the same directory
│   ├── theme/                      # Directory containing theme-related files
│   │   ├── colors.ts               # File containing color constants
│   │   └── index.ts                # API file which should re-export public elements from other files in the same directory
│   ├── shared-atomic-components/   # Directory containing shared atomic components used across the application
│   ├── i18n.ts                     # File containing internationalization configuration
│   ├── index.css                   # CSS file for global styles
│   ├── main.tsx                    # Main entry point file
│   └── vite-env.d.ts               # TypeScript definitions for Vite environment
├── biome.json                      # Configuration file for biome settings
├── index.html                      # Main HTML file
├── package.json                    # Package configuration file
├── package-lock.json               # Dependency lock file
├── README.md                       # Project README file
├── tsconfig.json                   # TypeScript configuration file
├── tsconfig.node.json              # TypeScript configuration file for Node.js
└── vite.config.ts                  # Vite configuration file
```

## Description of frontend file structure
[will be done in the feature]

## API File
This file should export all elements from other files in this directory. These exports reduce the number of imports required.