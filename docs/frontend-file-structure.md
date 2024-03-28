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
│   ├── Assets/                     # This directory contains additional files, such as images.
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

## Creating Folders and Files for New Components
When creating new components in the project, it's essential to follow a consistent folder and file structure to maintain organization and facilitate collaboration. Below are the steps to create folders and files for new components:

1. Choose a Descriptive Name: Start by choosing a descriptive name for your new component. This name should reflect the purpose or functionality of the component.
2. Create a New Folder: Within the appropriate directory (as low in the directory structure as possible, e.g., if this component will only be used within another component, then it should be created inside the parent component's directory), create a new folder with the name of your component. This folder will contain all files related to the component.
3. Component Files: Inside the component folder, create the necessary files for your component. Typical files may include:
   * Component File: This file contains the main logic and structure of the component. It usually has a .tsx extension for TypeScript-based projects or .jsx for JavaScript-based projects. Name this file after your component, e.g., MyComponent.tsx.
   * Stylesheet: If your component requires specific styles, create a separate theme file. You can name it `theme.ts`.
   * Tests: If writing tests for your component, create a test file within the component folder. You can name it `test.ts`.
   * Other Supporting Files: Depending on your project requirements, you may need additional files such as constants or utility functions specific to your component. Assets like images should be placed in the `src/assets` directory.
   * Index File: Consider creating an index.ts file within the component folder. This file can serve as an API file to re-export public elements from other files within the same directory, promoting encapsulation and simplifying imports.

By following this structure, you ensure consistency and clarity in your project's codebase. Each component resides in its own folder, making it easier to locate and modify specific parts of the application. Additionally, adopting naming conventions and including optional index files can enhance code readability and maintainability.

## API File
This file should export all elements from other files in this directory. These exports reduce the number of imports required.

## Moving component
If your component will be used in another place too, then move it to common directory as low in the directory structure as possible.