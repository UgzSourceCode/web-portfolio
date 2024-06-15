# How to update packages?

## Steps
1. Before updating packages, ensure that all existing packages are installed.
2. Use the npm check updates tool to check for updates:
   - For root packages in the root directory, run:
   ```bash
   $ ncu
   ```
   - For web-app specific packages in the root directory, run:
    ```bash
   $ npm run web-app:ncu
   ```
3. Visit the [npm website](https://www.npmjs.com/), search for the packages, and review the GitHub issues to see what problems users are experiencing with the latest version and any breaking changes that might affect you.

> [!WARNING]
> 
> If a package update requires significant changes to your code, please perform the following steps iteratively—updating one package (and its potential dependencies) per commit.

4. If everything is clear or the problems are acceptable, update the version number in the package.json file for the specific application.
5. Make any necessary changes to your code.
6. After making the changes, you should:
   - Run linter check and fix
   - Run formatter
   - Run the tests
   - Run app and check it manually
7. If everything works correctly, create a pull request with the updates.