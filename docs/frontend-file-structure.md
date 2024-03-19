# Web-APP file structure

## Example
```shell
/
├── public/                        # Directory containing configuration of Git hooks in Husky 
│   └── pre-commit                 # Plik opisujący akcje wykonywane przed zatwierdzeniem zmian (np. lintowanie)
├── src/                        # Directory containing additional files for Markdown documents
│   ├── github-flow-diagram.png    # Example file in assets
│   └── ...                        # All other files
├── docs/                          # Folder z dokumentacją
│   ├── ADR/                       # Folder z Architekturą Decyzji Rejestracji (ADR)
│   ├── feature-description/       # Dictionary containing business requirements related to functionality
│   ├── PoC/                       # Folder z opisami Proof of Concept (PoC)
│   ├── adl.md                     # Plik z opisem Architektury Drzewa Decyzji (ADL)
│   └── git-branching.md           # Plik z opisem tworzenia branchy, PR i issues
├── web-app/                       # Folder z aplikacją frontendową (struktura opisana gdzie indziej)
├── .gitignore                     # Plik konfiguracyjny Git ignorujący określone pliki i katalogi
├── LICENSE                        # File with License of this source code
├── package-lock.json              # Plik konfiguracyjny Git ignorujący określone pliki i katalogi
├── package.json                   # Plik konfiguracyjny npm dla biblioteki Husky
└── README.md                      # Plik konfiguracyjny npm dla biblioteki Husky
```