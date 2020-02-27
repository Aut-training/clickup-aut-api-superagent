# ClickUp Automation API Testing
Clickup API testing using Mocha, Chai and Superagent

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

[Nodejs](https://nodejs.org/en/)

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

## Generate Documentation

Run doc command inside the project folder and the documentation files will be located at /docs folder

```
npm run doc
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
            "name": "All Mocha Tests",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--file",
                "./tests/setup.js"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Checklists Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Checklists Api endpoint\"",
                "--file",
                "./tests/setup.js"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Comments Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Comments Api endpoint\"",
                "--file",
                "./tests/setup.js"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Folders Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--grep",
                "\"Folders Api endpoint\"",
                "--file",
                "./tests/setup.js"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Goals Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Goals Api endpoint\""
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Lists Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--grep",
                "\"Lists Api endpoint\"",
                "--file",
                "./tests/setup.js"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Members Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--grep",
                "\"Members Api endpoint\"",
                "--file",
                "./tests/setup.js"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Spaces Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--grep",
                "\"Spaces Api endpoint\"",
                "--file",
                "./tests/setup.js"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Tags Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Tags Api endpoint\"",
                "--file",
                "./tests/setup.js"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Tasks Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Tasks Api endpoint\"",
                "--file",
                "./tests/setup.js"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Teams Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Teams Api endpoint\"",
                "--file",
                "./tests/setup.js"
            ],
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": null,
            "env": {},
            "console": "integratedTerminal"
        },
        {
            "request": "launch",
            "name": "Views Endpoint",
            "type": "node",
            "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": true,
            "args": [
                "tests/*.spec.js",
                "--no-timeouts",
                "--fgrep",
                "\"Views Api endpoint\"",
                "--file",
                "./tests/setup.js"
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

* **Romer Chavez** - *Automation Engineer* - [Github](https://github.com/R0m3rCh)
* **Mauricio Iriarte** - *Automation Engineer* - [Github](https://github.com/miv1)
* **Luis Lopez** - *Automation Engineer* - [Github](https://github.com/lolpez)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
