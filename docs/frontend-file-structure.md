# Web-APP file structure

## Example
```shell
/ web-app
├── public/                         # This directory contains all file which should be public on website
│   └── locales                     # This directory contains all translations files
│   │   ├── en                      # This directory contains all English translations files 
│   │   │     └── translation.json  # This file contains translations data for English language
│   │   ├── pl                      # This directory contains all Polish translations files
│   │   │     └── translation.json  # This file contains translations data for Polish language
├── src/                            # Directory containing source files 
│   ├── App/                        #
│   │   ├── Footer/                 #
│   │   ├── Header/                 #
│   │   ├── BodyContainer/          #
│   │   └── ...                     # 
│   ├── AboutMe/                    #
│   │   ├── LinkSection/            #
│   │   ├── DescriptionSection/     #
│   │   ├── SkillSection/           #
│   │   ├── indes.ts                # File 
│   │   └── ...                     # Another files to  
│   ├── theme/                      #
│   ├── shared-components/          #
│   ├── i18n.ts                     #
│   ├── index.css                   #
│   ├── main.tsx                    #
│   └── vite-env.d.ts               # 
├── biome.json                      #
├── index.html                      #
├── package.json                    #
├── package-lock.json               #
├── README.md                       #
├── tsconfig.json                   #
├── tsconfig.node.json              #
└── vite.config.ts                  #
```

## Description of frontend file structure
[will be done in the feature]