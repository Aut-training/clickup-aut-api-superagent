# ClickUp Automation API Testing
Clickup API testing using Mocha, Chai and Superagent

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

```
Nodejs
```

## Installing

Clone the project

```
git clone https://github.com/Aut-training/axios-cucumber.git
```

Run install command inside the project folder

```
npm install
```

## Running the tests

Run test command inside the project folder

```
npm test
```

## Running linter

Run eslint command inside the project folder

```
npm run eslint
```

## Debug with Visaul Studio Code

Add this configuration to launch.json in .vscode folder in the project.

```javascript
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "request": "launch",
            "name": "Debug All Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Debug Folders Endpoint Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--grep",
                "\"Folders Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Debug Lists Endpoint Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--grep",
                "\"Lists Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Debug Spaces Endpoint Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--grep",
                "\"Spaces Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Debug Tasks Endpoint Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Tasks Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Debug Task Templates Endpoint Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Task Templates Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Debug Views Endpoint Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Views Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Debug Checklists Endpoint Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Checklists Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Debug Comments Endpoint Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Comments Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Debug Tags Endpoint Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Tags Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Debug Teams Endpoint Mocha Tests",
            "type": "node",
            // Notice, we bypass the launcher and start the test runner directly
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            // run the tests in the test folder
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Teams Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        }
    ]
}
```

## Authors

* **Luis Lopez** - *Automation Engineer* - [Github](https://github.com/lolpez)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
